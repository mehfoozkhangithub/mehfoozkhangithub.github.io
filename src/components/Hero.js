import React from 'react';

// import woman image
import WomanImg from '../assets/img/myImg.jpg';
import Resume from '../assets/img/Mehfooz Khan.pdf';

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm 𝙈𝙖𝙝𝙛𝙤𝙤𝙯 𝙆𝙝𝙖𝙣! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Full Stack  <br /> Web Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
            Full stack developer who cares deeply about user experience.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              <a href={Resume} download={true}>Resume</a>
            </button>
          </div>
          <div className='hidden md:flex flex-1 justify-end items-center h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
