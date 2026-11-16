/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Interactive Trip Planner Component
 */

import React, { useState, useEffect } from 'react';
import { TripPlanRequest, TripItineraryResponse, DayItinerary } from '../types/travel';
import { DESTINATIONS } from '../data/destinations';
import { 
  Calendar, MapPin, Users, Clock, Wallet, Compass, Sparkles, 
  CheckCircle2, Printer, Copy, Check, Download, Share2, 
  ArrowRight, ShieldCheck, Utensils, Luggage, Plane, Train, Bus
} from 'lucide-react';

interface TripPlannerProps {
  prefilledDestination?: string;
  onClearPrefilledDestination?: () => void;
  onItineraryGenerated?: (itinerary: TripItineraryResponse, request: TripPlanRequest) => void;
}

export const TripPlanner: React.FC<TripPlannerProps> = ({
  prefilledDestination = '',
  onClearPrefilledDestination,
  onItineraryGenerated,
}) => {
  const [formData, setFormData] = useState<TripPlanRequest>({
    startingLocation: 'New Delhi',
    destination: 'Jaipur',
    travelDate: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
    numberOfTravellers: 2,
    numberOfDays: 3,
    budgetCategory: 'Moderate',
    preferences: ['Heritage & Forts', 'Food & Street Delicacies'],
    pace: 'Balanced',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [itinerary, setItinerary] = useState<TripItineraryResponse | null>(null);
  const [activeDayTab, setActiveDayTab] = useState<number>(1);
  const [isCopied, setIsCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync prefilled destination
  useEffect(() => {
    if (prefilledDestination) {
      setFormData(prev => ({ ...prev, destination: prefilledDestination }));
      if (onClearPrefilledDestination) onClearPrefilledDestination();
    }
  }, [prefilledDestination]);

  const travelPreferencesOptions = [
    'Heritage & Forts',
    'Spirituality & Temples',
    'Food & Street Delicacies',
    'Nature & Wildlife',
    'Beaches & Sunsets',
    'Shopping & Handicrafts',
    'Mountains & Trekking',
    'Photography & Art'
  ];

  const handlePreferenceToggle = (pref: string) => {
    setFormData(prev => {
      const exists = prev.preferences.includes(pref);
      if (exists) {
        return { ...prev, preferences: prev.preferences.filter(p => p !== pref) };
      } else {
        return { ...prev, preferences: [...prev.preferences, pref] };
      }
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/plan-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to generate itinerary (${response.status}).`);
      }

      const data: TripItineraryResponse = await response.json();
      setItinerary(data);
      setActiveDayTab(1);

      // Transition to full travel itinerary dashboard
      if (onItineraryGenerated) {
        onItineraryGenerated(data, formData);
      } else {
        // Smooth scroll down to results
        setTimeout(() => {
          document.getElementById('itinerary-result')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

    } catch (err) {
      console.error('Error generating itinerary:', err);
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyItinerary = () => {
    if (!itinerary) return;
    const summaryText = `GHUMAKKAD ITINERARY FOR ${itinerary.destination.toUpperCase()}
Duration: ${itinerary.totalDays} Days (${itinerary.travellers} Travellers)
Budget: ₹${itinerary.estimatedTotalExpense.totalINR.toLocaleString('en-IN')} (${itinerary.budgetTier})

DAY-BY-DAY SCHEDULE:
${itinerary.dayWisePlan.map(d => `
--- DAY ${d.day}: ${d.title} ---
Morning: ${d.morning.place} - ${d.morning.activity} (Tip: ${d.morning.tips})
Afternoon: ${d.afternoon.place} - ${d.afternoon.activity}
Evening: ${d.evening.place} - ${d.evening.activity}
Food: Lunch: ${d.foodRecommendation.lunch} | Dinner: ${d.foodRecommendation.dinner}
`).join('\n')}

TRANSPORTATION:
${itinerary.transportationAdvice.howToReach}
${itinerary.transportationAdvice.localTransitTips}

Created with GHUMAKKAD – Your Intelligent Travel Companion
`;

    navigator.clipboard.writeText(summaryText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveToLocalStorage = () => {
    if (!itinerary) return;
    try {
      const existing = JSON.parse(localStorage.getItem('ghumakkad_saved_trips') || '[]');
      existing.unshift({
        id: `trip-${Date.now()}`,
        savedAt: new Date().toLocaleDateString(),
        data: itinerary
      });
      localStorage.setItem('ghumakkad_saved_trips', JSON.stringify(existing.slice(0, 10)));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  };

  return (
    <section id="plan-trip" className="py-16 sm:py-24 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest border border-emerald-300 mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>AI Itinerary Generator</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Plan My Trip
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Fill in your travel preferences and let our AI create a day-wise schedule, budget estimates, authentic regional food picks, and verified transit tips.
          </p>
        </div>

        {/* The Interactive Form Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-amber-200/90 p-6 sm:p-10 mb-16">
          <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Starting Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Starting Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-orange-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.startingLocation}
                    onChange={(e) => setFormData({ ...formData, startingLocation: e.target.value })}
                    placeholder="e.g. New Delhi, Mumbai, Bengaluru, London..."
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <Compass className="w-4 h-4 text-orange-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    list="destinations-list"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Jaipur, Kerala, Odisha, Kashmir..."
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                  />
                  <datalist id="destinations-list">
                    {DESTINATIONS.map(d => (
                      <option key={d.id} value={d.name}>{d.name} ({d.state})</option>
                    ))}
                  </datalist>
                </div>
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                  />
                </div>
              </div>

              {/* Number of Travellers & Days */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Travellers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={formData.numberOfTravellers}
                      onChange={(e) => setFormData({ ...formData, numberOfTravellers: parseInt(e.target.value) || 1 })}
                      className="w-full pl-10 pr-3 py-3 text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Trip Days
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.numberOfDays}
                      onChange={(e) => setFormData({ ...formData, numberOfDays: parseInt(e.target.value) })}
                      className="w-full pl-10 pr-3 py-3 text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 14].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Day' : 'Days'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Budget Range Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Budget Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Budget', 'Moderate', 'Luxury'] as const).map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budgetCategory: tier })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        formData.budgetCategory === tier
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  {formData.budgetCategory === 'Budget' && 'Backpacker style hostels & trains (~₹2,200/day/person)'}
                  {formData.budgetCategory === 'Moderate' && 'Comfortable 3-star heritage hotels & cabs (~₹4,500/day/person)'}
                  {formData.budgetCategory === 'Luxury' && 'Palace hotels, private chauffeur & fine dining (~₹9,500/day/person)'}
                </p>
              </div>

              {/* Trip Pace */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Trip Pace
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Relaxed', 'Balanced', 'Fast-paced'] as const).map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setFormData({ ...formData, pace: p })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        formData.pace === p
                          ? 'bg-emerald-800 text-white shadow-md'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  {formData.pace === 'Relaxed' && '1-2 leisurely sites per day with relaxed cafe stops.'}
                  {formData.pace === 'Balanced' && '2-3 key landmarks with comfortable sightseeing.'}
                  {formData.pace === 'Fast-paced' && 'See maximum attractions from dawn to dusk.'}
                </p>
              </div>

            </div>

            {/* Travel Preferences Multi-Select */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Travel Preferences (Select all that interest you)
              </label>
              <div className="flex flex-wrap gap-2">
                {travelPreferencesOptions.map((pref) => {
                  const isSelected = formData.preferences.includes(pref);
                  return (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => handlePreferenceToggle(pref)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-orange-100 text-orange-900 border-2 border-orange-600 font-bold'
                          : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />}
                      <span>{pref}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {errorMessage && (
              <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {errorMessage}
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-4 border-t border-stone-200 flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-xl shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin-slow text-amber-200" />
                    <span>Generating Personalized Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-200" />
                    <span>Generate Personalized Itinerary</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        {/* ================= ITINERARY RESULTS DISPLAY ================= */}
        {itinerary && (
          <div id="itinerary-result" className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Itinerary Header Bar */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-radial from-amber-400 to-transparent pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/30 text-amber-300 border border-amber-400/30 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Tailored Journey</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
                    {itinerary.totalDays} Days in {itinerary.destination}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-1">
                    Departing from {itinerary.startingLocation} • {itinerary.travellers} {itinerary.travellers === 1 ? 'Traveller' : 'Travellers'} • {itinerary.budgetTier} Tier
                  </p>
                </div>

                {/* Total Budget Summary Card */}
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-right">
                  <p className="text-[11px] uppercase tracking-wider text-amber-300 font-bold">Estimated Total Budget</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    ₹{itinerary.estimatedTotalExpense.totalINR.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-stone-300 mt-0.5">
                    (~₹{Math.round(itinerary.estimatedTotalExpense.totalINR / (itinerary.totalDays * itinerary.travellers)).toLocaleString('en-IN')}/day/person)
                  </p>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyItinerary}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied to Clipboard' : 'Copy Itinerary'}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print / Save PDF</span>
                  </button>

                  <button
                    onClick={handleSaveToLocalStorage}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30 transition-all cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{savedSuccess ? 'Saved to My Trips!' : 'Save Trip'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-stone-300 italic">
                  All prices in INR • Subject to seasonal variation
                </div>
              </div>

            </div>

            {/* Estimated Expense Breakdown Bar */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
              <h4 className="font-heading text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Wallet className="w-4 h-4 text-emerald-600" />
                Estimated Expenses Breakdown
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-800">Accommodation (40%)</span>
                  <p className="text-lg font-extrabold text-stone-900 mt-0.5">
                    ₹{itinerary.estimatedTotalExpense.accommodationINR.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-stone-500">Hotels & heritage stays</p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Food & Dining (25%)</span>
                  <p className="text-lg font-extrabold text-stone-900 mt-0.5">
                    ₹{itinerary.estimatedTotalExpense.foodINR.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-stone-500">Meals & street culinary</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Local Transit (20%)</span>
                  <p className="text-lg font-extrabold text-stone-900 mt-0.5">
                    ₹{itinerary.estimatedTotalExpense.transportINR.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-stone-500">Cabs, metro & autos</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800">Tickets & Entry (15%)</span>
                  <p className="text-lg font-extrabold text-stone-900 mt-0.5">
                    ₹{itinerary.estimatedTotalExpense.activitiesINR.toLocaleString('en-IN')}
                  </p>
                  <p className="text-[10px] text-stone-500">Monuments, guides, shows</p>
                </div>

              </div>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {itinerary.dayWisePlan.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDayTab(d.day)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeDayTab === d.day
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                  }`}
                >
                  Day {d.day}
                </button>
              ))}
            </div>

            {/* Active Day Detail Card */}
            {(() => {
              const currentDay = itinerary.dayWisePlan.find(d => d.day === activeDayTab) || itinerary.dayWisePlan[0];
              if (!currentDay) return null;

              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/90 shadow-md space-y-6">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                        Schedule for Day {currentDay.day}
                      </span>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
                        {currentDay.title}
                      </h4>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold w-fit">
                      Est. Day Cost: ₹{currentDay.estimatedDayCost.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Morning, Afternoon, Evening Activity Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Morning */}
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>Morning (8:30 AM – 1:00 PM)</span>
                        </div>
                        <h5 className="font-bold text-stone-900 text-sm">{currentDay.morning.place}</h5>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{currentDay.morning.activity}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-amber-200/40 text-[11px] text-amber-900 italic">
                        💡 {currentDay.morning.tips}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-200/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 mb-2">
                          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                          <span>Afternoon (1:00 PM – 5:00 PM)</span>
                        </div>
                        <h5 className="font-bold text-stone-900 text-sm">{currentDay.afternoon.place}</h5>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{currentDay.afternoon.activity}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-orange-200/40 text-[11px] text-orange-900 italic">
                        💡 {currentDay.afternoon.tips}
                      </div>
                    </div>

                    {/* Evening */}
                    <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/60 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          <span>Evening & Night (5:00 PM – 9:30 PM)</span>
                        </div>
                        <h5 className="font-bold text-stone-900 text-sm">{currentDay.evening.place}</h5>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{currentDay.evening.activity}</p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-purple-200/40 text-[11px] text-purple-900 italic">
                        💡 {currentDay.evening.tips}
                      </div>
                    </div>

                  </div>

                  {/* Food Recommendations for this Day */}
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                    <h5 className="font-heading text-xs font-bold text-stone-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Utensils className="w-4 h-4 text-orange-600" />
                      Day {currentDay.day} Culinary Recommendations
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="font-bold text-stone-700">Lunch:</span>
                        <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.lunch}</p>
                      </div>
                      <div>
                        <span className="font-bold text-stone-700">Dinner:</span>
                        <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.dinner}</p>
                      </div>
                      <div>
                        <span className="font-bold text-stone-700">Must-Try Street Food:</span>
                        <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.mustTryStreetFood}</p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })()}

            {/* Logistics & Practical Advisory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Transportation suggestions */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
                <h4 className="font-heading text-base font-bold text-stone-900 flex items-center gap-2">
                  <Plane className="w-4 h-4 text-orange-600" />
                  Transportation Guidance
                </h4>
                <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
                  <p><strong>Reaching Destination:</strong> {itinerary.transportationAdvice.howToReach}</p>
                  <p><strong>Local Transit:</strong> {itinerary.transportationAdvice.localTransitTips}</p>
                  {itinerary.transportationAdvice.recommendedTravelPass && (
                    <p className="text-emerald-800 font-semibold">
                      🎫 Recommended Pass: {itinerary.transportationAdvice.recommendedTravelPass}
                    </p>
                  )}
                </div>
              </div>

              {/* Cultural & Safety Notes */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
                <h4 className="font-heading text-base font-bold text-stone-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Cultural Wisdom & Safety Notes
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-600">
                  {itinerary.culturalSafetyNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
