import dynamic from 'next/dynamic';
import { FaGithub } from 'react-icons/fa';
import Logos from './components/Logos';

// Import useClient from next
import { useClient } from 'next';

export default function Home() {
  // Use useClient to ensure client-side rendering
  const client = useClient();

  // Only run client-side code if client is true
  if (client) {
    console.log('This runs on the client side');
  }

  const DynamicThreeScene = dynamic(() => import('./components/Logos'), { ssr: false });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <div className='text-white flex items-center justify-center'>
          <span>
            <FaGithub />
          </span>
        </div>
      </header>
      <div className="z-10 w-full max-w-5xl text-white dark:bg-white-500 items-center justify-between font-mono text-sm lg:flex animate-slide-in">
        <section>
          <h1 className="text-3xl font-bold">Igor Seili</h1>
          <p>Hey guys, I'm Igor Seili. I make applications and websites. I started coding at 6 years old, and here I am now working hard to reach my goal. I'm a hobby programmer, more like a student. I still go to school, but I love the idea of computers and logic. My job here is to prove you don't need a big old datacenter to have a site that runs fine.</p>
        </section>
        <div></div>
        <section className="flex flex-col lg:flex-row lg:items-end lg:justify-start">
          <h1 className="text-3xl font-bold">My work</h1>
          <p>Im known as the man who made Project GUI or more called Gxml.Most say all it took was 49 lines of python code to bring a new way of programing to life as it was not that hard it payed off as a student who has been coding since 6 im impressed.I learned html in just 2 weeks and there i was alone thats why i made Project GUI to make guis that just pop.</p>
          <p></p>
          <Logos />
        </section>
      </div>
    </main>
  );
}
