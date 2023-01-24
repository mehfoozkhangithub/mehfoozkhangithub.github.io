import React from "react";
// this is the project
// import img
import Image from "../assets/img/full-stack-development.gif";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-[417px] w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content- relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                𝙈𝙖𝙝𝙛𝙤𝙤𝙯 𝙆𝙝𝙖𝙣
              </h2>
              <p className="mb-4 text-accent">Full Stack Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Absorbent and intuitive problem solver. Aspiring full-stack
                developer with a specialization in MERN stack. Passionate about
                building user-centric products by translating user requirements
                into technical solutions. <br />
                <br />
                Brian enjoys meeting new people and learning about their lives
                and backgrounds. He easily finds common interests with strangers
                and tends to make most people feel comfortable. He finds this
                skill especially advantageous when kicking off projects with new
                clients.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
