import { motion } from 'motion/react';
import { ShieldCheck, Code, Cloud, Search, Smartphone, Users, ChevronRight, Menu, X, ArrowRight, Shield, Globe, PieChart, PenTool } from 'lucide-react';
import { ReactNode } from 'react';

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
