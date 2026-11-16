/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Hero Section Component
 */

import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, Landmark, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onSearchSubmit: (searchTerm: string) => void;
  onOpenChat: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchSubmit, onOpenChat, onExploreClick }) => {
  const [searchInput, setSearchInput] = useState('');

  const quickSearchTags = [
    'Taj Mahal, Agra',
    'Varanasi Ghats',
    'Kerala Backwaters',
    'Jaipur Forts',
    'Goa Beaches',
    'Kashmir Valley',
    'Puri & Konark',
    'Meghalaya Root Bridges'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchSubmit(searchInput.trim());
    }
  };

  const handleQuickTagClick = (tag: string) => {
    setSearchInput(tag);
    onSearchSubmit(tag);
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Hero Image with Indian Saffron & Emerald Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic India Heritage Backdrop"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered rich tint: deep forest emerald, warm amber/saffron, and subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/75 to-stone-950/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDF9] via-transparent to-stone-950/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cultural Welcome Tag */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/30 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide shadow-lg mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
            <span>नमस्ते • Atithi Devo Bhava • AI Smart Tourism Guide</span>
          </div>
        </div>

        {/* Headings */}
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight sm:leading-none tracking-tight">
            Discover India with Your{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200 bg-clip-text text-transparent underline decoration-amber-400/40 decoration-wavy decoration-2">
              AI Travel Guide
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl">
            Explore destinations, experience cultures and plan unforgettable journeys with artificial intelligence.
          </p>
        </div>

        {/* Primary Interactive Search Bar & Prominent AI Chat Button */}
        <div className="mt-8 max-w-3xl">
          <form
            onSubmit={handleFormSubmit}
            className="p-2 sm:p-2.5 rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md shadow-2xl border border-amber-300/40 flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="flex items-center gap-3 px-4 py-2 w-full flex-1">
              <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Where do you want to explore? (e.g., Jaipur, Kerala, Odisha, Goa...)"
                className="w-full bg-transparent text-stone-800 placeholder-stone-500 text-sm sm:text-base font-medium focus:outline-none"
              />
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 shadow-md transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>

              <button
                type="button"
                onClick={onOpenChat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:scale-[1.02] shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Ask Your AI Guide</span>
              </button>
            </div>
          </form>

          {/* Quick Search Chips */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-amber-200/90 font-medium">Popular:</span>
            {quickSearchTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleQuickTagClick(tag)}
                className="px-2.5 py-1 text-xs rounded-full bg-white/15 hover:bg-amber-500/30 text-stone-100 hover:text-white border border-white/20 transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Badges Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
            <div className="flex items-center gap-2 text-amber-300">
              <Landmark className="w-5 h-5 text-amber-400" />
              <span className="text-xl sm:text-2xl font-extrabold font-heading">28+8</span>
            </div>
            <p className="text-xs text-stone-300 mt-1 font-medium">States & UTs Covered</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
            <div className="flex items-center gap-2 text-amber-300">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-xl sm:text-2xl font-extrabold font-heading">Instant</span>
            </div>
            <p className="text-xs text-stone-300 mt-1 font-medium">AI Custom Itineraries</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
            <div className="flex items-center gap-2 text-amber-300">
              <UtensilsCrossed className="w-5 h-5 text-amber-400" />
              <span className="text-xl sm:text-2xl font-extrabold font-heading">5 Regions</span>
            </div>
            <p className="text-xs text-stone-300 mt-1 font-medium">Authentic Food & Dishes</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
            <div className="flex items-center gap-2 text-amber-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xl sm:text-2xl font-extrabold font-heading">24/7 Helpline</span>
            </div>
            <p className="text-xs text-stone-300 mt-1 font-medium">Official 1363 / 112 Advisory</p>
          </div>

        </div>

      </div>
    </section>
  );
};
