import React from 'react';
import { Chrome, LayoutGrid, Search, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Manage Chrome Tabs <span className="text-blue-600">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Declutter your browser, organize tabs into groups, and find anything instantly with TabMagic's powerful features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome - It's Free
            </button>
            <button className="flex items-center justify-center bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Learn More
            </button>
          </div>
          
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1200&q=80" 
              alt="TabMagic Interface"
              className="rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}