import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import TypingRole from "./TypingRole";


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0f1a]">
      {/* Animated Gradient & Particle Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
        {/* Animated grid/blur blob for premium touch */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-primary/5 to-transparent opacity-60 pointer-events-none" />
        <ParticleBackground />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
        >
          {/* Greeting Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 shadow-lg backdrop-blur-md border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 tracking-tight gradient-text drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Priyanshu Kumar</span>
          </motion.h1>

          {/* Typing Role Animation */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold flex justify-center items-center gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <TypingRole />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Building innovative digital solutions and designing cutting-edge hardware. <br />
            Passionate about bridging the gap between software and silicon.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="gradient-bg shadow-xl text-lg px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 focus-visible:ring-4 focus-visible:ring-primary/60"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/60 bg-card/60 backdrop-blur-md text-lg px-8 py-4 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary hover:bg-primary/10 focus-visible:ring-4 focus-visible:ring-primary/60"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/Priyanshu12131"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass shadow-md hover:bg-primary/20 transition-all group relative"
              whileHover={{ scale: 1.18, boxShadow: "0 0 24px 4px #7dd3fc55" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/priyanshu-kumar-b652992b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass shadow-md hover:bg-primary/20 transition-all group relative"
              whileHover={{ scale: 1.18, boxShadow: "0 0 24px 4px #818cf855" }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:priyanshuk7839@gmail.com"
              className="p-3 rounded-full glass shadow-md hover:bg-primary/20 transition-all group relative"
              whileHover={{ scale: 1.18, boxShadow: "0 0 24px 4px #f472b655" }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-card/60 shadow-lg ring-2 ring-primary/30 mb-2 animate-glow">
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
          <span className="text-xs text-muted-foreground">Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
