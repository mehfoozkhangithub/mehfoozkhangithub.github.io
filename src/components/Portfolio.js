import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2>
          <p className='subtitle'>
           This is all  have done past 6 - 7 month of journey and i cover the knowledged of full stack development and I build some good web site clone withe the knowledge i cover form masai. 
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
