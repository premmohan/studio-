export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 bg-background mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 Prem Mohan Studio | Crafting Intelligent Applications
        </p>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground font-mono">
            MSME Registered · GeM Registered
          </span>
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
