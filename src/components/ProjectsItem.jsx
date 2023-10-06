import React from "react";
import { motion as Motion } from "framer-motion";

const ProjectsItem = ({
  title,
  info,
  stack,
  previewlink,
  codelink,
  imgUrl,
  index,
}) => {
  const handlePreviewLinkClick = (e) => {
    e.preventDefault();
    window.open(previewlink, "_blank");
  };

  const animationDelay = 0.1; // Adjust this value to set the delay for the second project

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0, blur: 20 }}
      whileInView={{ opacity: 1, scale: 1, blur: 0 }}
      transition={{
        duration: 0.3,
        delay: index === 0 ? animationDelay : 0.3, // Apply the delay only to the second project
        // ease: [0, 0.71, 0.2, 1.01],
        // ease: [0, 0.71, 0.2, 1.01],
      }}
      className="group  "
    >
      <a href="#" onClick={handlePreviewLinkClick}>
        <figure className="mb-6">
          <img
            src={imgUrl}
            alt=""
            className="rounded-2xl transition-all duration-300 group-hover:opacity-70"
          />
        </figure>
        <header className="mb-4">
          <h3 className=" text-2xl font-bold ">{title}</h3>
        </header>
        <p className=" opacity-70 mb-4 leading-7">{info}</p>
      </a>
      {stack.map((item) => (
        <span
          key={item}
          className="mr-2 bg-zinc-800 py-1 px-2 rounded-lg inline-block mb-4 text-sm"
        >
          {item}
        </span>
      ))}
      <div className="space-x-4 underline font-bold">
        <a
          href={previewlink}
          target="_blank"
          className="inline-block tracking-tighter font-bold"
        >
          Demo project
        </a>
        <a
          href={codelink}
          target="_blank"
          className="inline-block tracking-tighter font-bold"
        >
          Link to code
        </a>
      </div>
    </Motion.div>
  );
};

export default ProjectsItem;
