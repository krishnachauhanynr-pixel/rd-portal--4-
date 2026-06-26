import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSEO } from '../lib/useSEO';

export function Sitemap() {
  useSEO({
    title: 'Sitemap - RD Portal',
    description: 'Navigate through the RD Portal website with our HTML sitemap. Find all our digital services and pages easily.',
    path: '/sitemap',
  });

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="bg-brand-950 py-16 md:py-24 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            <span className="text-brand-300">HTML Sitemap</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            Quickly navigate and find everything you need on RD Portal.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full min-h-[50vh]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-display font-bold text-brand-950 mb-8 pb-4 border-b border-slate-100">
              Pages Directory
            </h2>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-lg text-slate-700 hover:text-brand-600 transition-colors font-medium group"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-300 mr-4 group-hover:bg-brand-600 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/sitemap" 
                  className="flex items-center text-lg text-slate-700 hover:text-brand-600 transition-colors font-medium group"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-300 mr-4 group-hover:bg-brand-600 transition-colors"></span>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
