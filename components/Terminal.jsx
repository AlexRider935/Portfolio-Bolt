"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal as TerminalIcon,
  X,
  Minimize2,
  Maximize2,
} from "lucide-react";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: "Show available commands",
      execute: () => [
        "Available commands:",
        "  help     - Show this help message",
        "  about    - Learn more about Alex",
        "  skills   - List technical skills",
        "  projects - Show recent projects",
        "  contact  - Get contact information",
        "  clear    - Clear terminal",
        "  whoami   - Display current user",
        "  ls       - List directory contents",
        "  cat      - Display file contents",
        "  sudo     - Execute with elevated privileges",
        "  exit     - Close terminal",
      ],
    },
    about: {
      description: "Learn more about Alex",
      execute: () => [
        "Alex Chen - Full Stack Developer & Security Researcher",
        "",
        "Passionate about building secure, scalable applications",
        "and hunting for vulnerabilities in the digital realm.",
        "",
        "Experience: 5+ years in development and cybersecurity",
        "Location: San Francisco, CA",
        "Status: Available for new opportunities",
      ],
    },
    skills: {
      description: "List technical skills",
      execute: () => [
        "Technical Skills:",
        "",
        "Languages:     JavaScript, Python, Go, Rust, TypeScript",
        "Frontend:      React, Next.js, Vue.js, Tailwind CSS",
        "Backend:       Node.js, Express, FastAPI, Gin",
        "Databases:     PostgreSQL, MongoDB, Redis",
        "Cloud:         AWS, Docker, Kubernetes",
        "Security:      Penetration Testing, OWASP, Burp Suite",
        "Tools:         Git, VS Code, Wireshark, Metasploit",
      ],
    },
    projects: {
      description: "Show recent projects",
      execute: () => [
        "Recent Projects:",
        "",
        "1. SecureVault     - End-to-end encrypted password manager",
        "2. ThreatHunter    - AI-powered threat detection system",
        "3. CloudGuard      - Automated cloud security compliance",
        "4. VulnScanner     - High-performance vulnerability scanner",
        "",
        'Type "cat project_name" for more details',
      ],
    },
    contact: {
      description: "Get contact information",
      execute: () => [
        "Contact Information:",
        "",
        "Email:     Alex.Rider@example.com",
        "LinkedIn:  linkedin.com/in/alexchen",
        "GitHub:    github.com/alexchen",
        "Website:   alexchen.dev",
        "",
        "Response time: Usually within 24 hours",
      ],
    },
    whoami: {
      description: "Display current user",
      execute: () => ["guest@alexchen.dev"],
    },
    ls: {
      description: "List directory contents",
      execute: () => [
        "total 8",
        "drwxr-xr-x  2 alex  staff   64 Dec 15 10:30 projects/",
        "drwxr-xr-x  2 alex  staff   64 Dec 15 10:30 skills/",
        "-rw-r--r--  1 alex  staff  1.2K Dec 15 10:30 about.txt",
        "-rw-r--r--  1 alex  staff  856 Dec 15 10:30 contact.txt",
        "-rw-r--r--  1 alex  staff  2.1K Dec 15 10:30 resume.pdf",
      ],
    },
    clear: {
      description: "Clear terminal",
      execute: () => {
        setHistory([]);
        return [];
      },
    },
    exit: {
      description: "Close terminal",
      execute: () => {
        setIsOpen(false);
        return ["Terminal session ended."];
      },
    },
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (trimmedCmd === "") return [];

    // Add to command history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    // Handle special commands
    if (trimmedCmd.startsWith("cat ")) {
      const filename = trimmedCmd.substring(4);
      if (filename === "about.txt") {
        return commands.about.execute();
      } else if (filename === "contact.txt") {
        return commands.contact.execute();
      } else {
        return [`cat: ${filename}: No such file or directory`];
      }
    }

    if (trimmedCmd.startsWith("sudo ")) {
      return [
        "sudo: Permission denied.",
        "Nice try! 😄",
        "This is a demo terminal - no sudo access here.",
      ];
    }

    if (commands[trimmedCmd]) {
      return commands[trimmedCmd].execute();
    }

    return [`Command not found: ${cmd}. Type 'help' for available commands.`];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const output = executeCommand(input);
      setHistory((prev) => [
        ...prev,
        { type: "input", content: `guest@alexchen.dev:~$ ${input}` },
        { type: "output", content: output },
      ]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}>
        <TerminalIcon className="w-6 h-6 text-black" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="relative w-full max-w-4xl h-96 bg-black/90 backdrop-blur-md border border-green-500/30 rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}>
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-3 bg-gray-900/50 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <TerminalIcon className="w-4 h-4" />
                  <span>alex@terminal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-700 rounded">
                    <Minimize2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-gray-700 rounded">
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-red-500 rounded">
                    <X className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="h-full flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
                  {/* Welcome message */}
                  {history.length === 0 && (
                    <div className="text-green-400 mb-4">
                      <p>Welcome to Alex Chen's interactive terminal!</p>
                      <p>Type 'help' to see available commands.</p>
                      <p>Press Ctrl+` to toggle this terminal.</p>
                      <br />
                    </div>
                  )}

                  {/* Command history */}
                  {history.map((entry, index) => (
                    <div key={index} className="mb-2">
                      {entry.type === "input" ? (
                        <div className="text-green-400">{entry.content}</div>
                      ) : (
                        <div className="text-gray-300">
                          {Array.isArray(entry.content) ? (
                            entry.content.map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))
                          ) : (
                            <div>{entry.content}</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Current input line */}
                  <form onSubmit={handleSubmit} className="flex items-center">
                    <span className="text-green-400 mr-2">
                      guest@alexchen.dev:~$
                    </span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-white outline-none"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
