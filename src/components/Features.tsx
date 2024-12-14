import React from 'react';
import { LayoutGrid, Search, MessageSquare, Users, Zap, Brain } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="h-6 w-6 text-blue-600" />,
    title: "Super Simple Tab Management",
    description: "Organize, grouping  and declutter your tabs by your own label, making browser management effortless."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Intelligent Grouping",
    description: "Group related tabs automatically based on page content and content (coming soon)"
  },
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "Lightning-Fast Search",
    description: "Find any tab instantly with powerful search capabilities across all your windows."
  },
  {
    icon: <Brain className="h-6 w-6 text-blue-600" />,
    title: "AI-Powered Summaries",
    description: "Get key points from web content automatically using advanced AI technology. Use your own OpenAI or Gemini API Key"
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    title: "Interactive Chat",
    description: "Chat with AI to explore and understand web content more deeply."
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Multi Device Content Access",
    description: "Get your content on desktop and mobile, seamless experience (coming soon)"
  }
];

export function Features() {
  return (
    <section id="features" className="py-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Power Users
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to take control of your browser tabs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}