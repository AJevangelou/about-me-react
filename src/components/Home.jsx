import React from 'react';
import Typewriter from './Typewriter';

const Home = () => {
  return (
    <React.Fragment>
      <section id='home' className='bg-slate-800 w-full flex xl:flex-row flex-col justify-center min-h-screen padding-x'>
        <div className='relative flex flex-col justify-center items-start max-lg:items-center w-full max-xl:mx-auto pt-10 xl:px-6'>
          <h1 className='leading-none mt-0 text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='mt-0 text-red-400 xl:whitespace-nowrap relative z-10 pr-10'>I'm Alex,</span>
            <br />
            <span className='max-md:text-2xl text-4xl text-white xl:whitespace-nowrap relative z-10 pr-10'>A Tech Enthusiast 🚀</span>
            <br />
            <span className='max-md:text-2xl text-4xl text-white xl:whitespace-nowrap relative z-10 pr-10'>Specializing in:</span>
            <br />
            <span className='max-md:text-4xl text-7xl font-custom1 text-white relative z-10 pr-10'>
              <Typewriter />
            </span>
          </h1>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
