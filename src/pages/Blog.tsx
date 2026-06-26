import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export function Blog() {
  useSEO({
    title: 'RD Portal Blog',
    description: 'Read the latest updates, digital insights, and technology news from RD Portal.',
    path: '/blog',
  });

  const posts = [
    {
      title: "The Importance of Cybersecurity in 2026",
      summary: "As cyber threats continue to evolve, organizations must prioritize proactive security measures, employee awareness, and regular system updates.",
      category: "Cybersecurity",
      date: "Oct 12, 2026",
      author: "Admin"
    },
    {
      title: "Top Web Development Trends",
      summary: "Modern websites emphasize responsive design, performance optimization, accessibility, and AI-powered user experiences. Keep up with the latest Technology Trends.",
      category: "Web Development",
      date: "Sep 28, 2026",
      author: "Admin"
    },
    {
      title: "Benefits of Cloud Computing",
      summary: "Cloud platforms provide scalability, cost efficiency, remote collaboration, and improved disaster recovery capabilities.",
      category: "Cloud",
      date: "Sep 15, 2026",
      author: "Admin"
    },
    {
      title: "Why Businesses Need SEO Tips & Strategies",
      summary: "Search engine optimization increases online visibility. Learn our top SEO Tips and Digital Marketing Strategies to support long-term business growth.",
      category: "Marketing",
      date: "Aug 30, 2026",
      author: "Admin"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      summary: "AI tools can automate repetitive tasks, enhance decision-making, and create personalized customer experiences across industries.",
      category: "AI",
      date: "Aug 10, 2026",
      author: "Admin"
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
            <span className="text-brand-300">Digital Insights & Technology News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            Insights, trends, and expert advice for navigating the digital world.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full min-h-[60vh]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-8">
                {/* Simulated placeholder image color based on category */}
                <div className={`absolute inset-0 opacity-20 ${
                  post.category === 'Cybersecurity' ? 'bg-emerald-500' :
                  post.category === 'Web Development' ? 'bg-blue-500' :
                  post.category === 'Cloud' ? 'bg-sky-500' :
                  post.category === 'Marketing' ? 'bg-amber-500' : 'bg-purple-500'
                }`}></div>
                <h3 className="relative z-10 text-2xl font-bold font-display text-slate-800 text-center opacity-30 group-hover:scale-105 transition-transform">{post.category}</h3>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                
                <h2 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-slate-600 mb-6 flex-1">
                  {post.summary}
                </p>
                
                <a href="#" className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700 transition-colors mt-auto">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
