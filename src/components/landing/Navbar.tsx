import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <Logo showText={false} width={36} height={36} className="sm:w-9 sm:h-9" />
          <span className="font-display text-lg sm:text-xl font-bold text-foreground">
            Casti<span className="text-primary">nity</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-hover rounded-full px-5">
            <a href="tel:+18886815944">Call (888) 681-5944</a>
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-card-strong border-t border-border lg:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-sm hover:text-foreground ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary text-primary-foreground rounded-full px-5 mt-2 w-fit">
              <a href="tel:+18886815944">Call (888) 681-5944</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
