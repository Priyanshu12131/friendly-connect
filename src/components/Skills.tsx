import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "vlsi", label: "VLSI/Hardware" },
  { id: "tools", label: "Tools & Others" },
];

const skills = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "HTML/CSS", level: 98, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 82, category: "backend" },
  // { name: "REST APIs", level: 90, category: "backend" },
  // { name: "GraphQL", level: 75, category: "backend" },
  
  // VLSI
  { name: "Verilog", level: 90, category: "vlsi" },
  { name: "SystemVerilog", level: 85, category: "vlsi" },
  { name: "VHDL", level: 75, category: "vlsi" },
  // { name: "Cadence Tools", level: 80, category: "vlsi" },
  { name: "FPGA Design", level: 85, category: "vlsi" },
  { name: "RTL Design", level: 88, category: "vlsi" },
  
  // Tools
  { name: "Git/GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 78, category: "tools" },
  { name: "Linux", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  // { name: "AWS", level: 72, category: "tools" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">My Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development and hardware design, 
            enabling me to tackle challenges from silicon to software.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "gradient-bg text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
