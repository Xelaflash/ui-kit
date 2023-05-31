'use client';

import GlowButton from './components/GlowButton/GlowButton';

export default function Home() {
  return (
    <main className=" min-h-screen p-24 ">
      <div className="font-mono  mb-16">
        <h1 className=" text-6xl font-bold text-white drop-shadow-lg shadow-blue-500/50">My UI Kit</h1>
      </div>

      <div className=" flex place-items-center">
        <GlowButton />
      </div>
    </main>
  );
}
