import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">TabMagic collects the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Browser tab data (titles, URLs, and content for functionality purposes)</li>
              <li>Extension settings and preferences</li>
              <li>Usage statistics to improve our service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide tab management functionality</li>
              <li>Generate AI-powered summaries of web content</li>
              <li>Improve our services and user experience</li>
              <li>Respond to your requests and support needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <p className="mb-4">
              All data is stored locally on your device. For Pro users, data may be encrypted and synced across devices through secure servers. We implement appropriate security measures to protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              We use trusted third-party services for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment processing</li>
              <li>Analytics</li>
              <li>AI processing (for content summarization)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt-out of data collection</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@tabmagic.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}