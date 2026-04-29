import { Button } from "@/components/ui/button";
import { Printer, ArrowLeft, Mail, Globe, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import {
  companyInfo,
  companyServices,
  companyCredentials,
  companyTech,
} from "@/lib/companyInfo";

export default function CompanyProfilePage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen py-12 bg-background">
      {/* Action bar (hidden when printing) */}
      <div className="no-print container mx-auto px-4 mb-8 flex items-center justify-between">
        <Link href="/about">
          <Button variant="ghost" data-testid="button-back-to-about">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
          </Button>
        </Link>
        <Button
          onClick={handlePrint}
          className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(0,212,255,0.5)]"
          data-testid="button-download-profile"
        >
          <Printer className="mr-2 h-4 w-4" /> Download as PDF
        </Button>
      </div>

      {/* Printable area */}
      <div className="print-area container mx-auto px-4 max-w-4xl bg-card border border-border/50 rounded-2xl p-10 md:p-14 shadow-lg">
        {/* Header */}
        <header className="border-b border-border/50 pb-8 mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="print-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {companyInfo.name}
                </span>
              </h1>
              <p className="text-muted-foreground font-mono text-sm">
                {companyInfo.tagline}
              </p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-1">
                Company Profile
              </div>
              <div>2025 · Capability Statement</div>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            About Us
          </h2>
          <p className="text-foreground leading-relaxed mb-3">
            {companyInfo.name} is an AI-first development studio building
            intelligent products, agents, and platforms for startups, enterprises,
            and government clients. We turn complex AI capabilities into
            practical, real-world solutions — from custom ML models and
            autonomous agents to full SaaS platforms and consultancy.
          </p>
          <p className="text-foreground leading-relaxed">
            Officially recognized under the Government of India's MSME framework
            and registered on the Government e-Marketplace (GeM), we serve
            clients across private and public sectors with end-to-end design,
            development, and deployment services.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border/50 rounded-xl p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Our Mission
            </h3>
            <p className="text-sm leading-relaxed">
              To make AI practical, accessible, and impactful — helping
              organizations of every size adopt intelligent technology with
              confidence.
            </p>
          </div>
          <div className="border border-border/50 rounded-xl p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Our Vision
            </h3>
            <p className="text-sm leading-relaxed">
              A future where AI augments human creativity and productivity across
              every industry — built responsibly, ethically, and at scale.
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            Government Credentials
          </h2>
          <div className="space-y-3">
            {companyCredentials.map((cred) => (
              <div
                key={cred.label}
                className="border border-border/50 rounded-lg p-4"
              >
                <div className="font-bold mb-1">{cred.label}</div>
                <div className="text-sm text-muted-foreground">
                  {cred.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-10 print-page-break">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            Services & Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {companyServices.map((service) => (
              <div key={service} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">▸</span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {companyTech.map((tech) => (
              <span
                key={tech}
                className="border border-border/50 rounded-full px-4 py-1.5 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Statutory details */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            Statutory Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground text-xs">GSTIN</div>
              <div className="font-mono font-semibold">{companyInfo.gstin}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">MSME / Udyam</div>
              <div className="font-mono font-semibold">{companyInfo.msmeUAM}</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">GeM Seller ID</div>
              <div className="font-mono font-semibold">
                {companyInfo.gemSellerId}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">PAN</div>
              <div className="font-mono font-semibold">{companyInfo.pan}</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-border/50 pt-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-muted-foreground text-xs">Email</div>
                <div className="font-medium">{companyInfo.email}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-muted-foreground text-xs">Website</div>
                <div className="font-medium">{companyInfo.website}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-muted-foreground text-xs">Phone</div>
                <div className="font-medium">{companyInfo.phone}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-muted-foreground text-xs">Address</div>
                <div className="font-medium">
                  {companyInfo.address.line1}, {companyInfo.address.city},{" "}
                  {companyInfo.address.state} {companyInfo.address.pincode}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
