import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center px-3 lg:px-0">
      <div className="relative min-h-screen container mx-auto sm:flex justify-evenly items-center py-24 sm:py-0 space-y-16 text-center sm:text-left">
        <article className=" space-y-7 ">
          <p className="text-5xl md:text-7xl tracking-tighter font-extrabold">
            Hi, I'm Joey
          </p>
          <p className="text-4xl md:text-6xl tracking-tighter font-extrabold">
            A JavaScript Developer
          </p>
          <p className="tracking-widest">I like to write code... 👨‍💻</p>
          <a
            href="mailto:joeygaffney22@gmail.com"
            target="_blank"
            className="herobtn inline-block py-4 px-4 rounded-lg text-black font-extrabold tracking-tighter"
          >
            LET'S WORK TOGETHER
          </a>
        </article>
        <figure className="">
          <img
            src="/assets/IMG_3259.jpeg"
            alt=""
            className="heroimg w-72 sm:w-96 mx-auto rounded-2xl -rotate-3"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
