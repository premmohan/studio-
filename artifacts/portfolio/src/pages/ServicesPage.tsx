import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Brain,
  MessageSquare,
  FileSearch,
  BarChart3,
  Globe,
  Cog,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI / ML Development",
    description:
      "Custom machine learning models, predictive analytics, and intelligent automation tailored to your business problem.",
    features: [
      "Model design & training",
      "Predictive analytics",
      "Classification & regression",
      "MLOps & deployment",
    ],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description:
      "High-speed conversational agents powered by Groq, OpenAI, and LangChain — built for real users and real conversations.",
    features: [
      "LangChain pipelines",
      "Multi-turn memory",
      "Tool & function calling",
      "Streaming responses",
    ],
  },
  {
    icon: FileSearch,
    title: "RAG & Document Intelligence",
    description:
      "Retrieval-Augmented Generation systems that turn your documents, PDFs, and knowledge bases into smart, queryable assistants.",
    features: [
      "Vector database setup",
      "Smart chunking & embeddings",
      "Hybrid search",
      "Source citations",
    ],
  },
  {
    icon: BarChart3,
    title: "NLP & Sentiment Analysis",
    description:
      "Natural Language Processing pipelines for sentiment scoring, classification, summarization, and entity extraction.",
    features: [
      "Sentiment & emotion analysis",
      "Text classification",
      "Summarization",
      "Named entity recognition",
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, responsive web apps built with React, Vite, and TypeScript — designed to look beautiful and ship fast.",
    features: [
      "React + Vite frontends",
      "Responsive design",
      "API integration",
      "Production deployment",
    ],
  },
  {
    icon: Cog,
    title: "Automation & Integrations",
    description:
      "Streamlit dashboards, REST APIs, and custom automations that connect your data, tools, and AI workflows.",
    features: [
      "Streamlit dashboards",
      "REST API design",
      "Workflow automation",
      "Third-party integrations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We design, build, and deploy AI-powered solutions end-to-end. Whether
            you need a smart chatbot, a custom ML model, or a polished web app —
            we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/40 hover:shadow-[0_0_25px_-8px_rgba(0,212,255,0.4)] transition-all"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border/50 rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a project in mind?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's talk about what you're building. We respond to every inquiry
              within 24 hours.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_-5px_rgba(0,212,255,0.6)]"
                data-testid="button-get-quote"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
