/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD – Your Intelligent Travel Companion
 * Main Application Component
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationExplorer } from './components/DestinationExplorer';
import { DestinationModal } from './components/DestinationModal';
import { AiChatbot } from './components/AiChatbot';
import { TripPlanner } from './components/TripPlanner';
import { TravelDashboard } from './components/TravelDashboard';
import { CultureHeritage } from './components/CultureHeritage';
import { FoodCuisine } from './components/FoodCuisine';
import { TravelTips } from './components/TravelTips';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Destination, TripItineraryResponse, TripPlanRequest } from './types/travel';
import { Sparkles, MessageCircle, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [externalSearchQuery, setExternalSearchQuery] = useState('');
  const [prefilledPlannerDestination, setPrefilledPlannerDestination] = useState('');
  const [chatbotPrompt, setChatbotPrompt] = useState('');

  // Itinerary Dashboard states
  const [currentItinerary, setCurrentItinerary] = useState<TripItineraryResponse | null>(null);
  const [currentTripRequest, setCurrentTripRequest] = useState<TripPlanRequest | null>(null);
  const [isDashboardActive, setIsDashboardActive] = useState<boolean>(false);

  // Smooth scroll to a given section ID
  const handleNavigate = (sectionId: string) => {
    setIsDashboardActive(false);
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Scroll directly to AI Guide
  const handleOpenChat = () => {
    if (isDashboardActive) {
      document.getElementById('ai-assistant-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('ai-assistant');
    }
  };

  // Search triggered from Hero
  const handleHeroSearch = (term: string) => {
    setExternalSearchQuery(term);
    handleNavigate('explore');
  };

  // When user clicks "Plan Trip Here" in Destination Modal
  const handlePlanTripForDestination = (destName: string) => {
    setPrefilledPlannerDestination(destName);
    handleNavigate('plan-trip');
  };

  // When user clicks "Ask AI About This Place" in Destination Modal
  const handleAskAiAboutDestination = (destName: string) => {
    setChatbotPrompt(`Namaste! Can you give me an insider travel guide for visiting ${destName}? Include best places to stay, local delicacies, and top tips.`);
    handleNavigate('ai-assistant');
  };

  // When GENERATE ITINERARY button is clicked and API returns itinerary
  const handleItineraryGenerated = (itinerary: TripItineraryResponse, request: TripPlanRequest) => {
    setCurrentItinerary(itinerary);
    setCurrentTripRequest(request);
    setIsDashboardActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModifyTrip = () => {
    setIsDashboardActive(false);
    handleNavigate('plan-trip');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800 flex flex-col font-sans selection:bg-amber-500/25 selection:text-amber-950">
      
      {/* Top Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenChat={handleOpenChat}
        hasActiveItinerary={Boolean(currentItinerary)}
        onOpenDashboard={() => setIsDashboardActive(true)}
      />

      {/* Main Page: Either the 10-Section Travel Dashboard OR Homepage Experience */}
      {isDashboardActive && currentItinerary && currentTripRequest ? (
        <TravelDashboard
          itinerary={currentItinerary}
          tripRequest={currentTripRequest}
          onBackToHome={() => setIsDashboardActive(false)}
          onModifyTrip={handleModifyTrip}
        />
      ) : (
        <main className="flex-1">
          
          {/* Active Itinerary Notification Banner if one was already generated */}
          {currentItinerary && (
            <div className="bg-gradient-to-r from-emerald-900 to-stone-900 text-white px-4 py-2.5 text-xs text-center border-b border-emerald-500/30 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>
                Personalized plan ready for <strong>{currentItinerary.destination}</strong> ({currentItinerary.totalDays} Days)
              </span>
              <button
                onClick={() => setIsDashboardActive(true)}
                className="underline font-bold text-amber-300 hover:text-white ml-2 cursor-pointer"
              >
                Open Travel Dashboard →
              </button>
            </div>
          )}

          {/* 1. Hero Section */}
          <Hero
            onSearchSubmit={handleHeroSearch}
            onOpenChat={handleOpenChat}
            onExploreClick={() => handleNavigate('explore')}
          />

          {/* 2. Explore India Destinations */}
          <DestinationExplorer
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            externalSearchQuery={externalSearchQuery}
          />

          {/* 3. AI Travel Assistant (Chatbot) */}
          <AiChatbot
            initialPrompt={chatbotPrompt}
            onClearInitialPrompt={() => setChatbotPrompt('')}
          />

          {/* 4. Plan My Trip (Interactive Day-wise Itinerary Planner) */}
          <TripPlanner
            prefilledDestination={prefilledPlannerDestination}
            onClearPrefilledDestination={() => setPrefilledPlannerDestination('')}
            onItineraryGenerated={handleItineraryGenerated}
          />

          {/* 5. Culture & Heritage */}
          <CultureHeritage />

          {/* 6. Food & Cuisine */}
          <FoodCuisine />

          {/* 7. Verified Travel Advisory & Guidelines */}
          <TravelTips />

          {/* 8. About Us & Project Presentation */}
          <AboutSection />

        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenChat={handleOpenChat}
      />

      {/* Detailed Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTripForDestination={handlePlanTripForDestination}
        onAskAiAboutDestination={handleAskAiAboutDestination}
      />

      {/* Floating Quick Action Button: Summon AI Travel Guide */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenChat}
          className="relative inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 shadow-2xl shadow-orange-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group border border-amber-300/40"
          aria-label="Ask AI Travel Guide"
        >
          <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Ask AI Guide</span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      </div>

    </div>
  );
}
