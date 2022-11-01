import React from 'react';

// import skill data
import { skills } from '../data';

const styles={
  display:"grid",
  gridTemplateColumns:"repeat(6,1fr)",
  gridTemplateRows:"repeat(auto)",
  margin:"auto",
  gap:'20px'
}


const Skills = () => {
  return (
    <section id='portfolio' className='bg-tertiary py-12'>
    <h2 className='section-title text-center mb-16' >skills</h2>
      <div className='container mx-auto'>
        <div
        
          style={styles}
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='lg:h-20 sm:h-16' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
