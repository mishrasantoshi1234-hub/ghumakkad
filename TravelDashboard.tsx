/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD – AI Generated Travel Itinerary Dashboard
 * Complete interactive travel plan dashboard with all 10 required sections
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  TripPlanRequest, TripItineraryResponse, DayItinerary, 
  Attraction, HotelListing, LocalDishItem, WeatherInfo 
} from '../types/travel';
import { getDestinationDetails, CompleteDestinationDetail } from '../data/destinationDetails';
import { fetchLiveWeather } from '../services/weatherService';
import { 
  Compass, Calendar, MapPin, Users, Clock, Wallet, Sparkles, 
  Printer, Copy, Check, Download, Share2, ArrowLeft, ArrowRight,
  Plane, Train, Bus, Car, Utensils, Hotel, CloudSun, Leaf, 
  HelpCircle, Send, Bot, User, CheckCircle2, AlertCircle, Info,
  ExternalLink, ChevronDown, ChevronUp, Eye, Star, ShieldCheck, Tag
} from 'lucide-react';

interface TravelDashboardProps {
  itinerary: TripItineraryResponse;
  tripRequest: TripPlanRequest;
  onBackToHome: () => void;
  onModifyTrip: () => void;
}

export const TravelDashboard: React.FC<TravelDashboardProps> = ({
  itinerary,
  tripRequest,
  onBackToHome,
  onModifyTrip,
}) => {
  // Retrieve rich authentic destination data
  const destinationDetail: CompleteDestinationDetail = useMemo(() => {
    return getDestinationDetails(itinerary.destination);
  }, [itinerary.destination]);

  // Weather state (Live Open-Meteo or verified seasonal data)
  const [weatherData, setWeatherData] = useState<WeatherInfo>(destinationDetail.weather);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);

  // Fetch live weather on mount or destination change
  useEffect(() => {
    let isMounted = true;
    setWeatherLoading(true);

    fetchLiveWeather(
      destinationDetail.weather.lat,
      destinationDetail.weather.lng,
      destinationDetail.weather
    ).then((data) => {
      if (isMounted) {
        setWeatherData(data);
        setWeatherLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [destinationDetail]);

  // Section 1: Itinerary state
  const [activeDayTab, setActiveDayTab] = useState<number>(1);

  // Section 2: Attractions filter state
  const [attractionFilter, setAttractionFilter] = useState<string>('All');
  const [selectedAttractionModal, setSelectedAttractionModal] = useState<Attraction | null>(null);

  // Section 3: Hotel filter state
  const [hotelFilter, setHotelFilter] = useState<string>('All');

  // Section 4: Food filter state
  const [foodFilter, setFoodFilter] = useState<string>('All');

  // Section 6: Interactive Budget Calculator state
  const [budgetAccommodationPerDay, setBudgetAccommodationPerDay] = useState<number>(
    Math.round(itinerary.estimatedTotalExpense.accommodationINR / itinerary.totalDays)
  );
  const [budgetFoodPerDay, setBudgetFoodPerDay] = useState<number>(
    Math.round(itinerary.estimatedTotalExpense.foodINR / itinerary.totalDays)
  );
  const [budgetTransportPerDay, setBudgetTransportPerDay] = useState<number>(
    Math.round(itinerary.estimatedTotalExpense.transportINR / itinerary.totalDays)
  );
  const [budgetActivitiesTotal, setBudgetActivitiesTotal] = useState<number>(
    itinerary.estimatedTotalExpense.activitiesINR
  );
  const [budgetShoppingTotal, setBudgetShoppingTotal] = useState<number>(3500 * itinerary.travellers);
  const [budgetMiscTotal, setBudgetMiscTotal] = useState<number>(1500 * itinerary.travellers);

  // Live recalculated total
  const calculatedTotalBudget = useMemo(() => {
    const accTotal = budgetAccommodationPerDay * itinerary.totalDays;
    const foodTotal = budgetFoodPerDay * itinerary.totalDays;
    const transTotal = budgetTransportPerDay * itinerary.totalDays;
    return accTotal + foodTotal + transTotal + budgetActivitiesTotal + budgetShoppingTotal + budgetMiscTotal;
  }, [
    budgetAccommodationPerDay,
    budgetFoodPerDay,
    budgetTransportPerDay,
    budgetActivitiesTotal,
    budgetShoppingTotal,
    budgetMiscTotal,
    itinerary.totalDays
  ]);

  // Section 9: Embedded AI Travel Assistant state
  const [chatMessages, setChatMessages] = useState<{ id: string; sender: 'user' | 'assistant'; text: string }[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: `Namaste! 🙏 I am your dedicated AI Travel Guide for **${itinerary.destination}**! I have reviewed your ${itinerary.totalDays}-day plan departing from ${itinerary.startingLocation} for ${itinerary.travellers} travellers. What would you like to know or customize?`
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Section 10: Feedback states
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  // Filtered lists
  const filteredAttractions = useMemo(() => {
    if (attractionFilter === 'All') return destinationDetail.attractions;
    return destinationDetail.attractions.filter(a => a.category === attractionFilter);
  }, [destinationDetail.attractions, attractionFilter]);

  const filteredHotels = useMemo(() => {
    if (hotelFilter === 'All') return destinationDetail.hotels;
    return destinationDetail.hotels.filter(h => h.category === hotelFilter);
  }, [destinationDetail.hotels, hotelFilter]);

  const filteredDishes = useMemo(() => {
    if (foodFilter === 'All') return destinationDetail.dishes;
    if (foodFilter === 'Pure Veg') return destinationDetail.dishes.filter(d => d.isVegetarian);
    return destinationDetail.dishes.filter(d => d.category === foodFilter);
  }, [destinationDetail.dishes, foodFilter]);

  // Handle chat sending
  const handleSendChatMessage = async (queryText: string) => {
    const textToSend = queryText.trim();
    if (!textToSend || chatLoading) return;

    const userMsg = { id: `user-${Date.now()}`, sender: 'user' as const, text: textToSend };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Regarding my ${itinerary.totalDays}-day trip to ${itinerary.destination}: ${textToSend}`,
          history: chatMessages.slice(-4).map(m => ({ sender: m.sender, text: m.text }))
        }),
      });

      if (!response.ok) throw new Error('Chat failed');
      const data = await response.json();

      setChatMessages(prev => [
        ...prev,
        { id: `assistant-${Date.now()}`, sender: 'assistant' as const, text: data.reply }
      ]);
    } catch (e) {
      setChatMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant' as const,
          text: `Namaste! For ${itinerary.destination}, remember to start your mornings by 8:00 AM for heritage monuments, book IRCTC tickets in advance, and try the local cuisine at busy traditional eateries. Dial 1363 for 24x7 tourist assistance!`
        }
      ]);
    } finally {
      setChatLoading(false);
      setTimeout(() => chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  // Section 10 Actions
  const handlePrintPDF = () => {
    window.print();
  };

  const handleSaveTrip = () => {
    try {
      const existing = JSON.parse(localStorage.getItem('ghumakkad_saved_trips') || '[]');
      const newRecord = {
        id: `trip-${Date.now()}`,
        savedAt: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        destination: itinerary.destination,
        days: itinerary.totalDays,
        budget: calculatedTotalBudget,
        itineraryData: itinerary
      };
      existing.unshift(newRecord);
      localStorage.setItem('ghumakkad_saved_trips', JSON.stringify(existing.slice(0, 10)));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (e) {
      console.warn('Save error:', e);
    }
  };

  const handleShareTrip = async () => {
    const shareData = {
      title: `${itinerary.totalDays}-Day Travel Plan for ${itinerary.destination} | GHUMAKKAD`,
      text: `Check out my personalized ${itinerary.totalDays}-day travel itinerary for ${itinerary.destination} starting from ${itinerary.startingLocation} with an estimated budget of ₹${calculatedTotalBudget.toLocaleString('en-IN')}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShareFeedback('Shared successfully!');
        setTimeout(() => setShareFeedback(null), 2500);
      } catch (err) {
        // Fallback to clipboard
      }
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      setShareFeedback('Shareable link copied to clipboard!');
      setTimeout(() => setShareFeedback(null), 2500);
    }
  };

  const handleJumpToChat = () => {
    document.getElementById('ai-assistant-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen text-stone-800 pb-20">
      
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs px-4 sm:px-6 py-3 no-print">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-orange-600" />
            <span>Back to Main Website</span>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-stone-500 overflow-x-auto">
            <a href="#itinerary-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">1. Itinerary</a>
            <a href="#attractions-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">2. Attractions</a>
            <a href="#hotels-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">3. Stays</a>
            <a href="#food-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">4. Food</a>
            <a href="#transit-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">5. Transit</a>
            <a href="#budget-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">6. Budget</a>
            <a href="#culture-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">7. Culture</a>
            <a href="#weather-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">8. Weather</a>
            <a href="#ai-assistant-section" className="px-2.5 py-1 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-colors">9. AI Guide</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onModifyTrip}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors cursor-pointer"
            >
              Modify Plan
            </button>
            <button
              onClick={handlePrintPDF}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>
          </div>

        </div>
      </div>

      {/* ================= HERO & COVER HEADER ================= */}
      <section className="relative pt-6 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-300/60 h-80 sm:h-96 md:h-[440px]">
            <img
              src={destinationDetail.coverImage}
              alt={itinerary.destination}
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-stone-900/20" />

            {/* Badges & Content */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-white">
              
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-600/90 text-white backdrop-blur-md border border-orange-400/40 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>AI Generated Travel Plan</span>
                </div>

                {/* Live Weather Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-900/80 backdrop-blur-md text-amber-300 border border-white/20">
                  <CloudSun className="w-4 h-4 text-amber-400" />
                  <span>
                    {weatherLoading ? 'Updating weather...' : `${weatherData.temperatureC}°C • ${weatherData.conditionText}`}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                  Your Personalized Travel Plan
                </span>
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                  {itinerary.destination}
                </h1>
                <p className="text-stone-300 text-xs sm:text-base italic max-w-2xl mt-1.5">
                  "{destinationDetail.tagline}"
                </p>

                {/* Metadata Pills */}
                <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
                  
                  <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>From: {itinerary.startingLocation}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Starts: {tripRequest.travelDate}</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{itinerary.totalDays} Days / {itinerary.totalDays - 1} Nights</span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-400" />
                    <span>{itinerary.travellers} {itinerary.travellers === 1 ? 'Traveller' : 'Travellers'}</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/30 backdrop-blur-md border border-emerald-400/40 text-emerald-200 font-bold flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Est. Budget: ₹{calculatedTotalBudget.toLocaleString('en-IN')}</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 1: PERSONALIZED TRAVEL ITINERARY ================= */}
      <section id="itinerary-section" className="py-12 bg-white border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Section 1 • Day-Wise Schedule</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-stone-900">
                Your Day-Wise Travel Schedule
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Optimized flow for morning, afternoon, and evening sights with estimated travel times between attractions.
              </p>
            </div>

            {/* Day Selector Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
              {itinerary.dayWisePlan.map(d => (
                <button
                  key={d.day}
                  onClick={() => setActiveDayTab(d.day)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeDayTab === d.day
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md scale-105'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  Day {d.day}
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Full Card */}
          {(() => {
            const currentDay = itinerary.dayWisePlan.find(d => d.day === activeDayTab) || itinerary.dayWisePlan[0];
            if (!currentDay) return null;

            return (
              <div className="rounded-3xl bg-stone-50 border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-3">
                  <div>
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">
                      Day {currentDay.day} Itinerary
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                      {currentDay.title}
                    </h3>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-white border border-stone-200 text-xs font-bold text-stone-700 w-fit">
                    Estimated Day Expenses: ₹{currentDay.estimatedDayCost.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* 3 Activities Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  {/* Morning */}
                  <div className="p-5 rounded-2xl bg-white border border-amber-200/70 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          Morning (8:30 AM – 1:00 PM)
                        </span>
                        <span className="text-[10px] text-stone-400">Duration: ~3 hrs</span>
                      </div>
                      <h4 className="font-heading font-bold text-stone-900 text-base">{currentDay.morning.place}</h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{currentDay.morning.activity}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-100 text-[11px] text-amber-900 bg-amber-50/60 p-2.5 rounded-xl">
                      <strong>Insider Tip:</strong> {currentDay.morning.tips}
                      <span className="block text-[10px] text-stone-500 mt-1">🚗 Est. travel: ~15-20 mins by cab</span>
                    </div>
                  </div>

                  {/* Afternoon */}
                  <div className="p-5 rounded-2xl bg-white border border-orange-200/70 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-orange-800 uppercase tracking-wider mb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                          Afternoon (1:00 PM – 5:00 PM)
                        </span>
                        <span className="text-[10px] text-stone-400">Duration: ~3.5 hrs</span>
                      </div>
                      <h4 className="font-heading font-bold text-stone-900 text-base">{currentDay.afternoon.place}</h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{currentDay.afternoon.activity}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-orange-100 text-[11px] text-orange-900 bg-orange-50/60 p-2.5 rounded-xl">
                      <strong>Insider Tip:</strong> {currentDay.afternoon.tips}
                      <span className="block text-[10px] text-stone-500 mt-1">🛺 Est. travel: ~10-15 mins by auto</span>
                    </div>
                  </div>

                  {/* Evening */}
                  <div className="p-5 rounded-2xl bg-white border border-purple-200/70 shadow-2xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-purple-800 uppercase tracking-wider mb-2">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                          Evening & Night (5:00 PM – 9:30 PM)
                        </span>
                        <span className="text-[10px] text-stone-400">Duration: ~4 hrs</span>
                      </div>
                      <h4 className="font-heading font-bold text-stone-900 text-base">{currentDay.evening.place}</h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">{currentDay.evening.activity}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] text-purple-900 bg-purple-50/60 p-2.5 rounded-xl">
                      <strong>Insider Tip:</strong> {currentDay.evening.tips}
                      <span className="block text-[10px] text-stone-500 mt-1">🚶 Walking / short auto ride</span>
                    </div>
                  </div>

                </div>

                {/* Day Food Recommendations */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-orange-600" />
                    Day {currentDay.day} Food & Dining Picks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <strong className="text-stone-800">Lunch:</strong>
                      <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.lunch}</p>
                    </div>
                    <div>
                      <strong className="text-stone-800">Dinner:</strong>
                      <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.dinner}</p>
                    </div>
                    <div>
                      <strong className="text-stone-800">Must-Try Street Snack:</strong>
                      <p className="text-stone-600 mt-0.5">{currentDay.foodRecommendation.mustTryStreetFood}</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 2: EXPLORE TOURIST ATTRACTIONS ================= */}
      <section id="attractions-section" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Section 2 • Sightseeing Directory</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Explore Nearby Attractions
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Discover famous landmarks, historical monuments, hidden gems, and natural wonders around {itinerary.destination}.
            </p>
          </div>

          {/* Attraction Category Filters */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {['All', 'Famous', 'Historical', 'Hidden Gem', 'Nature', 'Adventure', 'Religious & Cultural'].map(cat => (
              <button
                key={cat}
                onClick={() => setAttractionFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  attractionFilter === cat
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map(attraction => (
              <div
                key={attraction.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-stone-100">
                    <img
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-900/80 text-amber-200 backdrop-blur-md">
                      {attraction.category}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-heading text-lg font-bold text-white tracking-tight leading-tight">
                        {attraction.name}
                      </h3>
                      <p className="text-[11px] text-stone-300 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                        <span className="truncate">{attraction.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {attraction.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] p-3 rounded-xl bg-stone-50 border border-stone-200/80">
                      <div>
                        <strong className="text-stone-500 block">Entry Fee:</strong>
                        <span className="font-semibold text-stone-800">{attraction.entryFee}</span>
                      </div>
                      <div>
                        <strong className="text-stone-500 block">Suggested Time:</strong>
                        <span className="font-semibold text-stone-800">{attraction.suggestedDuration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedAttractionModal(attraction)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-800 hover:text-white border border-emerald-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details & Visiting Tips</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: HOTELS & ACCOMMODATION ================= */}
      <section id="hotels-section" className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 mb-2">
              <Hotel className="w-3.5 h-3.5 text-orange-600" />
              <span>Section 3 • Verified Accommodations</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Find Your Perfect Stay
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Verified backpacker hostels, comfortable mid-range hotels, heritage havelis, and luxury palace resorts.
            </p>
          </div>

          {/* Hotel Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {['All', 'Budget', 'Mid-range', 'Luxury', 'Homestay', 'Heritage'].map(tier => (
              <button
                key={tier}
                onClick={() => setHotelFilter(tier)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  hotelFilter === tier
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHotels.map(hotel => (
              <div
                key={hotel.id}
                className="group rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-900/80 text-amber-200 backdrop-blur-md">
                      {hotel.category}
                    </div>

                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg text-xs font-bold bg-white text-stone-900 shadow-sm flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-base text-stone-900 leading-snug">{hotel.name}</h3>
                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-orange-600 shrink-0" />
                        <span className="truncate">{hotel.location}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {hotel.amenities.map((amenity, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between">
                      <span className="text-xs text-stone-500">Approx. Rate:</span>
                      <span className="text-lg font-extrabold text-stone-900 font-heading">
                        ₹{hotel.approxPricePerNightINR.toLocaleString('en-IN')}{' '}
                        <span className="text-[10px] font-normal text-stone-500">/ night</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={hotel.bookingSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Check Rates & Booking</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: LOCAL FOOD & CUISINE ================= */}
      <section id="food-section" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 mb-2">
              <Utensils className="w-3.5 h-3.5 text-orange-600" />
              <span>Section 4 • Gastronomy</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Taste the Local Flavours
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Iconic dishes, local street snacks, traditional sweets, and famous dining spots in {itinerary.destination}.
            </p>
          </div>

          {/* Food Filters */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {['All', 'Regional Specialty', 'Street Food', 'Traditional Sweet', 'Pure Veg'].map(cat => (
              <button
                key={cat}
                onClick={() => setFoodFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  foodFilter === cat
                    ? 'bg-amber-800 text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map(dish => (
              <div
                key={dish.id}
                className="rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-stone-800 shadow-sm flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${dish.isVegetarian ? 'bg-emerald-600' : 'bg-red-600'}`} />
                      <span>{dish.isVegetarian ? 'Pure Veg' : 'Non-Veg'}</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      {dish.hindiName && <span className="text-[11px] font-bold text-amber-300 block">{dish.hindiName}</span>}
                      <h3 className="font-heading font-bold text-base text-white">{dish.name}</h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <p className="text-xs text-stone-600 leading-relaxed">{dish.description}</p>
                    <div className="text-xs text-amber-950 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60">
                      <strong>Popular Spots:</strong> {dish.popularSpots}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-semibold">Typical Price:</span>
                  <span className="font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-lg">{dish.approxPriceINR}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: TRANSPORTATION GUIDE & MAP ================= */}
      <section id="transit-section" className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200 mb-2">
              <Plane className="w-3.5 h-3.5 text-blue-600" />
              <span>Section 5 • Getting Around</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Transportation Guide
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Airport gateways, railway terminals, local metro, bus routes, auto-rickshaw fares, and route map.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Transit Specs */}
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-700">
                  <Plane className="w-4 h-4" />
                  <span>Nearest Airport Gateway</span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm">{destinationDetail.transit.nearestAirport.name} ({destinationDetail.transit.nearestAirport.code})</h4>
                <p className="text-xs text-stone-600">{destinationDetail.transit.nearestAirport.distance}</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  <Train className="w-4 h-4" />
                  <span>Key Railway Stations</span>
                </div>
                <div className="space-y-1.5">
                  {destinationDetail.transit.railwayStations.map((r, i) => (
                    <div key={i} className="text-xs text-stone-700 flex justify-between">
                      <span className="font-semibold">{r.name} ({r.code})</span>
                      <span className="text-stone-500">{r.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Car className="w-4 h-4" />
                  <span>Local Commute & Typical Fares</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Metro / Bus</span>
                    <strong className="text-stone-900">{destinationDetail.transit.estimatedTransitCosts.metroOrBus}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Auto-Rickshaw</span>
                    <strong className="text-stone-900">{destinationDetail.transit.estimatedTransitCosts.autoRickshaw}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Full-Day Taxi</span>
                    <strong className="text-stone-900">{destinationDetail.transit.estimatedTransitCosts.fullDayTaxi}</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Destination & Route Map Display */}
            <div className="rounded-3xl bg-white border border-stone-200 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-heading font-bold text-stone-900 text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span>Destination & Attractions Map</span>
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Interactive View
                  </span>
                </div>

                {/* Map Mock/Interactive Embed with OpenStreetMap preview */}
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 h-64 bg-stone-100 flex items-center justify-center">
                  <iframe
                    title="Destination Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${destinationDetail.transit.mapCoordinates.lng - 0.1}%2C${destinationDetail.transit.mapCoordinates.lat - 0.1}%2C${destinationDetail.transit.mapCoordinates.lng + 0.1}%2C${destinationDetail.transit.mapCoordinates.lat + 0.1}&amp;layer=mapnik&amp;marker=${destinationDetail.transit.mapCoordinates.lat}%2C${destinationDetail.transit.mapCoordinates.lng}`}
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-stone-800 shadow-xs border border-stone-200">
                    📍 {destinationDetail.name} Center
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-stone-600">
                  <span className="font-semibold text-stone-800">Key Route Stops:</span>
                  {destinationDetail.attractions.slice(0, 4).map((a, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                      {a.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(destinationDetail.name + ' attractions')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  <span>Open Full Navigation in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 6: ESTIMATED TRAVEL BUDGET CALCULATOR ================= */}
      <section id="budget-section" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <Wallet className="w-3.5 h-3.5 text-emerald-700" />
              <span>Section 6 • Interactive Budget Calculator</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Interactive Travel Budget Calculator
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Customize daily allowances and recalculate your estimated trip budget in Indian Rupees (₹).
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-amber-200/90 shadow-xl p-6 sm:p-10 space-y-8">
            
            {/* Top Total Display */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 to-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  Total Estimated Budget ({itinerary.totalDays} Days • {itinerary.travellers} {itinerary.travellers === 1 ? 'Person' : 'People'})
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-1">
                  ₹{calculatedTotalBudget.toLocaleString('en-IN')}
                </div>
                <p className="text-stone-400 text-xs mt-1">
                  (~₹{Math.round(calculatedTotalBudget / (itinerary.totalDays * itinerary.travellers)).toLocaleString('en-IN')} per person per day)
                </p>
              </div>

              <div className="text-right sm:border-l sm:border-white/20 sm:pl-6 text-xs text-stone-300">
                <span className="text-emerald-400 font-bold block mb-1">Live Recalculation</span>
                Slide inputs below to tailor to your spending style.
              </div>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Accommodation */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Accommodation per day:</span>
                  <span className="font-extrabold text-orange-600">₹{budgetAccommodationPerDay.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="20000"
                  step="200"
                  value={budgetAccommodationPerDay}
                  onChange={(e) => setBudgetAccommodationPerDay(Number(e.target.value))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>Hostel (₹800)</span>
                  <span>Heritage/Mid (₹4,500)</span>
                  <span>Luxury (₹20,000)</span>
                </div>
              </div>

              {/* Food & Dining */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Food & Dining per day:</span>
                  <span className="font-extrabold text-emerald-600">₹{budgetFoodPerDay.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="6000"
                  step="100"
                  value={budgetFoodPerDay}
                  onChange={(e) => setBudgetFoodPerDay(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>Street Food (₹500)</span>
                  <span>Cafes & Thalis (₹2,000)</span>
                  <span>Fine Dining (₹6,000)</span>
                </div>
              </div>

              {/* Transportation */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Local Transit per day:</span>
                  <span className="font-extrabold text-amber-600">₹{budgetTransportPerDay.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="3500"
                  step="100"
                  value={budgetTransportPerDay}
                  onChange={(e) => setBudgetTransportPerDay(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>Metro/Autos (₹200)</span>
                  <span>App Cabs (₹1,200)</span>
                  <span>Chauffeur (₹3,500)</span>
                </div>
              </div>

              {/* Sightseeing & Entry Tickets */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Sightseeing & Entry total:</span>
                  <span className="font-extrabold text-purple-600">₹{budgetActivitiesTotal.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="250"
                  value={budgetActivitiesTotal}
                  onChange={(e) => setBudgetActivitiesTotal(Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>Standard (₹500)</span>
                  <span>Guides & Shows (₹4,000)</span>
                  <span>All Passes (₹10,000)</span>
                </div>
              </div>

              {/* Shopping Allowance */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Shopping & Souvenirs total:</span>
                  <span className="font-extrabold text-pink-600">₹{budgetShoppingTotal.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25000"
                  step="500"
                  value={budgetShoppingTotal}
                  onChange={(e) => setBudgetShoppingTotal(Number(e.target.value))}
                  className="w-full accent-pink-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>Minimal (₹0)</span>
                  <span>Handicrafts (₹5,000)</span>
                  <span>Jewelry & Silk (₹25,000)</span>
                </div>
              </div>

              {/* Miscellaneous */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-800">Emergency & Misc Buffer:</span>
                  <span className="font-extrabold text-stone-700">₹{budgetMiscTotal.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="8000"
                  step="250"
                  value={budgetMiscTotal}
                  onChange={(e) => setBudgetMiscTotal(Number(e.target.value))}
                  className="w-full accent-stone-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400">
                  <span>₹500 buffer</span>
                  <span>₹3,000</span>
                  <span>₹8,000</span>
                </div>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="p-3.5 rounded-xl bg-amber-50 text-stone-600 text-xs flex items-start gap-2 border border-amber-200">
              <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>
                <strong>Budget Estimate Note:</strong> These figures are calculated estimates based on typical Indian tourism costs. Actual prices fluctuate depending on booking season (peak winter vs off-season summer) and availability.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 7: CULTURE & LOCAL EXPERIENCES ================= */}
      <section id="culture-section" className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>Section 7 • Heritage & Immersion</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Experience the Local Culture
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Traditional clothing, master artisan crafts, polite phrases, and unique local experiences in {itinerary.destination}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Traditional Wear */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wider block">Traditional Attire</span>
              <h3 className="font-heading text-lg font-bold text-stone-900">{destinationDetail.culture.traditionalWear.name}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{destinationDetail.culture.traditionalWear.description}</p>
            </div>

            {/* Festivals */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider block">Signature Festivals</span>
              <div className="space-y-2">
                {destinationDetail.culture.festivals.map((f, i) => (
                  <div key={i} className="text-xs">
                    <strong className="text-stone-900 block">{f.name} ({f.month})</strong>
                    <span className="text-stone-500">{f.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Tips */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Helpful Local Phrases</span>
              <div className="space-y-2">
                {destinationDetail.culture.localLanguagePhrases.map((p, i) => (
                  <div key={i} className="p-2 rounded-xl bg-stone-50 text-xs border border-stone-200/80">
                    <div className="font-bold text-stone-900">{p.phrase}</div>
                    <div className="text-[11px] text-emerald-800">{p.translation}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous Handicrafts */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm md:col-span-2 space-y-3">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">Famous Master Handicrafts</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {destinationDetail.culture.famousHandicrafts.map((craft, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs space-y-1">
                    <strong className="text-stone-900 block font-bold">{craft.name}</strong>
                    <p className="text-stone-600">{craft.description}</p>
                    <span className="text-[10px] font-semibold text-amber-900 block pt-1">📍 Best at: {craft.bestMarket}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique Experiences */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">Unique Local Experiences</span>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-stone-600">
                {destinationDetail.culture.uniqueExperiences.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 8: WEATHER & BEST TIME TO VISIT ================= */}
      <section id="weather-section" className="py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 mb-2">
              <CloudSun className="w-3.5 h-3.5 text-amber-600" />
              <span>Section 8 • Climate & Seasons</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Weather & Best Time to Visit
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5">
              Live weather telemetry via Open-Meteo API and seasonal traveling recommendations for {itinerary.destination}.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-stone-200 shadow-md p-6 sm:p-8 space-y-6">
            
            {/* Live Weather Indicator Bar */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center text-2xl font-bold">
                  ☀️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-stone-900">
                      {weatherData.temperatureC !== null ? `${weatherData.temperatureC}°C` : 'N/A'}
                    </span>
                    <span className="text-xs font-bold text-stone-700">{weatherData.conditionText}</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {weatherData.isLive ? '🟢 Live Weather (Open-Meteo API)' : 'ℹ️ Verified Seasonal Climate Data'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-stone-600">
                {weatherData.humidity !== undefined && (
                  <div>
                    <span className="text-[10px] text-stone-400 block">Humidity</span>
                    <strong className="text-stone-800">{weatherData.humidity}%</strong>
                  </div>
                )}
                {weatherData.windSpeedKmH !== undefined && (
                  <div>
                    <span className="text-[10px] text-stone-400 block">Wind</span>
                    <strong className="text-stone-800">{weatherData.windSpeedKmH} km/h</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Best Months */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
              <strong className="text-stone-900 block font-bold">Best Months to Visit:</strong>
              <p className="text-stone-700">{weatherData.bestMonthsToVisit}</p>
            </div>

            {/* 3 Seasons Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 space-y-1">
                <strong className="text-orange-900 block font-bold">Summer Season</strong>
                <p className="text-stone-600">{weatherData.seasonalHighlights.summer}</p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 space-y-1">
                <strong className="text-blue-900 block font-bold">Monsoon Season</strong>
                <p className="text-stone-600">{weatherData.seasonalHighlights.monsoon}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 space-y-1">
                <strong className="text-emerald-900 block font-bold">Winter Season</strong>
                <p className="text-stone-600">{weatherData.seasonalHighlights.winter}</p>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 text-center">
              Rainfall Overview: {weatherData.rainfallInfo}
            </p>

          </div>

        </div>
      </section>

      {/* ================= SECTION 9: AI TRAVEL ASSISTANT ================= */}
      <section id="ai-assistant-section" className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200 mb-2">
              <Bot className="w-3.5 h-3.5 text-orange-600" />
              <span>Section 9 • Dedicated AI Guide</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900">
              Ask GHUMAKKAD – Your Personal Travel Guide
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Ask instant questions tailored to your trip in {itinerary.destination}.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-amber-200/90 overflow-hidden flex flex-col h-[520px]">
            
            {/* Header */}
            <div className="px-5 py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">Ghumakkad AI Guide • {itinerary.destination}</h4>
                  <span className="text-[10px] text-amber-100">Powered by Gemini 3.8 Flash</span>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 text-white">
                Live Assistant
              </span>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-3 bg-stone-50/50">
              {chatMessages.map(msg => {
                const isAssistant = msg.sender === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 max-w-[88%] ${isAssistant ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs text-white ${
                      isAssistant ? 'bg-orange-600' : 'bg-emerald-800'
                    }`}>
                      {isAssistant ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAssistant
                        ? 'bg-white text-stone-800 border border-stone-200 shadow-2xs rounded-tl-none whitespace-pre-line'
                        : 'bg-orange-600 text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {chatLoading && (
                <div className="flex gap-2.5 max-w-[80%] mr-auto items-center">
                  <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white border border-stone-200 text-xs text-stone-500">
                    Ghumakkad AI is searching destination insights...
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Suggested Question Chips */}
            <div className="p-2.5 bg-stone-100 border-t border-stone-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider shrink-0">Suggested:</span>
              {[
                'What should I visit next?',
                'Suggest affordable hotels',
                'Where can I find the best local food?',
                'What are the hidden gems here?',
                'How can I reduce my travel expenses?',
                'Tell me the history of this place'
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendChatMessage(q)}
                  className="px-2.5 py-1 text-xs rounded-full bg-white text-stone-700 hover:bg-orange-50 hover:text-orange-800 border border-stone-200 shadow-2xs whitespace-nowrap cursor-pointer shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChatMessage(chatInput);
              }}
              className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Ask anything about ${itinerary.destination}...`}
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || chatLoading}
                className="p-2.5 rounded-xl bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 transition-colors cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>
      </section>

      {/* ================= SECTION 10: FINAL TRIP ACTIONS ================= */}
      <section className="py-16 bg-[#FFFDF9] border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 bg-orange-100 px-3.5 py-1.5 rounded-full border border-orange-200 shadow-2xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Section 10 • Ready to Travel</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Your Trip, Your Way!
          </h2>

          <p className="text-stone-600 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Download your itinerary for offline travel, modify dates or budget, bookmark it to your device, or share your customized plan with fellow travellers.
          </p>

          {/* Toast Feedbacks */}
          {savedSuccess && (
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold max-w-sm mx-auto flex items-center justify-center gap-1.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Trip successfully saved to your browser bookmarks!</span>
            </div>
          )}

          {shareFeedback && (
            <div className="p-3 rounded-xl bg-blue-100 text-blue-900 text-xs font-bold max-w-sm mx-auto flex items-center justify-center gap-1.5 animate-in fade-in">
              <Share2 className="w-4 h-4 text-blue-600" />
              <span>{shareFeedback}</span>
            </div>
          )}

          {/* Action Buttons Grid */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            
            {/* 1. Download Itinerary PDF */}
            <button
              onClick={handlePrintPDF}
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-700 shadow-lg shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-200" />
              <span>Download Itinerary PDF</span>
            </button>

            {/* 2. Modify Itinerary */}
            <button
              onClick={onModifyTrip}
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-orange-600" />
              <span>Modify Itinerary</span>
            </button>

            {/* 3. Save My Trip */}
            <button
              onClick={handleSaveTrip}
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Save My Trip</span>
            </button>

            {/* 4. Share My Trip */}
            <button
              onClick={handleShareTrip}
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-300 shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Share2 className="w-4 h-4 text-blue-600" />
              <span>Share My Trip</span>
            </button>

            {/* 5. Chat with AI Guide */}
            <button
              onClick={handleJumpToChat}
              className="px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-purple-900 bg-purple-50 hover:bg-purple-100 border border-purple-300 shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Bot className="w-4 h-4 text-purple-600" />
              <span>Chat with AI Guide</span>
            </button>

          </div>

        </div>
      </section>

      {/* Attraction Detail Modal */}
      {selectedAttractionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200 relative my-auto animate-in fade-in duration-200">
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={selectedAttractionModal.imageUrl}
                alt={selectedAttractionModal.name}
                className="w-full h-full object-cover object-center"
              />
              <button
                onClick={() => setSelectedAttractionModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-all cursor-pointer"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-600 text-white uppercase tracking-wider">
                  {selectedAttractionModal.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">
                  {selectedAttractionModal.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-stone-800">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {selectedAttractionModal.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                <div>
                  <strong className="text-stone-500 block">Entry Fee:</strong>
                  <span className="font-bold text-stone-800">{selectedAttractionModal.entryFee}</span>
                </div>
                <div>
                  <strong className="text-stone-500 block">Opening Timings:</strong>
                  <span className="font-bold text-stone-800">{selectedAttractionModal.openingHours}</span>
                </div>
                <div>
                  <strong className="text-stone-500 block">Suggested Duration:</strong>
                  <span className="font-bold text-stone-800">{selectedAttractionModal.suggestedDuration}</span>
                </div>
                <div>
                  <strong className="text-stone-500 block">Travel Time from Center:</strong>
                  <span className="font-bold text-stone-800">{selectedAttractionModal.travelTimeFromCenter}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedAttractionModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
