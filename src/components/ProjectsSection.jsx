import React from "react";
import projectdata from "../../data/projectdata.js";
import ProjectsItem from "./ProjectsItem.jsx";
import { motion as Motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section
      id="web-development-projects"
      className="py-24 px-3 lg:px-0 container mx-auto"
    >
      <Motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center mb-16"
      >
        <h2 className="text-6xl tracking-tighter font-extrabold">
          Things I've Built
        </h2>
      </Motion.div>
      {/* <p className="text-center">COMING SOON...</p> */}
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
        {projectdata.map((project, index) => (
          <ProjectsItem
            key={project.id}
            title={project.title}
            info={project.info}
            stack={project.stack}
            previewlink={project.previewlink}
            codelink={project.codelink}
            imgUrl={project.imgUrl}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
