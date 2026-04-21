import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Prem Mohan | Built with passion
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/premmohan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/prem-mohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://premmohan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            premmohan.com
          </a>
        </div>
      </div>
    </footer>
  );
}
