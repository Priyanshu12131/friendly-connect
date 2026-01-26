import { Code, Cpu, Zap, Target } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building responsive and user-focused web applications",
  },
  {
    icon: Cpu,
    title: "VLSI & FPGA Basics",
    description: "Hands-on experience with VHDL, RTL concepts, and FPGA tools",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Breaking down problems and writing clean, logical solutions",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on learning, consistency, and steady improvement",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-3xl gradient-bg opacity-20 blur-2xl" />
              <div className="absolute inset-4 rounded-3xl glass gradient-border" />

              {/* Profile Image */}
              <div className="absolute inset-8 rounded-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm font-medium animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="gradient-text">Full Stack & VLSI</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">About Me</span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Full Stack Development &{" "}
              <span className="gradient-text">VLSI Engineering</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a full stack developer and third-year VLSI engineering student
              with a strong interest in building practical software solutions and
              understanding how digital hardware works at a low level.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My experience includes web development and hands-on exposure to
              VHDL and FPGA-related tools during my internship. I am familiar
              with RTL concepts, basic simulation, and FPGA workflows, and I
              continuously work on improving my coding and communication skills.
            </p>

            {/* Highlights */}
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
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
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
