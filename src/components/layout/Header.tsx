import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface NavLink {
  name: string;
  href?: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
}

const navLinks: NavLink[] = [
  { name: "THE STUDY", href: "#study" },
  {
    name: "SHOP",
    dropdown: [
      { name: "All Products", path: "/shop" },
      { name: "Pre-Orders", path: "/shop" },
      { name: "Gift Cards", path: "/shop" },
    ],
  },
  {
    name: "COMPANY",
    dropdown: [
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "Press Kit", path: "/press-kit" },
    ],
  },
  { name: "THE FETCH", href: "#fetch" },
  { name: "THE THROW", href: "#throw" },
  { name: "THE REVOLUTION", href: "#revolution" },
  { name: "JOIN", href: "#join" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      if (link.href) {
        const element = document.querySelector(link.href);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Handle scroll after navigation to homepage
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      navigate(`/${href}`);
      setIsMobileMenuOpen(false);
    } else if (element) {
      // If on homepage, just scroll
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="font-mono text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-primary">BEVVY</span>
              <span className="text-white"> BULLET</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={link.name || index} className="relative group">
                {link.dropdown ? (
                  // Dropdown menu
                  <div
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="font-medium text-sm uppercase tracking-wider transition-colors text-muted-foreground hover:text-primary flex items-center gap-1">
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular anchor link
                  <button
                    onClick={() => link.href && scrollToSection(link.href)}
                    className={`font-medium text-sm uppercase tracking-wider transition-colors relative group ${
                      activeSection === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                        activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {useCartStore((state) => state.getTotalItems()) > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {useCartStore((state) => state.getTotalItems())}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {useCartStore((state) => state.getTotalItems()) > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {useCartStore((state) => state.getTotalItems())}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-secondary border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <div key={link.name || index}>
                  {link.dropdown ? (
                    // Dropdown in mobile
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className="font-medium text-lg uppercase tracking-wider transition-colors text-muted-foreground hover:text-primary text-left w-full flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 ml-4 space-y-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular anchor link in mobile
                    <button
                      onClick={() => link.href && scrollToSection(link.href)}
                      className={`font-medium text-lg uppercase tracking-wider transition-colors text-left ${
                        activeSection === link.href
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
