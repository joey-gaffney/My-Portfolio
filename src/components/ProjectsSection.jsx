import React from "react";
import projectdata from "../../data/projectdata.js";
import ProjectsItem from "./ProjectsItem.jsx";

const ProjectsSection = () => {
  return (
    <section
      id="web-development-projects"
      className="py-24 px-3 lg:px-0 container mx-auto"
    >
      <header className="text-center mb-16">
        <h2 className="text-6xl tracking-tighter font-extrabold">
          Things I've Built
        </h2>
      </header>
      {/* <p className="text-center">COMING SOON...</p> */}
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {projectdata.map((project) => (
          <ProjectsItem
            title={project.title}
            info={project.info}
            stack={project.stack}
            previewlink={project.previewlink}
            codelink={project.codelink}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
