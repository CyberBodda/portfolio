import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const projects = [
  {
    id: 1,
    title: "Habit Tracker",
    description:
      "A web app that helps you track every habit and doubles as a to-do list.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://habit-tracker-gilt-one.vercel.app/",
    githubURL: "https://github.com/CyberBodda/habit-tracker",
  },
  {
    id: 2,
    title: "Memory Card Game",
    description: "A memory card game with a tracking board.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "JavaScript"], // verify: is Node.js really used here?
    demoURL: "https://memory-card-phi-lilac.vercel.app/",
    githubURL: "https://github.com/CyberBodda/Memory-Card-Game",
  },
  {
    id: 3,
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracker that gives live updates on the crypto market.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://crypto-project-chi-gold.vercel.app/",
    githubURL: "https://github.com/CyberBodda/Crypto-tracker",
  },
];

// Each card watches itself, so cards that are off-screen
// (e.g. stacked on mobile) animate when *they* scroll into view.
const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: inView ? `${(index % 3) * 120}ms` : "0ms" }}
      className={cn(
        "group flex flex-col h-full bg-card rounded-lg overflow-hidden border border-border",
        "transition-all duration-700 ease-out hover:shadow-lg",
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      <a
        href={project.demoURL || project.githubURL}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-48 overflow-hidden cursor-pointer"
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </a>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        {/* mt-auto pushes the links to the bottom so all cards line up */}
        <div className="flex gap-3 mt-auto">
          {project.githubURL && (
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.demoURL && (
            <a
              href={project.demoURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of web projects that reflect my passion for building
          clean, functional, and user-centric digital experiences. Each project
          highlights my commitment to modern architecture, performance, and
          accessible design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CyberBodda"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};