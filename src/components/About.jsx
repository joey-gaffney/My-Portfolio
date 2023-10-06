import React from "react";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <section id="about-joey-web-developer" className="py-24 px-3">
      <Motion.div
        initial={{ opacity: 0, scale: 0, translateX: 0 }}
        whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
        transition={{
          duration: 0.5,
          // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl tracking-tighter font-extrabold">
          A Bit About Me
        </h2>
      </Motion.div>
      <Motion.div
        initial={{ opacity: 0, scale: 0, translateX: 0 }}
        whileInView={{ opacity: 1, scale: 1, translateX: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          // ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" max-w-3xl mx-auto text-center"
      >
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
          <motion className="text-sm sm:text-lg opacity-70">
            Aside from code, I enjoy surfing and playing golf.
          </motion>
        </p>
      </Motion.div>
    </section>
  );
};

export default About;
