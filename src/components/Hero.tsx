import React from 'react';
import { Chrome } from 'lucide-react';
import { HeroImage } from './HeroImage';
import { CHROME_STORE_URL } from '../utils/constants';
import { logEvent } from '../utils/analytics';
import { ImageCarousel } from './ImageCarousel';

export function Hero() {

  const handleChromeClick = () => {
    logEvent('Button', 'Click', 'Add to Chrome - Hero');
    window.open(CHROME_STORE_URL, '_blank');
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Manage Chrome Tabs <span className="text-blue-600">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Declutter your browser, organize tabs into groups, find anything instantly, and get summarize what you reading and watching with TabMagic's powerful features.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={handleChromeClick}>
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome - It's Free
            </button>
          </div>
          
          <div className="mt-16">{/*
            <HeroImage 
              src="/images/TabMagic-Screenshot-1.png" 
              alt="TabMagic Interface - Smart Tab Management"
            />*/}
            <ImageCarousel />
          </div>
          
        </div>

      </div>
    </div>
  );
}