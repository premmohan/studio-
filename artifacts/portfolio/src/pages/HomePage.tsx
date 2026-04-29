import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredTitles = ["Algebro", "Alerto", "Oocul AI"];
  const featuredProjects = featuredTitles
    .map((title) => projects.find((p) => p.title === title))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] -z-10 opacity-20" />

        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                PREM MOHAN STUDIO
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 font-mono">
              AI-Powered Solutions <span className="text-primary mx-2">|</span> Intelligent Web Applications
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed">
              We are providing AI-powered tools, intelligent web applications, and ML-driven solutions — from NLP sentiment analyzers to RAG chatbots and recommendation systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto h-12 px-8 border-primary/30 hover:bg-primary/10">
                <a href="https://premmohan.com" target="_blank" rel="noopener noreferrer">
                  Visit premmohan.com <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">A glimpse of my recent AI/ML work.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-4 md:mt-0"
            >
              <Link href="/projects">
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
