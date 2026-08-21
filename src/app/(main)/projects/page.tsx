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
import { Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  primaryTag: string;
  liveLink?: string;
  sourceLink?: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "CODE BRIDGE",
    description:
      "A software that converts pseudo code to source code using advanced Natural Language Processing techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    tags: ["NLP", "Python", "AI"],
    primaryTag: "NLP",
    sourceLink: "https://github.com/SivaG2002/PseuToPy",
  },
  {
    id: "2",
    title: "Botanic Vision",
    description:
      "An AI software designed to detect rice leaf diseases and recommend appropriate medicines for treatment.",
    imageUrl:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    tags: ["Computer Vision", "AI", "Medicine"],
    primaryTag: "Computer Vision",
    sourceLink: "https://github.com/SivaG2002/Botanic-Vision",
    liveLink: "https://ijercse.com/botanicvision-rice.php",
  },
  {
    id: "3",
    title: "Forest Species Prediction",
    description:
      "Classifies forest types based on environmental features like elevation, aspect, slope, and proximity to water bodies.",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Machine Learning", "Classification", "Environmental"],
    primaryTag: "ML",
    sourceLink: "https://github.com/SivaG2002/Forest-Species-Prediction",
  },
  {
    id: "4",
    title: "Wine-Purity-Detector",
    description:
      "A machine learning model designed to analyze and determine the purity levels of wine samples.",
    imageUrl:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Machine Learning", "Analysis", "Model"],
    primaryTag: "ML",
    sourceLink: "https://github.com/SivaG2002/Wine-Purity-Detector",
  },
  {
    id: "5",
    title: "Trash Detection",
    description:
      "Computer vision application for detecting and classifying different types of trash and waste materials.",
    imageUrl:
      "https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&w=1200&q=80",
    tags: ["Computer Vision", "Detection", "AI"],
    primaryTag: "Computer Vision",
    sourceLink: "https://github.com/SivaG2002/Trash_Detection",
  },
  {
    id: "6",
    title: "Hostel Management",
    description:
      "A comprehensive hostel management system for handling fee payments and administrative tasks.",
    imageUrl:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Management", "Finance"],
    primaryTag: "Python",
    sourceLink: "https://github.com/SivaG2002/hostelmgt",
  },
  {
    id: "7",
    title: "Campus Sphere",
    description:
      "An Instagram-like social platform designed for college students to connect and share content within campus.",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Social", "Web"],
    primaryTag: "Python",
    sourceLink: "https://github.com/SivaG2002/campussphere",
  },
  {
    id: "8",
    title: "Exam Seating",
    description:
      "An automated exam seat arrangement system that efficiently organizes seating for examinations.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Automation", "Education"],
    primaryTag: "Python",
    sourceLink: "https://github.com/SivaG2002/exam_seating",
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
              className="bg-card text-card-foreground overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                  {project.primaryTag}
                </Badge>
              </div>
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
