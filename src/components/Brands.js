import React from 'react';

// import brands data
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div
        className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'
      >
        {brands.map((brand, idx) => {
          return (
            <div
              key={idx}
            >
              <img src={brand.img} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
