/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Footer & Legal Modals Component
 */

import React, { useState } from 'react';
import { Compass, Heart, ShieldCheck, FileText, ExternalLink, X, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenChat }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
            
            {/* Col 1 & 2: Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
                    GHUMAKKAD
                  </span>
                  <p className="text-[11px] text-amber-400 font-medium">
                    Your Intelligent Travel Companion
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
                An AI-powered smart tourism platform designed to guide domestic and international travelers across the cultural, geographical, and culinary wonderland of India.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs text-stone-400">Cultural Ethos:</span>
                <span className="text-xs font-bold text-amber-300 px-2.5 py-1 rounded-full bg-stone-900 border border-amber-400/30">
                  अतिथि देवो भव (Guest is God)
                </span>
              </div>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
                Explore Sections
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('explore')} className="hover:text-amber-400 transition-colors">
                    Explore Destinations
                  </button>
                </li>
                <li>
                  <button onClick={onOpenChat} className="hover:text-amber-400 transition-colors flex items-center gap-1 text-orange-400 font-semibold">
                    <span>Ask AI Guide</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('plan-trip')} className="hover:text-amber-400 transition-colors">
                    Plan My Trip
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('culture')} className="hover:text-amber-400 transition-colors">
                    Culture & Heritage
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('food')} className="hover:text-amber-400 transition-colors">
                    Food & Cuisine
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('travel-tips')} className="hover:text-amber-400 transition-colors">
                    Verified Travel Advisory
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                    About Project
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Official Government Portals */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
                Official Portals
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <a
                    href="https://www.incredibleindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <span>Incredible India</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.irctc.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <span>Indian Railways (IRCTC)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tourism.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <span>Ministry of Tourism</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://asi.nic.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors flex items-center gap-1"
                  >
                    <span>Archaeological Survey (ASI)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 5: Verified Emergency & Contact */}
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
                24/7 Helplines
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[11px] text-stone-500 block">All-in-One Emergency:</span>
                  <a href="tel:112" className="text-white font-bold hover:text-amber-400 text-sm">
                    Dial 112
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 block">Incredible India Helpline:</span>
                  <a href="tel:1363" className="text-white font-bold hover:text-amber-400 text-sm">
                    1363 (1800-11-1363)
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-stone-500 block">Railway Madad Helpline:</span>
                  <a href="tel:139" className="text-white font-bold hover:text-amber-400 text-sm">
                    Dial 139
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright, Legal links, Socials */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © 2026 <strong>GHUMAKKAD – Your Intelligent Travel Companion</strong>. Built with pride for Incredible India.
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setModalType('privacy')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType('terms')}
                className="hover:text-amber-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {modalType === 'privacy' && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] text-stone-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-orange-600 font-bold text-lg mb-4 font-heading">
              <ShieldCheck className="w-5 h-5" />
              <h3>Privacy Policy – GHUMAKKAD</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p><strong>1. Respect for User Privacy:</strong> GHUMAKKAD does not sell, market, or distribute any user travel queries or personal preferences to commercial third parties.</p>
              <p><strong>2. Local Storage:</strong> Saved itineraries and trip bookmarks are kept locally within your web browser storage for quick retrieval without requiring intrusive registration.</p>
              <p><strong>3. AI Processing:</strong> Natural language questions sent to the AI travel guide are processed securely without retaining sensitive personal tracking identifiers.</p>
              <p><strong>4. External Links:</strong> When clicking official government links (such as IRCTC or Incredible India), users are governed by the respective official policies of those sovereign portals.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {modalType === 'terms' && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] text-stone-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-auto">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-orange-600 font-bold text-lg mb-4 font-heading">
              <FileText className="w-5 h-5" />
              <h3>Terms & Conditions – GHUMAKKAD</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p><strong>1. Informational & Planning Platform:</strong> GHUMAKKAD is an educational and itinerary planning tool. It is not an airline, hotel, or tour booking operator.</p>
              <p><strong>2. Accuracy of Travel Information:</strong> While official numbers (112, 1363, 139) are verified, users should verify train schedules, festival dates, and entry tickets on official state or railway websites prior to travel.</p>
              <p><strong>3. Responsible Tourism:</strong> Users agree to respect local traditions, religious decorum, and environmental protection guidelines across all destinations visited.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
