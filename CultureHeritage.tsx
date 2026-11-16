/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Culture & Heritage Showcase Component
 */

import React, { useState } from 'react';
import { FESTIVALS_DATA, CULTURAL_ITEMS } from '../data/culture';
import { Sparkles, Calendar, MapPin, Feather, Music, ShieldAlert, Heart, Landmark, Palette, Shirt } from 'lucide-react';

export const CultureHeritage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'festivals' | 'dance' | 'clothing' | 'music' | 'handicrafts'>('festivals');

  return (
    <section id="culture" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-300 mb-3 shadow-2xs">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            <span>Living Traditions & Soul of Bharat</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Culture & Heritage
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Immerse yourself in 5,000 years of living heritage: colorful sacred festivals, graceful classical dances, timeless handlooms, and master artisans.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          
          <button
            onClick={() => setActiveTab('festivals')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'festivals'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Festivals of India</span>
          </button>

          <button
            onClick={() => setActiveTab('dance')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'dance'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <Feather className="w-4 h-4 text-amber-200" />
            <span>Classical Dance Forms</span>
          </button>

          <button
            onClick={() => setActiveTab('clothing')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'clothing'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <Shirt className="w-4 h-4 text-amber-200" />
            <span>Traditional Attire</span>
          </button>

          <button
            onClick={() => setActiveTab('music')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'music'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <Music className="w-4 h-4 text-amber-200" />
            <span>Music Traditions</span>
          </button>

          <button
            onClick={() => setActiveTab('handicrafts')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === 'handicrafts'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
            }`}
          >
            <Palette className="w-4 h-4 text-amber-200" />
            <span>Traditional Handicrafts</span>
          </button>

        </div>

        {/* Tab 1: Festivals Grid */}
        {activeTab === 'festivals' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {FESTIVALS_DATA.map((fest) => (
              <div
                key={fest.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={fest.imageUrl}
                    alt={fest.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                      {fest.hindiName}
                    </span>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-white mt-0.5">
                      {fest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                      <Calendar className="w-3.5 h-3.5 text-orange-600" />
                      <span>{fest.month}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {fest.description}
                    </p>

                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-stone-700">
                      <strong className="text-amber-900 block mb-1">Key Experience & Ritual:</strong>
                      {fest.keyRitual}
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-stone-400 border-t border-stone-100">
                    <MapPin className="w-3 h-3 inline mr-1 text-emerald-600" />
                    <strong>Celebrated in:</strong> {fest.statesCelebrated}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Dance Forms */}
        {activeTab === 'dance' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {CULTURAL_ITEMS.filter(item => item.category === 'dance').map((dance) => (
              <div
                key={dance.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="relative h-56 sm:h-auto sm:w-1/2 overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={dance.imageUrl}
                    alt={dance.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-stone-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white uppercase tracking-wider">
                      Classical Dance
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs text-orange-700 font-bold uppercase tracking-wider">
                      Origin: {dance.originState}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-stone-900">
                      {dance.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {dance.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 italic">
                    {dance.culturalSignificance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Traditional Clothing */}
        {activeTab === 'clothing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {CULTURAL_ITEMS.filter(item => item.category === 'clothing').map((clothing) => (
              <div
                key={clothing.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-60 overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={clothing.imageUrl}
                    alt={clothing.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                      {clothing.originState}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {clothing.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {clothing.description}
                  </p>
                  <p className="text-xs text-orange-950 font-medium p-3 rounded-xl bg-amber-50/70 border border-amber-200/60">
                    {clothing.culturalSignificance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Music Traditions */}
        {activeTab === 'music' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {CULTURAL_ITEMS.filter(item => item.category === 'music').map((mus) => (
              <div
                key={mus.id}
                className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-900 mb-3">
                    <Music className="w-3.5 h-3.5 text-purple-700" />
                    <span>Classical Melody</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-stone-900">
                    {mus.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-semibold mt-0.5">
                    Region: {mus.originState}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                    {mus.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-amber-900 italic bg-amber-50/60 p-3 rounded-xl">
                  {mus.culturalSignificance}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Traditional Handicrafts */}
        {activeTab === 'handicrafts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {CULTURAL_ITEMS.filter(item => item.category === 'handicraft').map((craft) => (
              <div
                key={craft.id}
                className="rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-1">
                    {craft.originState}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">
                    {craft.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {craft.description}
                  </p>
                </div>
                <div className="p-4 bg-stone-50 border-t border-stone-100 text-xs text-stone-500 italic">
                  <strong>Legacy:</strong> {craft.culturalSignificance}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
