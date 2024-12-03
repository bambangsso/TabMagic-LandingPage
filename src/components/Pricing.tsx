import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "Up to 50 tabs management",
      "Basic tab grouping",
      "Simple search functionality",
      "3 AI summaries per day",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "19",
    interval: "year",
    features: [
      "Unlimited tabs management",
      "Advanced tab grouping",
      "Advanced search with filters",
      "Unlimited AI summaries",
      "AI chat exploration",
      "Priority support",
      "Custom keyboard shortcuts",
      "Cross-device sync"
    ]
  }
];

export function Pricing() {
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
                } transition-colors`}>
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