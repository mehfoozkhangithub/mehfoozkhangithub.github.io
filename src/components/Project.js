import React from "react";
import { FiExternalLink, FiGithub, FiLink } from "react-icons/fi";
import "./common.css";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center  style"
    >
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt={item.name} />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md mb-2">{item.description}</p>
      <h4 className="text-md mb-2">Tech Stack</h4>
      <div className="flex gap-12  capitalize text-accent text-sm mb-4 ">
        <p>{item.stack}</p>
      </div>
      <div className="flex gap-12 text-xl">
        <a href={item.git} target={"blank"}>
          <p class=" projectGitIcon">
            <FiGithub />
          </p>
        </a>
        <a href={item.link} target={"blank"}>
          <p class=" projectGitIcon">
            <FiExternalLink />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Project;
