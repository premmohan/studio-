import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const credentials = [
  {
    icon: ShieldCheck,
    title: "MSME Registered",
    description:
      "Officially recognized under the Government of India's Micro, Small & Medium Enterprises framework.",
  },
  {
    icon: Award,
    title: "GeM Registered",
    description:
      "Registered seller on the Government e-Marketplace (GeM), eligible for procurement by government departments and PSUs.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make AI practical, accessible, and impactful — helping organizations of every size adopt intelligent technology with confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where AI augments human creativity and productivity across every industry — built responsibly, ethically, and at scale.",
  },
  {
    icon: Sparkles,
    title: "What We Do",
    description:
      "We design, build, and deploy AI agents, ML models, SaaS platforms, MVPs, and intelligent web applications — end-to-end.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description:
      "Startups, enterprises, government departments, and PSUs looking to integrate AI into their products, operations, and decision-making.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Prem Mohan Studio
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Prem Mohan Studio is an AI-first development studio building
            intelligent products, agents, and platforms for startups,
            enterprises, and government clients. We turn complex AI capabilities
            into practical, real-world solutions — from custom ML models and
            autonomous agents to full SaaS platforms and consultancy.
          </p>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Government Credentials
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Officially Registered & Recognized
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-colors"
                  data-testid={`card-credential-${index}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{cred.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values / What we do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Who We Are
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Built on purpose, vision, and people
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/40 transition-colors"
                  data-testid={`card-value-${index}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border/50 rounded-2xl p-10 md:p-14 text-center overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let's build something intelligent together
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're a startup, enterprise, or government department —
              we'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 border-primary/30 hover:bg-primary/10"
                  data-testid="button-explore-services"
                >
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_-5px_rgba(0,212,255,0.6)]"
                  data-testid="button-contact-us"
                >
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
