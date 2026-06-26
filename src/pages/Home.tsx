import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Users, Code, Cloud, Server, Lightbulb } from 'lucide-react';
import { fadeIn, staggerContainer } from '../lib/animations';
import { useSEO } from '../lib/useSEO';

export function Home() {
  useSEO({
    title: 'RD Portal – Digital Solutions & Online Services',
    description: 'Discover digital solutions, web services, and technology resources at RD Portal.',
    path: '/',
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-950 text-white pt-24 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-600/30 blur-3xl"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white leading-tight">
              Welcome to <span className="text-brand-300 drop-shadow-md">RD Portal</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-brand-100 font-medium tracking-wide">
              Your Trusted Technology Platform
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              RD Portal helps businesses and individuals build scalable online solutions through comprehensive digital services, web development, cybersecurity awareness, cloud technologies, and IT consulting. Our goal is to simplify technology and empower growth.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8 w-full sm:w-auto">
              <Link to="/contact" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-500/30 w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center w-full sm:w-auto backdrop-blur-sm">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Preview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-brand-50 text-brand-600 rounded-2xl mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-brand-950">Our Mission</h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              We believe technology should be accessible, secure, and innovative. RD Portal provides reliable digital services tailored to meet the needs of startups, students, and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-display font-bold text-brand-950">Our Featured Services</h2>
            <h2 className="text-2xl font-display font-semibold text-brand-800">Service Categories</h2>
            <h3 className="text-lg md:text-xl text-slate-700">Popular Digital Solutions for Your Business</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-brand-50 text-brand-600 p-5 rounded-2xl mb-6">
                <Code className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Web Development</h4>
              <p className="text-slate-700">Modern online solutions and tailored web architectures.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-brand-50 text-brand-600 p-5 rounded-2xl mb-6">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Cybersecurity</h4>
              <p className="text-slate-700">Secure your digital services and IT infrastructure.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="bg-brand-50 text-brand-600 p-5 rounded-2xl mb-6">
                <Cloud className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Cloud Solutions</h4>
              <p className="text-slate-700">Scalable technology platforms for enterprise modernization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-950 mb-4">Why Choose RD Portal</h2>
            <p className="text-lg text-slate-700">We deliver excellence through a combination of expertise, dedication, and a client-first approach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Experienced Development Team' },
              { icon: ShieldCheck, title: 'Secure and Scalable Solutions' },
              { icon: Zap, title: 'Fast Project Delivery' },
              { icon: Star, title: 'Affordable Pricing' },
              { icon: Users, title: '24/7 Customer Support' },
              { icon: CheckCircle2, title: 'Client-Centered Approach' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mt-1 leading-snug">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-brand-500/50">
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '120+', label: 'Projects Completed' },
              { value: '50+', label: 'Business Partners' },
              { value: '99%', label: 'Customer Satisfaction' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center py-6 sm:py-0"
              >
                <span className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{stat.value}</span>
                <span className="text-brand-100 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-950 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <div className="text-brand-300 absolute top-4 right-6 md:top-6 md:right-8 text-6xl font-serif opacity-50">"</div>
              <div className="flex gap-1 text-amber-500 mb-6 relative z-10">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-lg md:text-xl text-slate-800 italic mb-8 relative z-10 leading-relaxed font-medium">
                "RD Portal transformed our business website into a modern platform that increased customer engagement."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-xl">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Priya Sharma</h4>
                  <p className="text-sm text-slate-500">Client</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-3xl relative"
            >
              <div className="text-brand-300 absolute top-4 right-6 md:top-6 md:right-8 text-6xl font-serif opacity-50">"</div>
              <div className="flex gap-1 text-amber-500 mb-6 relative z-10">
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
                <Star className="w-6 h-6 fill-current" />
              </div>
              <p className="text-lg md:text-xl text-slate-800 italic mb-8 relative z-10 leading-relaxed font-medium">
                "Professional service, excellent communication, and outstanding technical expertise."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-xl">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul Mehta</h4>
                  <p className="text-sm text-slate-500">Client</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
