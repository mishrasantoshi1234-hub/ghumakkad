/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Destination Explorer Component
 */

import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination, Region } from '../types/travel';
import { MapPin, Calendar, Wallet, Compass, Search, Filter, Sparkles, ArrowRight, Tag } from 'lucide-react';

interface DestinationExplorerProps {
  onSelectDestination: (dest: Destination) => void;
  externalSearchQuery?: string;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  onSelectDestination,
  externalSearchQuery = '',
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(externalSearchQuery);
  const [budgetFilter, setBudgetFilter] = useState<string>('All');
  const [tagFilter, setTagFilter] = useState<string>('All');

  // Sync external search query if passed from Hero
  React.useEffect(() => {
    if (externalSearchQuery) {
      setSearchQuery(externalSearchQuery);
      setSelectedRegion('All');
    }
  }, [externalSearchQuery]);

  const regionTabs: { id: string; label: string; icon: string }[] = [
    { id: 'All', label: 'All India', icon: '🇮🇳' },
    { id: 'North', label: 'North India', icon: '🏔️' },
    { id: 'South', label: 'South India', icon: '🌴' },
    { id: 'East', label: 'East India', icon: '🛕' },
    { id: 'West', label: 'West India', icon: '🏜️' },
    { id: 'Northeast', label: 'Northeast India', icon: '🌿' },
  ];

  const popularTags = ['All', 'Heritage', 'Spiritual', 'Nature', 'Beaches', 'UNESCO', 'Hills'];

  // Filter logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      // Region tab match
      if (selectedRegion !== 'All') {
        // Special case: Jaipur is traditionally both North & West
        if (selectedRegion === 'West' && item.id === 'jaipur') {
          // Allow
        } else if (item.region !== selectedRegion) {
          return false;
        }
      }

      // Budget filter match
      if (budgetFilter !== 'All' && item.budgetCategory !== budgetFilter) {
        return false;
      }

      // Tag filter match
      if (tagFilter !== 'All' && !item.tags.includes(tagFilter)) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesState = item.state.toLowerCase().includes(q);
        const matchesAttractions = item.famousAttractions.some(a => a.toLowerCase().includes(q));
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        const matchesDescription = item.description.toLowerCase().includes(q);
        return matchesName || matchesState || matchesAttractions || matchesTags || matchesDescription;
      }

      return true;
    });
  }, [selectedRegion, searchQuery, budgetFilter, tagFilter]);

  return (
    <section id="explore" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/80 text-orange-800 text-xs font-bold uppercase tracking-widest border border-orange-200 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Incredible India</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Explore India’s Iconic Destinations
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Journey through majestic Himalayan peaks, royal desert fortresses, ancient temple towns, coastal backwaters, and pristine northeastern rainforests.
          </p>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {regionTabs.map((tab) => {
            const isActive = selectedRegion === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRegion(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20 scale-105'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Search Toolbar */}
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Inline search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, temple, monument..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Tag Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs text-stone-500 font-semibold mr-1 flex items-center gap-1 shrink-0">
              <Tag className="w-3.5 h-3.5" /> Tag:
            </span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                  tagFilter === tag
                    ? 'bg-emerald-800 text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Budget Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-stone-500 font-semibold shrink-0">Budget:</span>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-white border border-stone-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            >
              <option value="All">All Budgets</option>
              <option value="Budget">Budget Friendly (under ₹10k)</option>
              <option value="Moderate">Moderate (₹8k–₹18k)</option>
              <option value="Luxury">Luxury (₹15k+)</option>
            </select>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>Showing <strong>{filteredDestinations.length}</strong> destinations</span>
          {searchQuery && (
            <span>Filtered for query: "<strong>{searchQuery}</strong>"</span>
          )}
        </div>

        {/* Destinations Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border border-dashed border-stone-300">
            <Compass className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <p className="text-base font-bold text-stone-700">No destinations match your search</p>
            <p className="text-xs text-stone-500 mt-1">Try resetting filters or searching for "Delhi", "Kerala", "Jaipur", "Odisha", or "Goa".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
                setBudgetFilter('All');
                setTagFilter('All');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-orange-700 bg-orange-100 hover:bg-orange-200 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />
                  
                  {/* Region badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-stone-900/70 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                    {dest.region} India
                  </div>

                  {/* Budget category tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-700/80 backdrop-blur-md text-white text-[11px] font-bold border border-emerald-400/30">
                    {dest.budgetCategory}
                  </div>

                  {/* Destination & State overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{dest.state}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-white mt-0.5">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Short description */}
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {dest.description}
                    </p>

                    {/* Famous Attractions Pills */}
                    <div className="mt-4">
                      <p className="text-[11px] uppercase font-bold tracking-wider text-stone-400 mb-1.5">
                        Famous Attractions
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {dest.famousAttractions.slice(0, 3).map((attr, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-stone-700 border border-stone-200"
                          >
                            {attr}
                          </span>
                        ))}
                        {dest.famousAttractions.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200">
                            +{dest.famousAttractions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Best Time & Estimated Budget Info */}
                    <div className="mt-4 pt-4 border-t border-stone-100 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <div className="flex items-center gap-1 text-stone-400 font-semibold mb-0.5">
                          <Calendar className="w-3.5 h-3.5 text-orange-600" />
                          <span>Best Time</span>
                        </div>
                        <p className="font-semibold text-stone-800 truncate" title={dest.bestTimeToVisit}>
                          {dest.bestTimeToVisit}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-stone-400 font-semibold mb-0.5">
                          <Wallet className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Est. Budget</span>
                        </div>
                        <p className="font-semibold text-stone-800 truncate" title={dest.estimatedBudget}>
                          {dest.estimatedBudget}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Explore More Button */}
                  <div className="mt-5 pt-3">
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-orange-800 bg-orange-50 hover:bg-orange-600 hover:text-white border border-orange-200/80 hover:border-orange-600 transition-all cursor-pointer group/btn"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
