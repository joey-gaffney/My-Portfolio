import React from "react";

const About = () => {
  return (
    <section id="about-joey-web-developer" className="py-24 px-3">
      <header className="text-center mb-16">
        <h2 className="text-6xl tracking-tighter font-extrabold">
          A Bit About Me
        </h2>
      </header>
      <article className=" max-w-3xl mx-auto text-center">
        <p className="text-xl sm:text-3xl">
          I'm a front-end web developer currently working with JavaScript and
          React.{" "}
          <span className="aboutpink">
            My cousin Max, a software engineer at the NFL, introduced me to web
            development about two years ago. Since then, I've been coding
            everyday and haven't looked back.
          </span>
          <br />
          <br />
          <span className="text-sm sm:text-lg opacity-70">
            Aside from code, I enjoy surfing and playing golf.
          </span>
        </p>
      </article>
    </section>
  );
};

export default About;
