/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Type Definitions for Indian Tourism Guide
 */

export type Region = 'North' | 'South' | 'East' | 'West' | 'Northeast';

export interface Destination {
  id: string;
  name: string;
  state: string;
  region: Region;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  famousAttractions: string[];
  bestTimeToVisit: string;
  estimatedBudget: string; // e.g. "₹8,000 – ₹14,000"
  budgetCategory: 'Budget' | 'Moderate' | 'Luxury';
  idealDurationDays: number;
  tags: string[]; // e.g. "Heritage", "Spiritual", "Nature", "Beaches", "Adventure"
  howToReach: {
    byAir: string;
    byTrain: string;
    byRoad: string;
  };
  localFoodMustTry: string[];
  culturalEtiquetteTips: string[];
  weatherHighlights: {
    summer: string;
    monsoon: string;
    winter: string;
  };
  sampleTwoDayPlan: {
    day1: string;
    day2: string;
  };
}

export interface Dish {
  id: string;
  name: string;
  hindiName?: string;
  region: Region;
  state: string;
  imageUrl: string;
  description: string;
  culturalSignificance: string;
  isVegetarian: boolean;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy';
  bestSpotsToTaste: string;
  mealType: 'Breakfast' | 'Main Course' | 'Street Food' | 'Dessert' | 'Beverage';
}

export interface Festival {
  id: string;
  name: string;
  hindiName?: string;
  month: string;
  statesCelebrated: string;
  description: string;
  significance: string;
  keyRitual: string;
  imageUrl: string;
}

export interface CulturalItem {
  id: string;
  category: 'dance' | 'clothing' | 'music' | 'monument' | 'handicraft';
  title: string;
  originState: string;
  description: string;
  culturalSignificance: string;
  imageUrl: string;
}

export interface TripPlanRequest {
  startingLocation: string;
  destination: string;
  travelDate: string;
  numberOfTravellers: number;
  numberOfDays: number;
  budgetCategory: 'Budget' | 'Moderate' | 'Luxury';
  preferences: string[];
  pace: 'Relaxed' | 'Balanced' | 'Fast-paced';
}

export interface DayItinerary {
  day: number;
  title: string;
  morning: {
    activity: string;
    place: string;
    tips: string;
  };
  afternoon: {
    activity: string;
    place: string;
    tips: string;
  };
  evening: {
    activity: string;
    place: string;
    tips: string;
  };
  foodRecommendation: {
    lunch: string;
    dinner: string;
    mustTryStreetFood: string;
  };
  estimatedDayCost: number;
}

export interface TripItineraryResponse {
  destination: string;
  startingLocation: string;
  totalDays: number;
  travellers: number;
  budgetTier: string;
  estimatedTotalExpense: {
    totalINR: number;
    accommodationINR: number;
    foodINR: number;
    transportINR: number;
    activitiesINR: number;
  };
  transportationAdvice: {
    howToReach: string;
    localTransitTips: string;
    recommendedTravelPass?: string;
  };
  culturalSafetyNotes: string[];
  dayWisePlan: DayItinerary[];
  packingEssentials: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  isVerifiedFact?: boolean;
}

export interface Attraction {
  id: string;
  name: string;
  category: 'Famous' | 'Historical' | 'Hidden Gem' | 'Nature' | 'Adventure' | 'Religious & Cultural';
  description: string;
  location: string;
  entryFee: string; // e.g. "₹50 (Indians), ₹500 (Foreigners)"
  openingHours: string; // e.g. "9:00 AM – 5:30 PM (Closed on Mondays)"
  imageUrl: string;
  suggestedDuration: string; // e.g. "2 to 3 hours"
  travelTimeFromCenter: string; // e.g. "20 mins by cab"
  lat?: number;
  lng?: number;
}

export interface HotelListing {
  id: string;
  name: string;
  category: 'Budget' | 'Mid-range' | 'Luxury' | 'Homestay' | 'Heritage';
  approxPricePerNightINR: number;
  rating: number; // e.g. 4.6
  reviewsCount?: number;
  location: string;
  imageUrl: string;
  amenities: string[];
  bookingSearchUrl: string;
}

export interface LocalDishItem {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  category: 'Regional Specialty' | 'Street Food' | 'Traditional Sweet' | 'Beverage';
  approxPriceINR: string; // e.g. "₹80 – ₹150"
  isVegetarian: boolean;
  imageUrl: string;
  popularSpots: string;
}

export interface DestinationTransitDetails {
  howToReach: string;
  nearestAirport: {
    name: string;
    code: string;
    distance: string;
  };
  railwayStations: {
    name: string;
    code: string;
    distance: string;
  }[];
  busTerminals: string[];
  localTransit: string[];
  taxiOptions: string[];
  estimatedTransitCosts: {
    metroOrBus: string;
    autoRickshaw: string;
    fullDayTaxi: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

export interface WeatherInfo {
  temperatureC: number | null;
  conditionText: string;
  humidity?: number;
  windSpeedKmH?: number;
  isLive: boolean;
  weatherCode?: number;
  bestMonthsToVisit: string;
  seasonalHighlights: {
    summer: string;
    monsoon: string;
    winter: string;
  };
  rainfallInfo: string;
}

