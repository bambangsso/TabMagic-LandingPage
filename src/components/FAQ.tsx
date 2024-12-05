import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does TabMagic organize my tabs?",
    answer: "You do manually given label to organize tabs into custom groups and save them for later use. TabMagic also using AI to automatically group related tabs based on title, content, domain (this features is coming soon)"
  }, /*
  {
    question: "Can I sync my tabs across different devices?",
    answer: "Yes, with our Pro plan, you can sync your tabs and groups across all your devices seamlessly. Your tab organization stays consistent whether you're on your work computer, home laptop, or any other device."
  }, */
  {
    question: "How secure is my browsing data?",
    answer: "We take privacy seriously. All your data is stored locally on your device by default. For Pro users who opt for sync, all data is encrypted end-to-end before being transmitted to our servers."
  }, /*
  {
    question: "What happens to my tabs if I uninstall TabMagic?",
    answer: "Your browser's original tabs remain unchanged if you uninstall TabMagic. We recommend exporting your tab groups before uninstalling if you want to save your organization structure."
  }, */
  {
    question: "How does the AI Key Points work?",
    answer: "Our AI analyzes the content of your open tabs and generates concise summaries, helping you quickly understand the key points without reading the entire page or watching youtube till end. We use OpenAI and Google Gemini for the AI, so it is mandatory to entry API Key on Setting menu."
  },
  {
    question: "Why do we need API Key for",
    answer: "Our AI Key Point and Chat features use OpenAI and Google Gemini API to generate consise summary and asking the page content by chating"
  },
  {
    question: "How do API Key is stored?",
    answer: "Your API Key is stored on your local browser storage and never leaves from your browser"
  },  
  {
    question: "How do we get OpenAI or Google Gemini API key?",
    answer: "You can go to https://platform.openai.com/ for OpeanAI and https://aistudio.google.com/apikey for Google Gemini"
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TabMagic
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-500" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}