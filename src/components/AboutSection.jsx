import { Briefcase, Code, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const techStack = ["React", "TypeScript", "Tailwind CSS", "Next.js"];

const highlights = [
  {
    icon: Code,
    title: "Web Development",
    text: "Focused on clean design, seamless performance, and user-centric functionality.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    text: "Crafting intuitive digital experiences through minimalist UI design and user-first UX strategy.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    text: "Structured development. I combine precise project management with clean UI/UX to ensure every project is delivered efficiently and built to scale.",
  },
];

export const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div
            className={cn(
              "space-y-6 transition-all duration-700 ease-out",
              "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <h3 className="text-2xl font-semibold">Who am I?</h3>

            <p className="text-muted-foreground">
              I’m Abdelrahman Elmasry, a front-end developer based in Cairo,
              Egypt. I specialize in building responsive, accessible interfaces
              using React, Tailwind CSS, and the modern JavaScript ecosystem.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground">
              With a diverse background spanning law, education, and customer
              service, I bring a unique perspective to development—combining
              sharp problem-solving, meticulous organization, and a deep focus
              on user-centric communication to every project I build.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch!
              </a>
              <a
                href="/Abdelrahman-Elmasry-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                style={{ transitionDelay: inView ? `${200 + index * 150}ms` : "0ms" }}
                className={cn(
                  "gradient-border p-6 card-hover transition-all duration-700 ease-out",
                  "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};