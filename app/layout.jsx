import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Alex Chen - Developer & Security Researcher',
  description: 'Portfolio of Alex Chen - Full Stack Developer and Cybersecurity Researcher',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}