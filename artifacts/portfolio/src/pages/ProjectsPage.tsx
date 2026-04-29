import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of intelligent applications we've built to solve real-world problems.
            From natural language processing to recommendation engines and computer vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
