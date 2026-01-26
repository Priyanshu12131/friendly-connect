import { Music, Camera, Gamepad2, BookOpen, Plane, Dumbbell } from "lucide-react";

const hobbies = [
  {
    icon: Music,
    title: "Music",
    description: "Playing guitar and exploring different genres",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and nature landscapes",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Strategy games and competitive esports",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Tech blogs, sci-fi novels, and self-improvement",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Plane,
    title: "Traveling",
    description: "Exploring new places and cultures",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Gym workouts and outdoor running",
    color: "from-red-500 to-pink-500",
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Beyond Code</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Hobbies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            When I'm not coding or designing circuits, here's what keeps me inspired and energized.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${hobby.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <hobby.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {hobby.title}
              </h3>
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
