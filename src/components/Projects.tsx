import { Cpu, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant Management System",
    description:
      "A basic restaurant management system designed to handle orders and manage workflow at a simple level.",
    category: "software",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase skills, education, and projects using a clean and responsive layout.",
    category: "software",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "SDG 7 Project",
    description:
      "Study and presentation on SDG 7: Ensuring access to affordable, reliable, sustainable, and modern energy for all.",
    category: "software",
    technologies: ["Research", "Presentation"],
  },
  {
    id: 4,
    title: "Traffic Light Controller",
    description:
      "Designed a traffic light controller using digital logic concepts for proper signal timing and control.",
    category: "vlsi",
    technologies: ["Digital Electronics", "VHDL"],
  },
  {
    id: 5,
    title: "QAM Analysis in Digital Communication",
    description:
      "Analysis of Quadrature Amplitude Modulation (QAM) techniques in digital communication systems.",
    category: "vlsi",
    technologies: ["Digital Communication", "MATLAB (Basic)"],
  },
  {
    id: 6,
    title: "Half Adder & Full Adder on FPGA",
    description:
      "Implemented half adder and full adder circuits on FPGA using basic VHDL concepts.",
    category: "vlsi",
    technologies: ["VHDL", "FPGA"],
  },
  {
    id: 7,
    title: "Parity Bit Adder on FPGA",
    description:
      "Designed and implemented a parity bit adder on FPGA to understand error detection concepts.",
    category: "vlsi",
    technologies: ["VHDL", "FPGA"],
  },
  {
    id: 8,
    title: "E-Commerce Website",
    description:
      "A simple e-commerce website developed using HTML, CSS, and JavaScript with product listing and basic UI.",
    category: "software",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Academic & <span className="gradient-text">Personal Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of academic and personal projects completed during my studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass overflow-hidden hover:bg-primary/5 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="aspect-video bg-secondary relative flex items-center justify-center">
                {project.category === "vlsi" ? (
                  <Cpu className="w-14 h-14 text-primary/50" />
                ) : (
                  <Code className="w-14 h-14 text-primary/50" />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
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
