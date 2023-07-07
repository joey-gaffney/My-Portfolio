import React from "react";

const ProjectsItem = ({
  title,
  info,
  stack,
  previewlink,
  codelink,
  imgUrl,
}) => {
  const handlePreviewLinkClick = (e) => {
    e.preventDefault();
    window.open(previewlink, "_blank");
  };
  return (
    <div className="group  ">
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
      <span className=" inline-block text-sm">Built with:</span>{" "}
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
    </div>
  );
};

export default ProjectsItem;
