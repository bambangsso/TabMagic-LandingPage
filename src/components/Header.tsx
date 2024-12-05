import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { TabMagicLogo } from './TabMagicLogo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <TabMagicLogo />
            <span className="ml-2 text-xl font-bold text-gray-900">TabMagic</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Chrome
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600">How it Works</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg">
              Add to Chrome
            </button>
          </div>
        </div>
      )}
    </header>
  );
}