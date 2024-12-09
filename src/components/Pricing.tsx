import React from 'react';
import { Check } from 'lucide-react';
import { CHROME_STORE_URL } from '../utils/constants';
import { logEvent } from '../utils/analytics';

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "Up to 30 saves",
      "Up to 3 tabs grouping",
      "Up to 2 tabs pin",
      "5 AI Key Points & Chat per day",
      "No account needed"
    ]
  },
  {
    name: "Pro",
    price: "19",
    interval: "year",
    features: [
      "Unlimited saves",
      "Unlimited tabs grouping",
      "Up to 5 tabs pin",
      "Unlimited AI Key Points & Chat",
      "AI auto grouping tabs (comming soon)",
      "Cross-device sync (coming soon)",
      "Mobile app for on the go access (coming soon)"
    ]
  }
];

export function Pricing() {

  const handleGetStarted = () => {
    logEvent('Button', 'Click', 'Get Started - Pricing');
    window.open(CHROME_STORE_URL, '_blank');
  };
    
  return (
    <section id="pricing" className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start for free, upgrade when you need more
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.interval && (
                    <span className="text-gray-600">/{plan.interval}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg ${
                  plan.name === "Pro" 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } transition-colors`} onClick={plan.name === "Free" ? handleGetStarted : undefined}>
                  {plan.name === "Free" ? "Get Started" : "Upgrade to Pro"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}