/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Destination Detail Modal Component
 */

import React from 'react';
import { Destination } from '../types/travel';
import { X, MapPin, Calendar, Wallet, Plane, Train, Car, Utensils, AlertTriangle, Sparkles, Compass, CheckCircle2 } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripForDestination: (destName: string) => void;
  onAskAiAboutDestination: (destName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTripForDestination,
  onAskAiAboutDestination,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-3xl shadow-2xl border border-amber-200 overflow-hidden max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header with Image & Badge */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-md transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Region Tag */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-600/90 text-white backdrop-blur-md border border-orange-400/40 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>{destination.region} India</span>
          </div>

          {/* Heading overlay */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>{destination.state}</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mt-1">
              {destination.name}
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm italic mt-1">
              "{destination.tagline}"
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-stone-800">
          
          {/* Overview text */}
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            {destination.description}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-orange-100 text-orange-700 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Best Time to Visit</p>
                <p className="text-sm font-semibold text-stone-800 mt-0.5">{destination.bestTimeToVisit}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Estimated Budget</p>
                <p className="text-sm font-semibold text-stone-800 mt-0.5">{destination.estimatedBudget}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider">Ideal Duration</p>
                <p className="text-sm font-semibold text-stone-800 mt-0.5">{destination.idealDurationDays} Days / {destination.idealDurationDays - 1} Nights</p>
              </div>
            </div>
          </div>

          {/* Famous Attractions */}
          <div>
            <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              Famous Attractions & Key Highlights
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {destination.famousAttractions.map((attraction, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 shadow-sm text-stone-800 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {attraction}
                </span>
              ))}
            </div>
          </div>

          {/* How to Reach */}
          <div>
            <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              How to Reach
            </h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <Plane className="w-4 h-4" />
                  <span>By Air</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{destination.howToReach.byAir}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <Train className="w-4 h-4" />
                  <span>By Train</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{destination.howToReach.byTrain}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <Car className="w-4 h-4" />
                  <span>By Road</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{destination.howToReach.byRoad}</p>
              </div>
            </div>
          </div>

          {/* Local Food Must Try */}
          <div>
            <h3 className="font-heading text-lg font-bold text-stone-900 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-600" />
              Local Delicacies to Taste
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {destination.localFoodMustTry.map((food, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 border border-orange-200 text-orange-900"
                >
                  🍲 {food}
                </span>
              ))}
            </div>
          </div>

          {/* Sample 2-Day Plan */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <h3 className="font-heading text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              Recommended 2-Day Glance
            </h3>
            <div className="space-y-2 text-xs text-stone-700 leading-relaxed">
              <p><strong className="text-orange-700">Day 1:</strong> {destination.sampleTwoDayPlan.day1}</p>
              <p><strong className="text-orange-700">Day 2:</strong> {destination.sampleTwoDayPlan.day2}</p>
            </div>
          </div>

          {/* Cultural Etiquette & Safety Advice */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-stone-700">
            <div className="flex items-center gap-1.5 text-amber-800 font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Cultural Etiquette & Local Wisdom</span>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {destination.culturalEtiquetteTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            Need a custom schedule? Let our AI planner map it out day-by-day.
          </div>
          
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onAskAiAboutDestination(destination.name);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Ask AI About {destination.name}</span>
            </button>

            <button
              onClick={() => {
                onPlanTripForDestination(destination.name);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-md cursor-pointer"
            >
              <span>Plan Trip Here</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
