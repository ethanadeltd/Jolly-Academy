import { useState, useEffect } from "react";
import { Menu, X, BookOpen, MessageCircle, Info, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Courses", href: "#courses", icon: BookOpen },
  { name: "AI Partner", href: "#ai-partner", icon: Sparkles },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Phone },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled 
        ? "h-20 bg-white/90 backdrop-blur-md border-b shadow-sm" 
        : "h-24 bg-transparent"
    )}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="bg-primary p-2 rounded-xl group-hover:rotate-6 transition-transform">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-headline font-black text-slate-900 tracking-tight">
            Jolly English
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 px-6 rounded-xl shadow-lg">
            <a href="#enroll">Enroll Now</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white border-b shadow-2xl transition-all duration-300 origin-top overflow-hidden",
        isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center p-4 rounded-2xl text-lg font-bold text-slate-700 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="mr-4 h-6 w-6 text-primary" />
              {item.name}
            </a>
          ))}
          <Button className="w-full h-14 bg-primary text-white font-bold text-lg rounded-2xl">
            <a href="#enroll" onClick={() => setIsOpen(false)}>
              Enroll Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
