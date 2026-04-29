import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/payment", label: "Payment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer tracking-wide">
            PREM MOHAN STUDIO
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer relative ${
                  location === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute -bottom-[21px] left-0 w-full h-[2px] bg-primary rounded-t-full" />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background p-4 absolute w-full">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`text-base font-medium p-2 rounded-md transition-colors ${
                    location === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
