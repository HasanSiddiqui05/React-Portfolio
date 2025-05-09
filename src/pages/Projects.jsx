import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/ui/card"
import {Button} from "../components/ui/button"

const ProjectCard = ({ project }) => {
    return (
      <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-t-2xl"
          />
          <h3 className="text-xl font-bold text-center mt-4">{project.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{project.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => window.open(project.link, "_blank")}>View Project</Button>
          <span className="text-xs text-gray-400">{project.techStack}</span>
        </CardFooter>
      </Card>
    );
  };

  const ProjectsGrid = ({ projects }) => {
    return (
      <div className="grid gap-4 p-4  sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  };
  
  
  const sampleProjects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS.",
      link: "https://example.com/portfolio",
      techStack: "React, Tailwind",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRags8Oc5nzX7kj4APoo4X_txsEVYj4EFD78w&s"
    },
    {
      title: "E-commerce App",
      description: "A full-stack e-commerce platform with Firebase integration.",
      link: "https://example.com/ecommerce",
      techStack: "React, Firebase",
      image: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383"
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with Markdown support and user authentication.",
      link: "https://example.com/blog",
      techStack: "Next.js, Supabase",
      image: "https://www.elegantthemes.com/blog/wp-content/uploads/2022/12/Best-Blogging-Platforms-featured-image.png"
    }
  ];

const Projects = () => {
  return (
  <div className="max-w-6xl mx-auto mt-30">
    <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
    <ProjectsGrid projects={sampleProjects} />
  </div>
  )
}

export default Projects


