import { motion } from "framer-motion";
import { journeyTimeline } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Me</span>
            </h1>
            
            <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-8">
              <p className="mb-6">
                I'm Prem Mohan — an AI/ML enthusiast and developer passionate about building intelligent, real-world applications.
              </p>
              <p className="mb-6">
                From NLP-powered sentiment analyzers to RAG-based document chatbots, I love turning complex AI concepts into practical, user-friendly tools. I believe in learning by building, and every project in my portfolio represents a real problem I wanted to solve.
              </p>
            </div>

            <Button asChild className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="https://premmohan.com" target="_blank" rel="noopener noreferrer">
                Visit premmohan.com <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">⚡</span> My Journey
            </h2>
            
            <div className="space-y-8">
              {journeyTimeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline line */}
                  {index !== journeyTimeline.length - 1 && (
                    <div className="absolute left-[11px] top-8 bottom-[-32px] w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <h3 className={`text-lg font-medium ${index === journeyTimeline.length - 1 ? 'text-primary' : 'text-foreground'}`}>
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
