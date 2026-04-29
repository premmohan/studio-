import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Phone,
  Briefcase,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Mail,
  Award,
} from "lucide-react";

type Tier = {
  icon: typeof Phone;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  paymentLink: string;
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    icon: Phone,
    name: "Consultation Call",
    price: "₹999",
    priceNote: "30-minute discovery call",
    description:
      "A focused 30-minute call to understand your idea, problem, or AI use-case and outline a clear path forward.",
    features: [
      "30-minute video call",
      "Idea & feasibility review",
      "High-level architecture advice",
      "Written follow-up summary",
    ],
    paymentLink: "https://rzp.io/l/REPLACE_WITH_YOUR_LINK",
  },
  {
    icon: Briefcase,
    name: "Project Deposit",
    price: "₹9,999",
    priceNote: "Booking deposit · adjusted in final invoice",
    description:
      "Reserve a development slot for your MVP, web app, or AI project. Fully adjusted against your final project invoice.",
    features: [
      "Locks in your project slot",
      "Detailed scope & timeline doc",
      "Dedicated project kickoff",
      "100% adjusted in final bill",
    ],
    paymentLink: "https://rzp.io/l/REPLACE_WITH_YOUR_LINK",
    highlighted: true,
  },
  {
    icon: Sparkles,
    name: "Custom Engagement",
    price: "Custom",
    priceNote: "Quoted per project",
    description:
      "Have a larger build in mind? Get a tailored quote for full SaaS platforms, AI agents, or enterprise engagements.",
    features: [
      "End-to-end delivery",
      "Custom scope & pricing",
      "Milestone-based billing",
      "Dedicated team & support",
    ],
    paymentLink: "https://rzp.io/l/REPLACE_WITH_YOUR_LINK",
  },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container px-4 mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Secure Payments
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Make a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Payment
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Pay securely via Razorpay — supports UPI, cards, net banking, and
            wallets. All transactions are encrypted and PCI-DSS compliant.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative bg-card border rounded-2xl p-8 transition-all flex flex-col ${
                  tier.highlighted
                    ? "border-primary/60 shadow-[0_0_30px_-8px_rgba(0,212,255,0.5)]"
                    : "border-border/50 hover:border-primary/40 hover:shadow-[0_0_25px_-8px_rgba(0,212,255,0.4)]"
                }`}
                data-testid={`card-tier-${index}`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>

                <div className="mb-4">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {tier.price}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tier.priceNote}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {tier.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className={
                    tier.highlighted
                      ? "w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]"
                      : "w-full h-12 bg-card border border-primary/30 text-primary hover:bg-primary/10"
                  }
                  data-testid={`button-pay-${index}`}
                >
                  <a
                    href={tier.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.price === "Custom" ? "Get a Quote" : "Pay Now"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <div className="flex items-center gap-3 bg-card border border-border/50 rounded-full px-5 py-2.5">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">256-bit SSL Encryption</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 rounded-full px-5 py-2.5">
            <CreditCard className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">UPI · Cards · Net Banking</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 rounded-full px-5 py-2.5">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Powered by Razorpay</span>
          </div>
        </motion.div>

        {/* Other payment options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-3">Need another payment method?</h2>
          <p className="text-muted-foreground mb-6">
            For bank transfers (NEFT/RTGS), international payments, or
            government/PSU procurement (PO, GeM, invoice-based billing), reach
            out and we'll send you the appropriate details.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-contact-billing"
          >
            <a href="mailto:contact@premmohan.com?subject=Billing%20Inquiry">
              <Mail className="mr-2 h-4 w-4" /> Contact for Billing
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

