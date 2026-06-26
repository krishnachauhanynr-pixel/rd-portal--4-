import { motion } from 'motion/react';
import { Monitor, Smartphone, ShieldCheck, Cloud, Layout, Megaphone, Wrench, GraduationCap, Briefcase } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export function Services() {
  useSEO({
    title: 'RD Portal Services',
    description: 'Explore the digital services and technology solutions provided by RD Portal.',
    path: '/services',
  });

  const services = [
    {
      title: "Website Development",
      description: "Responsive and SEO-friendly websites using modern technologies.",
      icon: Monitor,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Web Application Development",
      description: "Custom dashboards, portals, and enterprise web applications.",
      icon: Smartphone,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Cybersecurity Consulting",
      description: "Security assessments, awareness training, and best practices implementation.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud migration, deployment, and infrastructure optimization.",
      icon: Cloud,
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces focused on user experience.",
      icon: Layout,
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      title: "Digital Marketing",
      description: "Search Engine Optimization (SEO), social media management, and online branding strategies.",
      icon: Megaphone,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Technical Support",
      description: "Maintenance, troubleshooting, updates, and performance monitoring.",
      icon: Wrench,
      color: "text-slate-600",
      bg: "bg-slate-50"
    },
    {
      title: "Business Consulting",
      description: "Strategic advice, digital transformation planning, and IT guidance.",
      icon: Briefcase,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
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
            <span className="text-brand-300">Our Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            Comprehensive digital services designed to accelerate your growth and secure your business logic.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full bg-slate-50/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
{/* Call to action */}
      <div className="bg-brand-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-brand-100 mb-8 text-lg">Contact our team to discuss your specific requirements. We tailor our services to match your goals exactly.</p>
          <a href="/contact" className="inline-block bg-white text-brand-600 px-8 py-3 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-lg hover:shadow-xl">
            Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
