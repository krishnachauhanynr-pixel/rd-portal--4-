import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.Sitemap })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sitemap" element={<Sitemap />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
