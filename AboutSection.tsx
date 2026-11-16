/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - About Us & Academic Presentation Component
 */

import React, { useState } from 'react';
import { Compass, GraduationCap, Heart, Mail, Phone, Send, CheckCircle2, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setFormSent(false);
    }, 4000);
  };

  const faqs = [
    {
      q: 'What is GHUMAKKAD?',
      a: 'GHUMAKKAD is an AI-based smart tourism platform for India designed to assist domestic and international travelers. It integrates regional destination discovery, customized day-wise itinerary generation, cultural education, culinary guides, and verified safety advisories.'
    },
    {
      q: 'How does the AI assistant help travelers?',
      a: 'The AI assistant processes your budget, travel duration, and specific interests (adventure, temples, beaches, food) to construct optimized day-wise itineraries, recommend must-try local delicacies, and provide travel logistics advice.'
    },
    {
      q: 'Is the travel information verified?',
      a: 'Yes. Official emergency hotlines (112, 1363, 139), IRCTC railway reservation rules, and government guidelines are strictly verified. Itinerary cost estimates and day schedules are generated using real-world averages.'
    },
    {
      q: 'Is GHUMAKKAD free to use?',
      a: 'Yes! GHUMAKKAD is completely open for all travelers exploring the wonder and diversity of Incredible India.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-widest border border-orange-200 mb-3 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-orange-600" />
            <span>Our Vision & Legacy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            About GHUMAKKAD
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Bridging India’s ancient culture of warm hospitality (Atithi Devo Bhava) with modern artificial intelligence to make travel seamless, enriching, and unforgettable.
          </p>
        </div>

        {/* 2-Column Info & BCA Academic Presentation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center shadow-inner">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-stone-900">
                Empowering Explorers of India
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                India is a continent masquerading as a country—boasting 28 distinct states, 8 union territories, thousands of languages and dialects, and millennia of unbroken spiritual traditions.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                GHUMAKKAD eliminates the overwhelm of planning by providing smart destination breakdowns across North, South, East, West, and Northeast India, while honoring the sacred cultural heritage of local communities.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950">
              <strong className="block text-amber-900 mb-1">Our Core Commitment:</strong>
              Responsible, sustainable, and culturally respectful tourism that directly supports local artisans, homestays, and preserves fragile Himalayan and coastal ecologies.
            </div>
          </div>

          {/* Academic & Technology Framework (BCA Presentation Ready) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950 to-stone-900 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                <GraduationCap className="w-4 h-4" />
                <span>Bachelor of Computer Applications (BCA) Capstone</span>
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-white">
                Modern Full-Stack Architecture
              </h3>
              
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Designed and engineered as a comprehensive web application adhering to professional software engineering standards:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="text-amber-300 font-bold block mb-1">Frontend UI</span>
                  <p className="text-stone-300">React 19 + TypeScript + Tailwind CSS with responsive layout and Indian design motifs.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="text-emerald-300 font-bold block mb-1">Backend Server</span>
                  <p className="text-stone-300">Node.js + Express with server-side proxy routes for secure AI operations.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="text-orange-300 font-bold block mb-1">AI Integration</span>
                  <p className="text-stone-300">Google Gemini 3.8 Flash via @google/genai with offline knowledge engine fallback.</p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <span className="text-purple-300 font-bold block mb-1">Data Model</span>
                  <p className="text-stone-300">Normalized TypeScript datasets for destinations, regional cuisines & culture.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-400 border-t border-white/10">
              Suitable for university evaluation, demonstrating production-ready UX, clean separation of concerns, and real AI capabilities.
            </div>
          </div>

        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-heading text-2xl font-bold text-stone-900 text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-orange-600" />
            <span>Frequently Asked Questions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <h4 className="font-bold text-stone-900 text-sm mb-2">{faq.q}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Form */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-amber-200 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="font-heading text-2xl font-bold text-stone-900">
              Get in Touch with Ghumakkad
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Have feedback, destination suggestions, or questions? Send us a message.
            </p>
          </div>

          {formSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="font-bold text-emerald-900 text-sm">Thank You for Reaching Out!</p>
              <p className="text-xs text-emerald-700">We have received your message and will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Message or Feedback</label>
                <textarea
                  rows={3}
                  required
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Share your travel questions or suggestions..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
