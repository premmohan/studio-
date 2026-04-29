import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, Mail, Send, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:contact@premmohan.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">contact@premmohan.com</span>
                </a>
                
                <a href="https://premmohan.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">premmohan.com</span>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Officially Registered</div>
                    <div className="text-sm">MSME Registered · GeM Registered</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border/50 rounded-2xl p-8 relative overflow-hidden">
              {/* Subtle form glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

              <form 
                action="https://formsubmit.co/contact@premmohan.com" 
                method="POST"
                className="space-y-6 relative z-10"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50 focus-visible:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    name="message" 
                    id="message" 
                    required 
                    placeholder="How can I help you?"
                    className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-primary resize-y"
                  />
                </div>

                <input type="hidden" name="_subject" value="New submission from Prem Mohan Portfolio!" />
                <input type="hidden" name="_template" value="table" />
                
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-[0_0_15px_-3px_rgba(0,212,255,0.4)]">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
