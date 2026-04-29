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
  Bot,
  Eye,
  Sparkles,
  Palette,
  LayoutDashboard,
  Rocket,
  Smartphone,
  Network,
  Database,
  ShieldCheck,
  ClipboardCheck,
  Compass,
  Building2,
} from "lucide-react";

type Service = {
  icon: typeof Brain;
  title: string;
  description: string;
  features: string[];
};

type ServiceGroup = {
  title: string;
  subtitle: string;
  services: Service[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent systems built end-to-end.",
    services: [
      {
        icon: Bot,
        title: "AI Agents Development",
        description:
          "Autonomous, tool-using AI agents that plan, reason, and act across your apps and workflows.",
        features: [
          "Multi-agent orchestration",
          "Tool & API calling",
          "Memory & state management",
          "Agent monitoring",
        ],
      },
      {
        icon: Brain,
        title: "AI Solutions & ML Models",
        description:
          "Custom machine learning models, predictive analytics, and intelligent automation tailored to your problem.",
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
          "High-speed conversational agents powered by Groq, OpenAI, and LangChain — built for real users.",
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
          "Retrieval-Augmented Generation systems that turn your documents into smart, queryable assistants.",
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
          "Natural Language Processing pipelines for sentiment, classification, summarization, and entity extraction.",
        features: [
          "Sentiment & emotion analysis",
          "Text classification",
          "Summarization",
          "Named entity recognition",
        ],
      },
      {
        icon: Eye,
        title: "Computer Vision",
        description:
          "Image and video AI for detection, recognition, OCR, and visual quality control.",
        features: [
          "Object detection",
          "Image classification",
          "OCR & document parsing",
          "Real-time inference",
        ],
      },
      {
        icon: Sparkles,
        title: "LLM Integration & Fine-tuning",
        description:
          "Bring large language models into your stack — fine-tuned, evaluated, and production-ready.",
        features: [
          "OpenAI / Groq / Anthropic",
          "Fine-tuning & RLHF",
          "Prompt engineering",
          "Evaluation pipelines",
        ],
      },
    ],
  },
  {
    title: "Web, Product & Design",
    subtitle: "Beautiful, fast products people love to use.",
    services: [
      {
        icon: Globe,
        title: "Website Development",
        description:
          "Modern, responsive marketing sites and web apps built with React, Vite, and TypeScript.",
        features: [
          "React + Vite frontends",
          "Responsive design",
          "SEO optimization",
          "Production deployment",
        ],
      },
      {
        icon: Palette,
        title: "UI / UX Design",
        description:
          "Clean, conversion-focused product design — from wireframes to polished, accessible interfaces.",
        features: [
          "Wireframes & prototypes",
          "Design systems",
          "Accessibility (WCAG)",
          "User research",
        ],
      },
      {
        icon: LayoutDashboard,
        title: "SaaS Development",
        description:
          "Full-stack SaaS platforms with auth, billing, dashboards, and scalable backends.",
        features: [
          "Multi-tenant architecture",
          "Auth & subscriptions",
          "Admin dashboards",
          "Stripe integration",
        ],
      },
      {
        icon: Rocket,
        title: "MVP Development",
        description:
          "Get from idea to shippable product in weeks. Validate fast, iterate faster.",
        features: [
          "Rapid prototyping",
          "Lean feature scoping",
          "User testing",
          "Launch-ready in 4-8 weeks",
        ],
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Cross-platform mobile apps built with React Native and Expo for iOS and Android.",
        features: [
          "React Native / Expo",
          "Native device features",
          "Push notifications",
          "App Store deployment",
        ],
      },
    ],
  },
  {
    title: "Architecture, Data & Automation",
    subtitle: "Solid foundations for products that scale.",
    services: [
      {
        icon: Network,
        title: "Solution Architecture",
        description:
          "Architecture design and reviews for AI, web, and data systems — built to scale and stay maintainable.",
        features: [
          "System design",
          "Cloud architecture",
          "Security review",
          "Architecture audits",
        ],
      },
      {
        icon: Database,
        title: "Data Engineering & Pipelines",
        description:
          "Reliable data pipelines, warehouses, and ETL workflows that power AI and analytics.",
        features: [
          "ETL / ELT pipelines",
          "Data warehouses",
          "Vector databases",
          "Data quality monitoring",
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
    ],
  },
  {
    title: "Consultancy",
    subtitle: "Strategic advice from people who build.",
    services: [
      {
        icon: ShieldCheck,
        title: "AI Governance Consultancy",
        description:
          "Frameworks, policies, and audits to deploy AI responsibly, ethically, and in compliance with regulations.",
        features: [
          "AI policy & guidelines",
          "Risk assessments",
          "Bias & fairness audits",
          "Regulatory compliance",
        ],
      },
      {
        icon: ClipboardCheck,
        title: "AI Procurement Consultancy",
        description:
          "Independent guidance for evaluating, selecting, and procuring AI tools, vendors, and platforms.",
        features: [
          "Vendor evaluation",
          "RFP support",
          "Cost-benefit analysis",
          "Contract review",
        ],
      },
      {
        icon: Compass,
        title: "AI Strategy Consulting",
        description:
          "Roadmaps for adopting AI in your organization — use cases, ROI, prioritization, and execution plans.",
        features: [
          "AI readiness assessment",
          "Use-case discovery",
          "ROI modeling",
          "Adoption roadmaps",
        ],
      },
      {
        icon: Building2,
        title: "Architecture Review & Audits",
        description:
          "Independent reviews of your existing AI, data, or web architecture with actionable recommendations.",
        features: [
          "Code & architecture audits",
          "Performance reviews",
          "Security assessment",
          "Modernization plans",
        ],
      },
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
          className="max-w-3xl mb-20 text-center mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            From AI agents and ML models to SaaS platforms, MVPs, and consultancy —
            we design, build, and deploy intelligent solutions end-to-end for
            startups, enterprises, and government clients.
          </p>
        </motion.div>

        {serviceGroups.map((group, gIndex) => (
          <div key={group.title} className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-10 flex items-end justify-between flex-wrap gap-4"
            >
              <div>
                <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                  0{gIndex + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{group.title}</h2>
                <p className="text-muted-foreground mt-2">{group.subtitle}</p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent ml-6 hidden md:block" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="bg-card border border-border/50 rounded-2xl p-7 hover:border-primary/40 hover:shadow-[0_0_25px_-8px_rgba(0,212,255,0.4)] transition-all flex flex-col"
                    data-testid={`card-service-${gIndex}-${index}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
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
          </div>
        ))}

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
