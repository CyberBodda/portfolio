import { ArrowUp, CopyrightIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="container mx-auto relative flex items-center justify-between gap-4 py-5 px-4 mt-6 border-t border-border">
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <CopyrightIcon className="h-4 w-4" />
        {new Date().getFullYear()} Abdelrahman Elmasry. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="shrink-0 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
