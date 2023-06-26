import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UI Kit',
  description: 'A UI Kit for inspiration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const timestamp = new Date().toLocaleString();

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>{timestamp}</footer>
      </body>
    </html>
  );
}
