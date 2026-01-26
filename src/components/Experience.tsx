import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "VLSI Design Engineer",
    company: "Semiconductor Corp",
    period: "2020 - 2022",
    description: "Designed and verified RTL modules for high-performance processors. Worked on timing optimization and power reduction strategies.",
    skills: ["Verilog", "SystemVerilog", "Cadence", "FPGA"],
  },
  {
    type: "work",
    title: "Software Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description: "Built full-stack web applications from scratch. Implemented RESTful APIs and integrated third-party services.",
    skills: ["JavaScript", "Python", "MongoDB", "Docker"],
  },
];

const education = [
  {
    type: "education",
    title: "Master's in Electronics Engineering",
    institution: "Technical University",
    period: "2016 - 2018",
    description: "Specialized in VLSI Design and Digital Systems. Thesis on low-power circuit design techniques.",
  },
  {
    type: "education",
    title: "Bachelor's in Computer Science",
    institution: "Engineering College",
    period: "2012 - 2016",
    description: "Strong foundation in programming, algorithms, and software engineering principles.",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Cadence Certified Designer",
  "MongoDB Developer Certificate",
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional growth, from academic foundations to industry expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg gradient-bg">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full gradient-bg ring-4 ring-background" />

                    <div className="p-6 rounded-2xl glass hover:bg-primary/5 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg gradient-bg">
                  <GraduationCap className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full gradient-bg ring-4 ring-background" />

                      <div className="p-6 rounded-2xl glass hover:bg-primary/5 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-lg">{edu.title}</h4>
                          <span className="text-sm text-primary font-medium">{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg gradient-bg">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>

              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl glass hover:bg-primary/5 transition-colors flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full gradient-bg" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
