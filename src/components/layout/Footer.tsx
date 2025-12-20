import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", path: "/shop" },
    { name: "Pre-Orders", path: "/shop?filter=preorder" },
    { name: "Gift Cards", path: "/shop/gift-cards" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Press Kit", path: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Shipping Policy", path: "/shipping" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/bevvybullet",
  },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/bevvybullet" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/bevvybullet" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/bevvybullet" },
];

export const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-mono text-xl font-bold tracking-tight">
                <span className="text-primary">BEVVY</span>
                <span className="text-white"> BULLET</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              The world's only foam football that delivers drinks across
              tailgates, pools, and parties. THE FETCH IS DEAD.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-muted rounded-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Bevvy Bullet. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-xs">
              Secure Checkout:
            </span>
            <div className="flex gap-2 text-muted-foreground text-xs font-medium">
              <span className="px-2 py-1 bg-muted rounded">VISA</span>
              <span className="px-2 py-1 bg-muted rounded">MC</span>
              <span className="px-2 py-1 bg-muted rounded">AMEX</span>
              <span className="px-2 py-1 bg-muted rounded">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
