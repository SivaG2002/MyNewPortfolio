
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Code2 } from "lucide-react"; // Using Code2 for logo

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
 { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering mismatch during hydration
  }
  
  const closeSheet = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-card/95 backdrop-blur-md border-b-2 border-primary shadow-xl navbar-ripple ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-24 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-3xl font-bold text-primary hover:text-primary/80 transition-colors" aria-label="Monochrome Folio Home">
          <Code2 className="h-10 w-10" />
          <span>Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground transition-colors font-semibold text-lg pb-2 border-b-2 border-transparent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-8 w-8 text-primary font-bold" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-card p-6 border-l-2 border-primary">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground transition-colors font-semibold"
                    onClick={closeSheet}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

