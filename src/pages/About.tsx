import { motion } from 'motion/react';
import { Target, Lightbulb, HeartHandshake, Eye, Rocket, TrendingUp, ShieldCheck } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export function About() {
  useSEO({
    title: 'About RD Portal',
    description: 'Learn about RD Portal, our mission, and our commitment to digital excellence.',
    path: '/about',
  });

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
            <span className="text-brand-300">About Our Company</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            Founded with a vision to make technology simple and accessible, RD Portal delivers innovative digital services for businesses of all sizes.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-brand-950">Who We Are</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We specialize in creating secure, user-friendly, and scalable solutions that help organizations succeed in today's competitive digital landscape. At RD Portal, we combine technical expertise with a thoughtful approach to business problem-solving.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-50 rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100 rounded-bl-full -z-0 opacity-50"></div>
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm text-brand-600">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600">To become a leading technology solutions provider recognized for innovation, trust, and customer success.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-950 mb-4 flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-brand-600" />
              Our Mission
            </h2>
            <p className="text-slate-600">We are dedicated to achieving excellence across these core objectives.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Deliver high-quality IT solutions.",
              "Promote cybersecurity awareness.",
              "Empower businesses through digital transformation.",
              "Build long-lasting client relationships."
            ].map((mission, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold shrink-0">
                  {idx + 1}
                </div>
                <p className="text-slate-700 font-medium">{mission}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-950 mb-4">Core Values</h2>
            <p className="text-slate-600">The fundamental principles that guide our work and interactions.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Innovation", icon: Lightbulb },
              { name: "Integrity", icon: ShieldCheck },
              { name: "Excellence", icon: Target },
              { name: "Transparency", icon: Eye },
              { name: "Customer Success", icon: HeartHandshake },
              { name: "Continuous Learning", icon: TrendingUp },
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:bg-brand-50 hover:text-brand-700 transition-colors group">
                <div className="bg-white p-4 rounded-full shadow-sm text-slate-700 group-hover:text-brand-600 transition-colors">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{value.name}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
