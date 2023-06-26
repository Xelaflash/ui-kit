// next/react
import Link from 'next/link';
import Image from 'next/image';

// Assets
import logo from '../../public/logo.png';

// components
import GlowButton from './components/GlowButton/GlowButton';
import Accordion from './components/Accordion/Accordion';

export default function Home() {
  return (
    <main className="min-h-screen p-24 ">
      <div className="m-auto w-fit flex gap-10 items-center font-mono mb-16 pb-2 border-b-2 border-fuchsia-900 ">
        <Image src={logo} alt="Picture of the author" width={80} height={80} />
        <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-blue-500/50">
          UI Kit
        </h1>
      </div>

      <div className="flex place-items-center">
        <Link
          href="http://localhost:6006/"
          className="font-mono  mb-16 text-xl text-white underline underline-offset-4 hover:no-underline"
          target="_blank"
        >
          🚧 View StoryBook 🚧
        </Link>
      </div>
      <div>
        <h2 className="my-16 font-mono underline underline-offset-2 m-auto text-center text-4xl">
          Components
        </h2>
        <GlowButton />
        <Accordion />
      </div>
    </main>
  );
}
