import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string | null;
    icon: string;
    comingSoon?: boolean;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-[0_0_30px_-5px_rgba(0,212,255,0.3)] hover:-translate-y-1"
    >
      <div className="absolute top-4 right-4 text-5xl opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-500">
        {project.icon}
      </div>
      
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-4xl">{project.icon}</span>
          <span className="text-xs font-mono text-muted-foreground">
            0{project.id}
          </span>
        </div>
        
        <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-6 text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
          {project.description}
        </p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-muted text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-border/50">
        {project.comingSoon || !project.link ? (
          <Button disabled variant="outline" className="w-full bg-background/50 cursor-not-allowed">
            Demo Coming Soon
          </Button>
        ) : (
          <Button asChild className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all group-hover:shadow-[0_0_15px_-3px_rgba(0,212,255,0.4)]">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View Demo <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
