/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Food & Regional Cuisine Discovery Component
 */

import React, { useState, useMemo } from 'react';
import { CUISINES_DATA } from '../data/cuisines';
import { Dish, Region } from '../types/travel';
import { Utensils, MapPin, Flame, Leaf, Award, Compass, Search } from 'lucide-react';

export const FoodCuisine: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [dietaryFilter, setDietaryFilter] = useState<'All' | 'Veg' | 'NonVeg'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const regionTabs = [
    { id: 'All', label: 'All Cuisines' },
    { id: 'North', label: 'North Indian' },
    { id: 'South', label: 'South Indian' },
    { id: 'East', label: 'East Indian' },
    { id: 'West', label: 'West Indian' },
    { id: 'Northeast', label: 'Northeast Indian' },
  ];

  const filteredDishes = useMemo(() => {
    return CUISINES_DATA.filter((dish) => {
      if (selectedRegion !== 'All' && dish.region !== selectedRegion) return false;
      if (dietaryFilter === 'Veg' && !dish.isVegetarian) return false;
      if (dietaryFilter === 'NonVeg' && dish.isVegetarian) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          dish.name.toLowerCase().includes(q) ||
          dish.state.toLowerCase().includes(q) ||
          dish.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedRegion, dietaryFilter, searchQuery]);

  return (
    <section id="food" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-widest border border-orange-200 mb-3 shadow-2xs">
            <Utensils className="w-3.5 h-3.5 text-orange-600" />
            <span>Flavours of Incredible India</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Food & Regional Cuisines
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover the rich culinary tapestry of India, where recipes have been passed down across centuries through royal durbars, humble village hearths, and bustling street markets.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {regionTabs.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20 scale-105'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dietary & Search Toolbar */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Biryani, Sadya, Rogan Josh...)"
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-semibold">Dietary:</span>
            
            <button
              onClick={() => setDietaryFilter('All')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                dietaryFilter === 'All' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setDietaryFilter('Veg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                dietaryFilter === 'Veg' ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800 border border-emerald-300'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Pure Veg 🟢</span>
            </button>

            <button
              onClick={() => setDietaryFilter('NonVeg')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                dietaryFilter === 'NonVeg' ? 'bg-red-700 text-white' : 'bg-white text-red-800 border border-red-300'
              }`}
            >
              <span>Non-Veg 🔴</span>
            </button>
          </div>

        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Dish Photo */}
                <div className="relative h-52 overflow-hidden bg-stone-100">
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  {/* Veg / Non-Veg badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-sm border flex items-center gap-1 bg-white/90 text-stone-800">
                    <span className={`w-2 h-2 rounded-full ${dish.isVegetarian ? 'bg-emerald-600' : 'bg-red-600'}`}></span>
                    <span>{dish.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</span>
                  </div>

                  {/* Region badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-900/80 text-amber-200 uppercase tracking-wider backdrop-blur-md">
                    {dish.region} India
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    {dish.hindiName && (
                      <span className="text-[11px] font-bold text-amber-300 block">
                        {dish.hindiName}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                      {dish.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-700 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {dish.state}
                    </span>
                    
                    <span className="inline-flex items-center gap-1 text-stone-500 font-semibold">
                      <Flame className={`w-3.5 h-3.5 ${dish.spiceLevel === 'Spicy' ? 'text-red-500' : 'text-amber-500'}`} />
                      {dish.spiceLevel} Spice
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/50 text-xs text-amber-950">
                    <strong className="block text-[11px] uppercase tracking-wider text-amber-800 mb-0.5">
                      Cultural Heritage:
                    </strong>
                    {dish.culturalSignificance}
                  </div>
                </div>
              </div>

              {/* Best spots */}
              <div className="p-4 bg-stone-50 border-t border-stone-100 text-[11px] text-stone-600">
                <span className="font-bold text-stone-800">Must-Visit Spots: </span>
                <span>{dish.bestSpotsToTaste}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
