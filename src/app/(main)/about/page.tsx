import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/assets/pro.png"
              alt="Siva G Nair - Professional Headshot"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-2xl border-4 border-primary"
              data-ai-hint="professional headshot"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-card text-card-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  Siva G Nair
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-base md:text-lg">
                <p>
                  Hello! I&apos;m Siva, a passionate and results-oriented developer with a strong foundation in Artificial Intelligence and Web Development. My journey in technology began with a fascination for how software can solve real-world problems and create engaging user experiences.
                </p>
                <p>
                  With experience in crafting intelligent applications and dynamic websites, I thrive on challenges that push the boundaries of innovation. I am proficient in various programming languages and frameworks, always eager to learn and adapt to new technologies.
                </p>
                <p>
                  Beyond coding, I&apos;m an avid gamer, which fuels my creativity and problem-solving skills. I believe in continuous learning and am always exploring new avenues in the tech world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card text-card-foreground shadow-lg text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-xl font-semibold">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                3+ years of hands-on experience in developing and deploying AI models and web applications across various industries.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground shadow-lg text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-xl font-semibold">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proficient in Python, JavaScript, React, Node.js, TensorFlow, PyTorch, and cloud platforms like AWS and Google Cloud.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground shadow-lg text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 text-xl font-semibold">Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Strong believer in teamwork and agile methodologies. Experienced in working with diverse teams to deliver high-quality products.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
