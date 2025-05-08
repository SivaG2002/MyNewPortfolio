
import TypingAnimation from '@/components/typing-animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const roles = ["AI Developer", "Web Developer", "Gamer"];

export default function HomePage() {
  return (
    <section id="home" className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
          Hi, I am Siva G Nair
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10">
          I am a <TypingAnimation phrases={roles} />
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 text-lg shadow-lg transition-transform hover:scale-105">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-foreground border-primary hover:bg-primary/10 hover:text-primary rounded-full px-8 py-3 text-lg shadow-lg transition-transform hover:scale-105">
            <a href="/siva_g_nair_resume.pdf" download>
              Download CV <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
