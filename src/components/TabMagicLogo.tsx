import React from 'react';
import { Layout, Layers } from 'lucide-react';

export function TabMagicLogo() {
  return (
    <div className="relative">
      <Layers className="h-8 w-8 text-blue-600" />
      <Layout className="h-4 w-4 text-blue-400 absolute -bottom-1 -right-1" />
    </div>
  );
}