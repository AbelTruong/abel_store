import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 text-teal-700 font-bold ${inter.className}`}
    >
      <div className="">Home page nha ba con</div>
    </main>
  );
}
