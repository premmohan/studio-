import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { Progress } from "@/components/ui/progress";

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Tech Stack</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            The tools, languages, and frameworks we use to build intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card border border-border/50 rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border/50 text-primary">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.value}%</span>
                    </div>
                    {/* Wrap progress in motion.div to animate width via keyframes or just let the progress bar handle it, but we can do a trick with value */}
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
