// next/react
import Link from 'next/link';
import Image from 'next/image';

// Assets
import logo from '../../public/logo.png';

// components
import GlowButton from './components/GlowButton/GlowButton';
import Accordion from './components/Accordion/Accordion';
import AnimatedReadingList from './components/AnimatedReadingList/AnimatedReadingList';

export default function Home() {
  return (
    <main className="min-h-screen p-24 ">
      <div className="flex items-center gap-10 pb-2 m-auto mb-16 font-mono border-b-2 w-fit border-fuchsia-900 ">
        <Image src={logo} alt="Picture of the author" width={80} height={80} />
        <h1 className="text-6xl font-bold text-white drop-shadow-lg shadow-blue-500/50">
          UI Kit
        </h1>
      </div>

      <div className="flex place-items-center">
        <Link
          href="http://localhost:6006/"
          className="mb-16 font-mono text-xl text-white underline underline-offset-4 hover:no-underline"
          target="_blank"
        >
          🚧 View StoryBook 🚧
        </Link>
      </div>
      <div>
        <h2 className="m-auto my-16 font-mono text-4xl text-center underline underline-offset-2">
          Components
        </h2>
        <GlowButton />
        <Accordion />
        <AnimatedReadingList />
      </div>
    </main>
  );
}
