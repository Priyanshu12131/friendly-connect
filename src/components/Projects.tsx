import { useState } from "react";
import { ExternalLink, Github, Cpu, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software" },
  { id: "vlsi", label: "VLSI/Hardware" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and real-time inventory management.",
    image: "/placeholder.svg",
    category: "software",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "RISC-V Processor Core",
    description: "A 5-stage pipelined RISC-V processor implementation in Verilog. Includes hazard detection, forwarding logic, and branch prediction.",
    image: "/placeholder.svg",
    category: "vlsi",
    technologies: ["Verilog", "SystemVerilog", "FPGA", "Vivado"],
    github: "https://github.com",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "A scalable chat application using WebSockets, featuring group chats, file sharing, and end-to-end encryption.",
    image: "/placeholder.svg",
    category: "software",
    technologies: ["React", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "DDR Memory Controller",
    description: "High-performance DDR4 memory controller design with optimized scheduling algorithms and power management features.",
    image: "/placeholder.svg",
    category: "vlsi",
    technologies: ["SystemVerilog", "UVM", "Cadence", "Synopsys"],
    github: "https://github.com",
  },
  {
    id: 5,
    title: "Task Management Dashboard",
    description: "A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and analytics.",
    image: "/placeholder.svg",
    category: "software",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 6,
    title: "AES Encryption Engine",
    description: "Hardware implementation of AES-256 encryption with optimized throughput and low-power design for IoT applications.",
    image: "/placeholder.svg",
    category: "vlsi",
    technologies: ["VHDL", "Xilinx", "ASIC Design", "Power Analysis"],
    github: "https://github.com",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work, from full-stack applications to hardware designs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                activeCategory === category.id
                  ? "gradient-bg text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {category.id === "vlsi" && <Cpu className="w-4 h-4" />}
              {category.id === "software" && <Code className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl glass overflow-hidden hover:bg-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  {project.category === "vlsi" ? (
                    <Cpu className="w-16 h-16 text-primary/50" />
                  ) : (
                    <Code className="w-16 h-16 text-primary/50" />
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm font-medium capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button size="sm" className="flex-1 gradient-bg hover:opacity-90" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
