import React from "react";
import Card from "../components/card";
import projectsInfo from "../projectsInfo.json";
const projects = [
  {
    title: "Project1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur aut dolor quae error illo nisi praesentium necessitatibus exercitationem, fugiat autem quasi consequatur natus dolorem quis recusandae nulla doloribus. Officia quaerat architecto qui debitis itaque corrupti! Optio voluptate alias commodi accusamus nulla nisi saepe odit, quas facilis error, vero laudantium possimus.",
    image: "./vercel.svg",
    link: "https:www.google.com",
  },
  {
    title: "Project1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur aut dolor quae error illo nisi praesentium necessitatibus exercitationem, fugiat autem quasi consequatur natus dolorem quis recusandae nulla doloribus. Officia quaerat architecto qui debitis itaque corrupti! Optio voluptate alias commodi accusamus nulla nisi saepe odit, quas facilis error, vero laudantium possimus.",
    image: "./vercel.svg",
    link: "https:www.google.com",
  },
];
interface Project {
  image: string;
  description: string;
  live?: string;
name: string;
href: string,
source: string;
}
const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-fit mx-auto pt-12">
      {projectsInfo.map((project: Project) => (
        <Card
          image={project.image}
          description={project.description}
          name={project.name}
          link={project.live}
          key={project.name}
          href={project.href}
          source={project.source}
        />
      ))}
    </div>
  );
};

export default Projects;
