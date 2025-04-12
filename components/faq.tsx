'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What materials do you use for your 3D prints?',
    answer:
      'We use high-quality PLA and PETG filaments for our prints. These materials are known for their durability, detail retention, and environmental friendliness. Each material is carefully selected based on the specific requirements of the design.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3-5 business days within the United States. International shipping times vary by destination but generally take 7-14 business days. We also offer expedited shipping options for those who need their items sooner.',
  },
  {
    question: 'Do you offer custom designs?',
    answer:
      'Yes! We love working on custom projects. Whether you have a specific design in mind or need help bringing your idea to life, our team can work with you to create a unique piece. Contact us through our custom order form to get started.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We accept returns within 14 days of delivery for items that are unused and in their original packaging. Custom orders and made-to-order items are not eligible for returns unless they arrive damaged or defective. Please contact our customer service team to initiate a return.',
  },
  {
    question: 'How do I care for my 3D printed items?',
    answer:
      'To maintain the quality of your 3D printed items, avoid exposing them to direct sunlight for extended periods, keep them away from heat sources, and clean them gently with a soft, dry cloth. For more detailed care instructions, please refer to the care guide included with your purchase.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-muted/50">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
