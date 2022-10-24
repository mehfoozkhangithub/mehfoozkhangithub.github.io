import React from 'react';

// import social data
import { social } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index} target={"_blank"}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            {/* <img src={Logo} alt='' /> */}
            <h1 style={{fontSize:"1.5rem"}}>𝙈𝙖𝙝𝙛𝙤𝙤𝙯 𝙆𝙝𝙖𝙣</h1>
          </div>
          <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; Designed and build by 𝙈𝙖𝙝𝙛𝙤𝙤𝙯 𝙆𝙝𝙖𝙣, 2022 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
