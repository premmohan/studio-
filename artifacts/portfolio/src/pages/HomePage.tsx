import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Bot, Brain, MessageSquare, Globe, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

const homeServices = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Autonomous AI agents that plan, reason, and act across your apps and workflows.",
  },
  {
    icon: Brain,
    title: "AI Solutions & ML",
    description: "Custom machine learning models, predictive analytics, and intelligent automation.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & RAG",
    description: "Conversational assistants and document intelligence powered by LLMs.",
  },
  {
    icon: Globe,
    title: "Web & SaaS",
    description: "Modern websites, SaaS platforms, and full-stack web applications.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Idea to shippable product in weeks. Validate fast, iterate faster.",
  },
  {
    icon: ShieldCheck,
    title: "AI Consultancy",
    description: "AI governance, procurement, strategy, and architecture review.",
  },
];

export default function HomePage() {
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
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Services Section */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                AI agents, ML solutions, web & SaaS development, MVPs, and consultancy — all under one roof.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/services">
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10" data-testid="button-view-all-services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border/50 rounded-2xl p-7 hover:border-primary/40 hover:shadow-[0_0_25px_-8px_rgba(0,212,255,0.4)] transition-all"
                  data-testid={`card-home-service-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
