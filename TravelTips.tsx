/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Verified Official Travel Advisory & Guidelines Component
 */

import React, { useState } from 'react';
import { EMERGENCY_CONTACTS, TRAVEL_ADVISORIES } from '../data/travelTips';
import { 
  ShieldAlert, PhoneCall, Train, CreditCard, CloudSun, Leaf, 
  MapPin, CheckCircle, AlertTriangle, Info, ExternalLink, HelpCircle
} from 'lucide-react';

export const TravelTips: React.FC = () => {
  const [activeAdvisory, setActiveAdvisory] = useState<string>('railway');

  return (
    <section id="travel-tips" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-stone-50 to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest border border-emerald-300 mb-3 shadow-2xs">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Official Government & Travel Guidelines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Essential Travel Advisory
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Authentic, verified information for safe, smooth, and responsible travel across India. Official helplines, IRCTC railway rules, UPI digital payments, and sustainable practices.
          </p>
        </div>

        {/* ================= EMERGENCY CONTACTS GRID ================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading text-xl font-bold text-stone-900 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-red-600" />
              <span>Official 24x7 Emergency Helplines (Pan-India)</span>
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Verified Official Numbers
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_CONTACTS.map((contact, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      {contact.service}
                    </span>
                    {contact.isTollFree && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Toll-Free
                      </span>
                    )}
                  </div>
                  
                  <div className="text-2xl font-extrabold font-heading text-stone-900 flex items-center gap-2 my-1">
                    <span className="text-orange-600">📞</span>
                    <span>{contact.number}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mt-2">
                    {contact.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <a
                    href={`tel:${contact.number.split('/')[0].trim()}`}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Tap to Call</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-stone-400">Available 24x7</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DETAILED ADVISORY TABS ================= */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-200/90 overflow-hidden">
          
          {/* Tab Headers */}
          <div className="flex items-center overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-2 no-scrollbar">
            
            <button
              onClick={() => setActiveAdvisory('railway')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeAdvisory === 'railway'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Train className="w-4 h-4" />
              <span>Indian Railways (IRCTC)</span>
            </button>

            <button
              onClick={() => setActiveAdvisory('upi')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeAdvisory === 'upi'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Currency & UPI Payments</span>
            </button>

            <button
              onClick={() => setActiveAdvisory('transit')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeAdvisory === 'transit'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>Metros & Local Transport</span>
            </button>

            <button
              onClick={() => setActiveAdvisory('weather')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeAdvisory === 'weather'
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              <CloudSun className="w-4 h-4" />
              <span>Weather Considerations</span>
            </button>

            <button
              onClick={() => setActiveAdvisory('eco')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                activeAdvisory === 'eco'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 hover:bg-stone-200'
              }`}
            >
              <Leaf className="w-4 h-4" />
              <span>Responsible Tourism</span>
            </button>

          </div>

          {/* Tab Contents */}
          <div className="p-6 sm:p-10">
            {activeAdvisory === 'railway' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-lg font-heading">
                  <Train className="w-5 h-5" />
                  <h4>{TRAVEL_ADVISORIES.railwayTravel.title}</h4>
                </div>
                <div className="space-y-3">
                  {TRAVEL_ADVISORIES.railwayTravel.verifiedTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/50 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl bg-stone-100 text-xs text-stone-500">
                  Official Portal: <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline">irctc.co.in</a> • IRCTC Rail Connect App on Android & iOS.
                </div>
              </div>
            )}

            {activeAdvisory === 'upi' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-lg font-heading">
                  <CreditCard className="w-5 h-5" />
                  <h4>{TRAVEL_ADVISORIES.digitalPayments.title}</h4>
                </div>
                <div className="space-y-3">
                  {TRAVEL_ADVISORIES.digitalPayments.verifiedTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/50 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl bg-stone-100 text-xs text-stone-500">
                  Tip: Most UPI transactions incur ₹0 processing fees and work seamlessly with Indian bank accounts and designated international tourist wallets.
                </div>
              </div>
            )}

            {activeAdvisory === 'transit' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-lg font-heading">
                  <MapPin className="w-5 h-5" />
                  <h4>{TRAVEL_ADVISORIES.localTransit.title}</h4>
                </div>
                <div className="space-y-3">
                  {TRAVEL_ADVISORIES.localTransit.verifiedTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/50 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeAdvisory === 'weather' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-lg font-heading">
                  <CloudSun className="w-5 h-5" />
                  <h4>{TRAVEL_ADVISORIES.weatherSeasons.title}</h4>
                </div>
                <div className="space-y-3">
                  {TRAVEL_ADVISORIES.weatherSeasons.verifiedTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/40 border border-amber-200/50 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeAdvisory === 'eco' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg font-heading">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <h4>{TRAVEL_ADVISORIES.responsibleTourism.title}</h4>
                </div>
                <div className="space-y-3">
                  {TRAVEL_ADVISORIES.responsibleTourism.verifiedTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-xs sm:text-sm text-stone-700">
                      <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Verification & Transparency Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-100/70 border border-amber-300 text-stone-700 text-xs flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-900 block font-bold">Clear Distinction of Verified Data:</strong>
            All emergency phone numbers, IRCTC booking portals, and government toll-free hotlines listed above are verified official public services. Day-wise activity costs, hotel rates, and custom itineraries generated elsewhere in this platform represent AI estimations based on prevailing averages and should be confirmed at the time of reservation.
          </div>
        </div>

      </div>
    </section>
  );
};
