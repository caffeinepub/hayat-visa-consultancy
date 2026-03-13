import { Heart, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="navy-gradient border-t border-navy-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/hayat-logo-transparent.dim_200x200.png"
                alt="Hayat Visa Consultancy"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-display font-bold text-gold-400 text-lg leading-tight">
                  Hayat Visa
                </p>
                <p className="text-xs text-navy-300 tracking-widest uppercase">
                  Consultancy
                </p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed max-w-xs">
              New Delhi's trusted visa consultancy specializing in early US
              Embassy appointment slots and end-to-end visa assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-navy-300 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9718048734"
                data-ocid="footer.link"
                className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                9718048734
              </a>
              <div className="flex items-start gap-3 text-navy-300 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  148-A R-Extn, Mohan Garden,
                  <br />
                  Uttam Nagar, New Delhi 110059
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-navy-400 text-xs">
          <p>© {year} Hayat Visa Consultancy. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-gold-400 inline" /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
