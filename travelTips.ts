/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Verified Official Travel Advisory & Guidelines Dataset
 */

export interface EmergencyContact {
  service: string;
  number: string;
  description: string;
  isTollFree: boolean;
  category: 'primary' | 'tourist' | 'safety';
}

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    service: 'National Emergency Number',
    number: '112',
    description: 'All-in-one unified emergency response service across India (Police, Fire, Ambulance). Accessible 24/7 from any phone without SIM balance.',
    isTollFree: true,
    category: 'primary'
  },
  {
    service: 'Incredible India Tourist Helpline',
    number: '1363 / 1800-11-1363',
    description: 'Ministry of Tourism 24x7 multi-lingual helpline offering guidance in 12 languages (including English, Hindi, French, German, Spanish, Japanese, Russian, Italian).',
    isTollFree: true,
    category: 'tourist'
  },
  {
    service: 'Indian Railways Helpline (Rail Madad)',
    number: '139',
    description: 'Official single integrated helpline for all passenger queries, train status, medical assistance on trains, and security emergencies.',
    isTollFree: true,
    category: 'tourist'
  },
  {
    service: 'Police Assistance',
    number: '100',
    description: 'Direct police control room helpline across all states and union territories.',
    isTollFree: true,
    category: 'primary'
  },
  {
    service: 'Medical Ambulance',
    number: '108 / 102',
    description: 'National emergency ambulance response service and maternity emergency dispatch.',
    isTollFree: true,
    category: 'primary'
  },
  {
    service: 'Women Helpline',
    number: '1091 / 181',
    description: '24-hour dedicated helpline for women safety, distress assistance, and immediate police intervention.',
    isTollFree: true,
    category: 'safety'
  }
];

export const TRAVEL_ADVISORIES = {
  railwayTravel: {
    title: 'Indian Railways (IRCTC) Travel Guide',
    verifiedTips: [
      'Book official tickets via IRCTC website (irctc.co.in) or IRCTC Rail Connect App. Create your account with passport/mobile verification.',
      'Classes of Travel: 1A (First AC - private coupe), 2A (Two-tier AC - spacious curtains), 3A (Three-tier AC - most popular value option), CC (AC Chair Car for day trains like Vande Bharat & Shatabdi), SL (Sleeper - open window budget experience).',
      'Foreign Tourist Quota (FTQ): International passport holders can reserve designated quota berths up to 365 days in advance at major railway reservation centres (Delhi, Mumbai, Kolkata, Chennai).',
      'Tatkal Booking: Opens at 10:00 AM for AC classes and 11:00 AM for Non-AC classes one day prior to journey date from source station.',
      'Always carry an original government-issued photo ID (Passport / Aadhaar / Driving License) during your journey.'
    ]
  },
  digitalPayments: {
    title: 'Currency & UPI Digital Payments',
    verifiedTips: [
      'Currency: Indian Rupee (₹ / INR). Coins: ₹1, ₹2, ₹5, ₹10, ₹20. Banknotes: ₹10, ₹20, ₹50, ₹100, ₹200, ₹500.',
      'UPI (Unified Payments Interface): India is the world leader in real-time digital payments. Even small street chai stalls and auto-rickshaws accept QR code payments.',
      'UPI One World for Foreign Tourists: International travelers arriving at major airports (DEL, BOM, BLR) can get a prepaid UPI wallet linked to their passport to scan and pay everywhere without carrying cash.',
      'Cash Advice: Keep ₹1,000 to ₹2,000 in small denominations (₹50, ₹100 notes) when visiting remote Himalayan hamlets, wildlife parks, or rural craft villages where network connectivity may be patchy.'
    ]
  },
  localTransit: {
    title: 'Local Transport & Navigation',
    verifiedTips: [
      'Metro Systems: World-class, air-conditioned metro networks exist in Delhi NCR, Bengaluru (Namma Metro), Mumbai, Kolkata, Chennai, Kochi, Hyderabad, and Jaipur. Use contactless smart cards or WhatsApp QR tickets.',
      'Ride-Hailing Apps: Download Uber, Ola, and Rapido (bike taxis and autos) for transparent, upfront metered pricing without street haggling.',
      'Auto-Rickshaws: If not booking through an app, politely request the driver to run by the meter or agree firmly on the total fare before stepping in.'
    ]
  },
  weatherSeasons: {
    title: 'Weather & Best Traveling Seasons',
    verifiedTips: [
      'Winter (October to March): Peak tourist season across most of India (Golden Triangle, Rajasthan, Goa, South India, and heritage sites) with sunny days and cool nights.',
      'Summer (April to June): Peak time for Himalayan hill stations (Shimla, Manali, Kashmir, Ladakh, Sikkim, Darjeeling, Uttarakhand) to escape plains heat.',
      'Monsoon (July to September): Magical season for Kerala (Ayurveda rejuvenation), Meghalaya waterfalls, Goa green countryside, and Valley of Flowers trekking.'
    ]
  },
  responsibleTourism: {
    title: 'Responsible & Sustainable Tourism',
    verifiedTips: [
      'Zero Single-Use Plastics: Carry a reusable insulated water flask. Many hill states (Sikkim, Himachal Pradesh, Nilgiris) impose strict fines for plastic littering.',
      'Respect Cultural & Religious Sanctity: Remove shoes before stepping onto temple and mosque carpets. Cover shoulders and knees. Walk clockwise (pradakshina) around stupas and shrines.',
      'Support Local Artisans: Buy handicrafts directly from weaver cooperatives, artisan clusters, and government emporiums (Central Cottage Industries, Khadi Gramodyog).',
      'Wildlife Ethics: Never feed or tease wild animals during jeep safaris in Kaziranga, Ranthambore, or Jim Corbett. Maintain complete silence in forest zones.'
    ]
  }
};
