import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    role: "Frontend Developer",
    title: "Responsive Signup Page",
    description: "Designed and developed a fully responsive signup page using HTML, CSS, and Tailwind CSS. Focused on creating a sleek layout with layered background visuals and interactive form components.",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    learnings: "Gained practical experience in utility-first CSS, responsive design principles, and semantic HTML structure."
  },
  {
    role: "Full Stack Learner",
    title: "Personal Portfolio Website",
    description: "Currently building this personal portfolio to showcase projects and skills. Implementing reusable UI components, smooth animations, and a clean, responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    learnings: "Exploring component-based architecture, modern styling with Tailwind, and responsive design."
  },
  {
    role: "Self-Learner",
    title: "Mini Frontend Projects",
    description: "Created multiple small projects like animated buttons, mobile-friendly navbars, and landing pages to understand the real-world application of Tailwind CSS and core JavaScript logic.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    learnings: "Boosted development speed, learned to debug layout issues, and improved design consistency."
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-500 mb-12 text-center">
          Projects & Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.role}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <p><span className="font-semibold text-foreground">What I learned:</span> <span className="text-muted-foreground">{project.learnings}</span></p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};