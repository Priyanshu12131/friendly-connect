import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "VHDL Intern",
    company: "IIEST Shibpur, Kolkata",
    period: "Internship",
    description:
      "Worked on VHDL-based digital design concepts. Learned basics of RTL design, simulation, and digital electronics. Improved technical understanding and communication through regular discussions with mentors.",
    skills: ["VHDL", "Digital Electronics", "RTL Basics"],
  },
];

const education = [
  {
    title: "B.Tech – 3rd Year Student",
    institution: "JK Lakshmimat University",
    period: "Ongoing",
    description:
      "Currently pursuing Bachelor of Technology with interest in VLSI and digital design.",
  },
  {
    title: "Class 12 (Senior Secondary)",
    institution: "Bihar School Examination Board (BSEB)",
    period: "Completed",
    description: "Secured 72% marks in Class 12 examination.",
  },
  {
    title: "Class 10 (Secondary)",
    institution: "Bihar School Examination Board (BSEB)",
    period: "Completed",
    description: "Secured 74% marks in Class 10 examination.",
  },
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
            Academic background and internship experience as a third-year engineering student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg gradient-bg">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full gradient-bg ring-4 ring-background" />

                    <div className="p-6 rounded-2xl glass hover:bg-primary/5 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.description}
                      </p>
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

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg gradient-bg">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl glass hover:bg-primary/5 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-lg">{edu.title}</h4>
                    <span className="text-sm text-primary font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
