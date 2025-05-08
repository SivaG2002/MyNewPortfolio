
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  period: string;
  location?: string;
  description?: string;
}

const educationData: EducationEntry[] = [
  {
    id: "1",
    institution: "Sree Buddha College Of Engineering,Pattoor",
    degree: "B-Tech In Artificial Intelligence And Machine Learning",
    fieldOfStudy: "Artificial Intelligence",
    period: "2020 - 2024",
    location: "Pattoor, Pathanamthitta",
    description: "Focused on machine learning, neural networks, and natural language processing. Thesis on generative adversarial networks for image synthesis.",
  },
  {
    id: "2",
    institution: "Sree Buddha Central School",
    degree: "Higher Secondary",
    fieldOfStudy: "Computer Science",
    period: "2018 - 2020",
    location: "Karunagappally,Kollam",
    description: "Core curriculum in data structures, algorithms, software engineering, and database management. Capstone project on a web-based collaborative platform.",
  },
];

export default function EducationPage() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((entry) => (
            <Card key={entry.id} className="bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                  {entry.institution}
                </CardTitle>
                <p className="text-primary font-medium text-base md:text-lg">{entry.degree}{entry.fieldOfStudy && `, ${entry.fieldOfStudy}`}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-muted-foreground text-sm">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{entry.period}</span>
                </div>
                {entry.location && (
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{entry.location}</span>
                  </div>
                )}
                {entry.description && (
                  <p className="text-muted-foreground pt-2 text-sm md:text-base">{entry.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
