import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Smartphone, Mail, Award } from "lucide-react";

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
          className="max-w-2xl mb-16 text-center mx-auto"
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
            Scan the QR code with any UPI app — PhonePe, Google Pay, Paytm, or
            your bank app.
          </p>
        </motion.div>

        {/* QR Code card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-sm mx-auto mb-10"
        >
          <div className="bg-card border border-primary/30 rounded-3xl p-8 shadow-[0_0_40px_-10px_rgba(0,212,255,0.35)] flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-5">
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="font-semibold text-sm tracking-wide">
                Scan & Pay via UPI
              </span>
            </div>

            {/* QR image — white background so it scans cleanly */}
            <div className="bg-white rounded-2xl p-3 mb-5 shadow-md">
              <img
                src="/payment-qr.png"
                alt="Prem Mohan Studio PhonePe UPI QR Code"
                className="w-56 h-56 object-contain"
                data-testid="img-payment-qr"
              />
            </div>

            <p className="text-muted-foreground text-sm mb-1">
              Open any UPI app and scan to pay
            </p>
            <p className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              PREM MOHAN
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              PhonePe · Google Pay · Paytm · BHIM & all UPI apps
            </p>
          </div>
        </motion.div>

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
            <span className="text-sm font-medium">Secure UPI Transfer</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 rounded-full px-5 py-2.5">
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">All UPI Apps Supported</span>
          </div>
          <div className="flex items-center gap-3 bg-card border border-border/50 rounded-full px-5 py-2.5">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">MSME · GeM Registered</span>
          </div>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <Mail className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-3">
            Need another payment method?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            For bank transfers (NEFT / RTGS / IMPS), international payments, or
            government / PSU procurement (Purchase Order, GeM, invoice-based
            billing) — reach out and we will send you the account details.
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]"
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
