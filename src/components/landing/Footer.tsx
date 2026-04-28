import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const links = {
  Services: [
    { label: "Internet Guidance", to: "/services" },
    { label: "Cable TV Assistance", to: "/services" },
    { label: "Streaming Support", to: "/services" },
    { label: "How It Works", to: "/how-it-works" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "FAQ", to: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Refund Policy", to: "/refund" },
    { label: "Disclaimer", to: "/disclaimer" },
  ],
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-16 pb-8">
    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
      {/* Newsletter */}
      <div className="mb-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 lg:p-12 text-center">
        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Stay Updated on <span className="text-gradient">Our Services</span>
        </h3>
        <p className="mt-2 text-gray-300">Receive informational updates and independent guidance tips.</p>
        <div className="mx-auto mt-6 flex max-w-md gap-3">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full bg-white/10 border border-white/20 py-3 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Logo showText={false} width={32} height={32} />
            <span className="font-display text-lg font-bold text-white">
              Casti<span className="text-primary">nity</span>
            </span>
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Castinity is a third-party service assistance startup. All trademarks belong to their respective owners.
          </p>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <a href="tel:+18886815944" className="hover:text-primary transition-colors">(888) 681-5944</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-primary" />
              <span>support@castinity.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <div>6229 Lakewood DR W</div>
                <div>University Place, WA 98457</div>
              </div>
            </div>
          </div>
        </div>

        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="mb-4 font-display font-bold text-white">{title}</h4>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-gray-300 transition-colors hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <p className="text-xs text-gray-400 text-center">
          © 2026 Castinity. All rights reserved. Castinity is a third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
