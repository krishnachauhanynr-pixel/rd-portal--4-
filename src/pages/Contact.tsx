import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useSEO } from '../lib/useSEO';

export function Contact() {
  useSEO({
    title: 'Contact RD Portal',
    description: 'Get in touch with RD Portal for support, partnerships, and inquiries.',
    path: '/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <span className="text-brand-300">Contact Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            We would love to hear from you. Reach out for project inquiries, technical support, or collaboration opportunities.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8">
                Ready to start your next project or need consulting? Contact us using the details below or via the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-4 rounded-full text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Address</h3>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    RD Portal Headquarters<br />
                    Innovation Hub, Sector 21<br />
                    Gurugram, Haryana 122001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-4 rounded-full text-brand-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Phone</h3>
                  <p className="text-slate-600 mt-1">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-4 rounded-full text-brand-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                  <a href="mailto:info@rdportal.com" className="text-brand-600 hover:text-brand-700 hover:underline mt-1 block">info@rdportal.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-brand-100 p-4 rounded-full text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Business Hours</h3>
                  <ul className="text-slate-600 mt-1 space-y-1">
                    <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                    <li>Saturday: 10:00 AM – 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-brand-900/5 border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-emerald-50 text-emerald-700 p-6 rounded-2xl flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        placeholder="+91..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-sm shadow-brand-500/20"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
