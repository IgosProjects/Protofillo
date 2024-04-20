
import { FaGithub } from 'react-icons/fa';


export default function Home() {



  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <div className='text-white flex items-center justify-center'>
          <span>
            <FaGithub />
          </span>
        </div>
      </header>
      <div className="z-10 w-full max-w-5xl text-white dark:bg-white-500  font-mono text-sm lg:flex animate-slide-in">
        <section >
          <div className="container">
             <h1 className="text-3xl font-bold">Igor Seili</h1>
          <p>Hey guys, I'm Igor Seili. I make applications and websites. I started coding at 6 years old, and here I am now working hard to reach my goal. I'm a hobby programmer, more like a student. I still go to school, but I love the idea of computers and logic. My job here is to prove you don't need a big old datacenter to have a site that runs fine.</p>
          </div>
         

        </section>
    
        <section className='mt-5' >
          <div className="container">
         <h1 className="text-3xl font-bold">My work</h1>
          <p>Im known as the man who made Project GUI or more called Gxml.Most say all it took was 49 lines of python code to bring a new way of programing to life as it was not that hard it payed off as a student who has been coding since 6 im impressed.I learned html in just 2 weeks and there i was alone thats why i made Project GUI to make guis that just pop.</p>   
          </div>
        
        </section>

        <section className='mt-5' >
          <div className="container">
         <h1 className="text-3xl font-bold">How it all started</h1>
          <p>It all started in 2021-2020-ish i was writing some python as i kid i was messing with python a lot.Then i wanted to show an image so i wrote something in there did not work asked my brother he said you need a browser or a website learned HTML going to react then Next it was clear i gotta find a job now i work for myself earn money but making websites</p>   
          </div>
        
        </section>


      </div>
      <div>
      <p>Made with love with Next </p>
      </div>
    </main>
  );
}
