import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "AI Powered Chatbot",
    description:
      "A sophisticated chatbot leveraging advanced AI to understand and respond to user queries with remarkable accuracy and natural language processing capabilities.",
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    tags: ["AI", "NLP", "Python", "Machine Learning"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with a modern UI, secure payment gateway integration, and comprehensive inventory management system.",
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    liveLink: "#",
  },
  {
    id: "3",
    title: "Mobile Task Manager",
    description:
      "A sleek and intuitive mobile app for task management, designed to help users stay organized and productive on the go, with offline support.",
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    tags: ["React Native", "Firebase", "iOS", "Android"],
    sourceLink: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="bg-card text-card-foreground overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint="project application"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                {project.liveLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.sourceLink && (
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
