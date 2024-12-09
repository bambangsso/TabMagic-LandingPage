import React from 'react';
import { Twitter } from 'lucide-react';
import { TabMagicLogo } from './TabMagicLogo';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <TabMagicLogo />
              <span className="ml-2 text-xl font-bold text-white">TabMagic</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your browsing experience with smart tab management and AI-powered features.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/bambangsso" className="hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a> {/*
              <a href="#" className="hover:text-blue-500">
                <Github className="h-6 w-6" />
              </a> */}
              <a href="https://discord.gg/R8gQmeRk" className="hover:text-blue-500">
                Discord
              </a>              
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-blue-500">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="mailto:bambang.sso@gmail.com" className="hover:text-blue-500">Help Center</a></li>
              <li>
                <a 
                  href="#privacy" 
                  className="hover:text-blue-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  className="hover:text-blue-500"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TabMagic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}