import React, { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGA();
    logPageView();

    const handleHashChange = () => {
      logPageView();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <>{children}</>;
}
