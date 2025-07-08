import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Git",
  "Adobe Illustrator",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-500 mb-12 text-center">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-lg px-4 py-2 border-amber-500/50 text-amber-500">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};