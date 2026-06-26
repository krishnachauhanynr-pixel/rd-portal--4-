import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function useSEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    // Set Document Title
    document.title = title;

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set og:title as an additional SEO element
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Set Canonical Link
    if (path !== undefined) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      const baseUrl = 'https://rdportal.netlify.app';
      canonicalLink.setAttribute('href', `${baseUrl}${path}`);
    }

  }, [title, description, path]);
}
