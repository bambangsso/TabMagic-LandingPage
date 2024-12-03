import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By installing and using TabMagic, you agree to these Terms of Service. If you disagree with any part of the terms, you may not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              TabMagic is a browser extension that provides tab management, organization, and AI-powered features. We offer both free and paid subscription plans with different feature sets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information when required</li>
              <li>Use the service for lawful purposes only</li>
              <li>Not attempt to circumvent any service limitations</li>
              <li>Not reverse engineer the extension</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
            <p className="mb-4">
              Pro subscriptions are billed annually. You can cancel your subscription at any time, but we do not provide refunds for partial subscription periods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              TabMagic and its original content, features, and functionality are owned by TabMagic and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              TabMagic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the extension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="mb-4">
              For any questions about these Terms of Service, please contact us at legal@tabmagic.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}