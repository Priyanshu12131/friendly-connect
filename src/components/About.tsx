import { Code, Cpu, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building scalable web applications with modern technologies",
  },
  {
    icon: Cpu,
    title: "VLSI Engineering",
    description: "Designing and verifying complex integrated circuits",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering high-quality results on time",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl gradient-bg opacity-20 blur-2xl" />
              <div className="absolute inset-4 rounded-3xl glass gradient-border" />
              
              {/* Profile placeholder with gradient */}
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-bg mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground">P</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Your Photo Here</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float">
                <span className="gradient-text">5+ Years Experience</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float" style={{ animationDelay: "2s" }}>
                <span className="gradient-text">50+ Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital Experiences & 
              <span className="gradient-text"> Silicon Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate engineer with a unique blend of expertise in both software development 
              and VLSI design. With a strong foundation in computer science and electronics, I bridge 
              the gap between high-level applications and low-level hardware.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My journey has taken me through building full-stack web applications, designing efficient 
              algorithms, and working on cutting-edge chip designs. I believe in creating solutions that 
              are not just functional, but elegant and efficient at every level of the technology stack.
            </p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl glass hover:bg-primary/5 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
