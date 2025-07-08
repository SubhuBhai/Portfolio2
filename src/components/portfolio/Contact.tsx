import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-500 mb-4">
          Get In Touch
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
        <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-primary-foreground">
          <a href="mailto:subharthi2006@gmail.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
        <div className="flex justify-center gap-4 mt-12">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/SubhuBhai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/subharthi-dutta-aiml/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};