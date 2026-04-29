import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      showWidget?: () => void;
      hideWidget?: () => void;
      maximize?: () => void;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export function openTawkChat() {
  // If already loaded, open immediately
  if (window.Tawk_API?.maximize) {
    window.Tawk_API.maximize();
    return;
  }

  // Otherwise wait for it to load then open
  const wait = setInterval(() => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
      clearInterval(wait);
    }
  }, 300);

  // Stop trying after 10 seconds
  setTimeout(() => clearInterval(wait), 10000);
}

export default function TawkTo() {
  useEffect(() => {
    if (document.getElementById('tawkto-script')) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];

    s1.id = 'tawkto-script';
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69f14b2b05ee8f1c3506430e/1jnb8r9be';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    s0?.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
}