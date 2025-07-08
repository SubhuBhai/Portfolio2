import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-amber-500 mb-12 text-center">
          Education
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-10 w-10 text-amber-500" />
              <div>
                <CardTitle>University of Engineering and Management</CardTitle>
                <p className="text-muted-foreground">B.Tech in Computer Science (2024 - 2028)</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Focusing on core computer science principles and specializing in software development and artificial intelligence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};