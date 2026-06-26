import { ReactNode, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg text-white">
                <Rocket className="h-5 w-5" />
              </div>
              <Link to="/" className="text-xl font-display font-bold text-brand-950">
                RD Portal
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-brand-600 ${
                      isActive ? 'text-brand-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Link 
                to="/contact" 
                className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm shadow-brand-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-3 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-slate-200"
            >
              <div className="space-y-1 pb-4 pt-2 px-4 shadow-inner">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-3 text-base font-medium ${
                        isActive
                          ? 'bg-brand-50 text-brand-600'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-950 text-slate-300 py-12 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Rocket className="h-6 w-6" />
                <span className="text-xl font-display font-bold">RD Portal</span>
              </div>
              <p className="text-sm text-brand-100 max-w-xs leading-relaxed">
                Empowering Digital Success Through Innovation. Your trusted partner for modern digital solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-4 md:space-y-2 text-base md:text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-white transition-colors block md:inline-block py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-4 md:space-y-2 text-base md:text-sm">
                <li><Link to="/services" className="hover:text-white transition-colors block md:inline-block py-1">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors block md:inline-block py-1">Cybersecurity</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors block md:inline-block py-1">Cloud Solutions</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors block md:inline-block py-1">IT Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="Instagram" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a href="#" aria-label="Twitter" className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all">
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-brand-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-200">
            <p>Copyright &copy; 2026 RD Portal. All Rights Reserved.</p>
            <div className="flex gap-4">
              <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
