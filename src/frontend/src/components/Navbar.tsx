import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-800/95 backdrop-blur-md shadow-navy"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/hayat-logo-transparent.dim_200x200.png"
            alt="Hayat Visa Consultancy Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="font-display font-bold text-gold-400 text-lg leading-tight">
              Hayat Visa
            </p>
            <p className="text-xs text-navy-200 tracking-widest uppercase leading-tight">
              Consultancy
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-navy-200 hover:text-gold-400 transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:9718048734" data-ocid="nav.primary_button">
            <Button
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold gap-2 shadow-gold transition-all duration-200"
              size="sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-gold-400 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-800 border-t border-navy-600 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMobileOpen(false)}
                  className="text-navy-200 hover:text-gold-400 transition-colors py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:9718048734" data-ocid="nav.primary_button">
                <Button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now: 9718048734
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
