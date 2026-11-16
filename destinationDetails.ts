/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Comprehensive Destination Details Directory
 * Provides rich attractions, authentic hotels, food, transit, culture & coordinates
 */

import { Attraction, HotelListing, LocalDishItem, DestinationTransitDetails, WeatherInfo } from '../types/travel';

export interface CompleteDestinationDetail {
  id: string;
  name: string;
  state: string;
  coverImage: string;
  tagline: string;
  overview: string;
  attractions: Attraction[];
  hotels: HotelListing[];
  dishes: LocalDishItem[];
  transit: DestinationTransitDetails;
  culture: {
    festivals: { name: string; month: string; description: string }[];
    traditionalWear: { name: string; description: string };
    famousHandicrafts: { name: string; description: string; bestMarket: string }[];
    localLanguagePhrases: { phrase: string; translation: string; meaning: string }[];
    uniqueExperiences: string[];
    famousMarkets: string[];
  };
  weather: WeatherInfo & {
    lat: number;
    lng: number;
  };
}

export const DESTINATION_DETAILS_MAP: Record<string, CompleteDestinationDetail> = {
  // ================= JAIPUR =================
  'jaipur': {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    coverImage: 'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=1600&q=85',
    tagline: 'The Pink City of Royal Fortresses & Timeless Heritage',
    overview: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a UNESCO World Heritage city famed for its pink terracotta facades, majestic hill forts, astronomical marvels, and opulent Rajput hospitality.',
    attractions: [
      {
        id: 'amber-fort',
        name: 'Amber Palace & Fort',
        category: 'Historical',
        description: 'Colossal 16th-century red sandstone and marble fortress towering over Maota Lake, famous for the glittering Sheesh Mahal (Hall of Mirrors).',
        location: 'Devisinghpura, Amer, Jaipur',
        entryFee: '₹100 (Indians), ₹550 (Foreigners)',
        openingHours: '8:00 AM – 5:30 PM, 6:30 PM – 9:15 PM (Night Viewing)',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2.5 to 3 hours',
        travelTimeFromCenter: '25 mins by taxi (11 km)'
      },
      {
        id: 'hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        category: 'Famous',
        description: 'Five-story pink sandstone pyramid with 953 intricately carved honeycomb jharokha windows built for royal women to witness street processions.',
        location: 'Badi Choupad, J.D.A. Market, Pink City',
        entryFee: '₹50 (Indians), ₹200 (Foreigners)',
        openingHours: '9:00 AM – 5:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '1 to 1.5 hours',
        travelTimeFromCenter: 'Located in city center'
      },
      {
        id: 'city-palace',
        name: 'City Palace Complex & Chandra Mahal',
        category: 'Historical',
        description: 'Magnificent residence of the Jaipur Royal family featuring courtyards, Peacock Gate, royal costumes museum, and giant sterling silver urns.',
        location: 'Tulsi Marg, Gangori Bazaar, J.D.A. Market',
        entryFee: '₹300 (Indians), ₹1,000 (Foreigners)',
        openingHours: '9:30 AM – 5:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: '5 mins from Hawa Mahal'
      },
      {
        id: 'panna-meena-kund',
        name: 'Panna Meena ka Kund',
        category: 'Hidden Gem',
        description: 'Intricate 16th-century geometric stepwell with interlocking criss-cross stairs, historically used as a community water source and gathering site.',
        location: 'Near Anokhi Museum, Amer',
        entryFee: 'Free entry',
        openingHours: 'Sunrise to Sunset',
        imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '45 mins',
        travelTimeFromCenter: '30 mins (near Amber Fort)'
      },
      {
        id: 'nahargarh-sunset',
        name: 'Nahargarh Fort & Padao Sunset',
        category: 'Adventure',
        description: 'Perched on the edge of the Aravalli hills, offering sweeping 360-degree sunset panoramas of the entire illuminated Pink City below.',
        location: 'Krishna Nagar, Brahampuri, Jaipur',
        entryFee: '₹50 (Indians), ₹200 (Foreigners)',
        openingHours: '10:00 AM – 10:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: '35 mins scenic uphill drive'
      },
      {
        id: 'govind-dev-ji',
        name: 'Govind Dev Ji Temple',
        category: 'Religious & Cultural',
        description: 'Sacred Krishna temple located inside City Palace grounds, renowned for its soulful Mangala and Sandhya Aarti attended by thousands.',
        location: 'Jalebi Chowk, Jai Niwas Garden',
        entryFee: 'Free entry',
        openingHours: '4:30 AM – 12:00 PM, 5:45 PM – 9:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '1 hour',
        travelTimeFromCenter: 'City Center'
      }
    ],
    hotels: [
      {
        id: 'zostel-jaipur',
        name: 'Zostel Jaipur (Pink City)',
        category: 'Budget',
        approxPricePerNightINR: 1200,
        rating: 4.6,
        reviewsCount: 1420,
        location: 'Hawa Mahal Road, Subhash Chowk',
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        amenities: ['Free High-Speed Wi-Fi', 'Rooftop Cafe with Fort Views', 'AC Dorms & Privates', 'Walking Tours'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/jaipur?q=Zostel+Jaipur'
      },
      {
        id: 'umaid-bhawan-heritage',
        name: 'Umaid Bhawan - A Heritage Style Hotel',
        category: 'Heritage',
        approxPricePerNightINR: 4200,
        rating: 4.7,
        reviewsCount: 2100,
        location: 'Bani Park, Jaipur',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        amenities: ['Carved Jharokha Balconies', 'Swimming Pool', 'Rooftop Puppet Shows', 'Buffet Breakfast'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/jaipur?q=Umaid+Bhawan+Hotel+Jaipur'
      },
      {
        id: 'shahpura-house',
        name: 'Shahpura House Heritage Hotel',
        category: 'Mid-range',
        approxPricePerNightINR: 6500,
        rating: 4.8,
        reviewsCount: 1850,
        location: 'Devi Marg, Bani Park, Jaipur',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        amenities: ['Frescoed Ceilings', 'Ayurvedic Spa', 'Traditional Mewar Dining', 'Lush Lawns'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/jaipur?q=Shahpura+House+Jaipur'
      },
      {
        id: 'rambagh-palace',
        name: 'Taj Rambagh Palace (Former Maharaja Residence)',
        category: 'Luxury',
        approxPricePerNightINR: 38000,
        rating: 4.9,
        reviewsCount: 3200,
        location: 'Bhawani Singh Road, Jaipur',
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        amenities: ['47 Acres of Mughal Gardens', 'Peacock sightings', 'Royal Butler Service', 'Vintage Car Chauffeur'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/jaipur?q=Rambagh+Palace+Jaipur'
      },
      {
        id: 'dharohar-homestay',
        name: 'Kalyan Heritage Traditional Homestay',
        category: 'Homestay',
        approxPricePerNightINR: 2400,
        rating: 4.5,
        reviewsCount: 680,
        location: 'Hathroi Fort, Ajmer Road',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        amenities: ['Home-cooked Rajasthani Thali', 'Cooking Classes', 'Family Run Warmth', 'Travel Assistance'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/jaipur?q=Kalyan+Heritage+Homestay+Jaipur'
      }
    ],
    dishes: [
      {
        id: 'dal-baati-jaipur',
        name: 'Authentic Dal Baati Churma',
        hindiName: 'दाल बाती चूरमा',
        category: 'Regional Specialty',
        description: 'Oven-baked whole wheat dough balls crushed with pure desi ghee, paired with spicy 5-lentil panchmel dal, fiery garlic chutney, and sweet almond-crusted churma.',
        approxPriceINR: '₹280 – ₹450 / Thali',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Chokhi Dhani, Rawat Mishthan Bhandar, Laxmi Mishthan Bhandar (LMB)'
      },
      {
        id: 'pyaz-kachori',
        name: 'Crispy Pyaaz (Onion) Kachori',
        hindiName: 'प्याज़ कचौरी',
        category: 'Street Food',
        description: 'Flaky golden deep-fried pastry stuffed with spiced caramelized onions, crushed coriander, fennel, and garam masala, served with tangy tamarind chutney.',
        approxPriceINR: '₹40 – ₹60 per piece',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Rawat Mishthan Bhandar (Station Road), Samrat Restaurant (Chaura Rasta)'
      },
      {
        id: 'ghewar',
        name: 'Jaipuri Malai Ghewar',
        hindiName: 'मलाई घेवर',
        category: 'Traditional Sweet',
        description: 'Disc-shaped honeycomb sweet soaked in saffron sugar syrup, blanketed with thick cardamom rabri (condensed clotted cream), silver leaf, and pistachios.',
        approxPriceINR: '₹120 – ₹250 per piece',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Laxmi Mishthan Bhandar (Johari Bazaar), Sambhar Fini Sweets'
      },
      {
        id: 'laal-maas',
        name: 'Royal Rajputi Laal Maas',
        hindiName: 'लाल मांस',
        category: 'Regional Specialty',
        description: 'Tender mutton slow-cooked in a fiery crimson gravy infused with smoky Mathania dried red chilies, garlic, cloves, and clarified butter.',
        approxPriceINR: '₹450 – ₹850',
        isVegetarian: false,
        imageUrl: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Handi Restaurant (MI Road), 1135 AD (Amber Fort), Spice Court'
      }
    ],
    transit: {
      howToReach: 'Connected via 8-lane Delhi-Jaipur NH 48 Expressway (~4 hrs) and high-speed Vande Bharat / Shatabdi Express trains.',
      nearestAirport: {
        name: 'Jaipur International Airport (Terminal 2)',
        code: 'JAI',
        distance: '13 km from city center (approx. 25-30 mins by cab)'
      },
      railwayStations: [
        { name: 'Jaipur Junction Main', code: 'JP', distance: '3 km from Pink City' },
        { name: 'Gandhinagar Jaipur', code: 'GADJ', distance: '5 km (ideal for South Jaipur)' }
      ],
      busTerminals: ['Sindhi Camp Central Bus Stand (Inter-state Volvo & RSRTC express buses)'],
      localTransit: [
        'Jaipur Metro (Pink Line from Mansarovar to Badi Chaupar in old city)',
        'E-Rickshaws & Auto-Rickshaws (readily available outside all major gates)',
        'Low-Floor City AC Buses (routes connecting Amber, Airport, and Railway Station)'
      ],
      taxiOptions: ['Uber, Ola & Rapido app cabs operate 24x7', 'Full-day tourist taxi rental available for Amber-Nahargarh-Jaigarh circuit'],
      estimatedTransitCosts: {
        metroOrBus: '₹10 – ₹30 per trip',
        autoRickshaw: '₹60 – ₹150 for city hops',
        fullDayTaxi: '₹1,800 – ₹2,600 (8 hours / 80 km)'
      },
      mapCoordinates: {
        lat: 26.9124,
        lng: 75.7873,
        zoom: 12
      }
    },
    culture: {
      festivals: [
        { name: 'Jaipur Literature Festival (JLF)', month: 'January', description: 'The "greatest literary show on Earth" hosting Nobel laureates and world thinkers.' },
        { name: 'Teej & Gangaur Festivals', month: 'March / August', description: 'Royal pageantry where Goddess idol is paraded with elephant troops, dancers, and folk bands.' },
        { name: 'Elephant & Holi Festivities', month: 'March', description: 'Folk dancers, vibrant organic gulal celebrations, and traditional Dhol drummers.' }
      ],
      traditionalWear: {
        name: 'Bandhani Saree, Leheriya Dupattas & Royal Pagri (Turban)',
        description: 'Vibrant tie-dye patterns in red, yellow, and royal blue, worn with silver tribal jewelry and mojari leather shoes.'
      },
      famousHandicrafts: [
        { name: 'Jaipur Blue Pottery', description: 'Turquoise quartz glazed ceramics with Mughal arabesque florals.', bestMarket: 'Kripal Kumbh or Sanganer' },
        { name: 'Block-Printed Quilts & Textiles', description: 'Hand-carved wooden teak block prints using natural dyes.', bestMarket: 'Bapu Bazaar & Sanganer' },
        { name: 'Kundan & Meenakari Jewelry', description: 'Enamel gold jewelry with uncut gemstones and polki diamonds.', bestMarket: 'Johari Bazaar' }
      ],
      localLanguagePhrases: [
        { phrase: 'खम्मा घणी (Khamma Ghani)', translation: 'Warm Greetings / Welcome', meaning: 'The classic royal Rajasthani greeting conveying utmost respect.' },
        { phrase: 'घणी खम्मा (Ghani Khamma)', translation: 'Thank you / Blessed reply', meaning: 'The polite customary reply to Khamma Ghani.' },
        { phrase: 'कइयां हो? (Kaiyaan ho?)', translation: 'How are you?', meaning: 'Friendly everyday conversational enquiry.' }
      ],
      uniqueExperiences: [
        'Sunrise hot-air balloon flight over Amber Fort and Aravalli mountain ranges.',
        'Puppet making and Kathputli show in Kathputli Colony.',
        'Evening Dharohar Rajasthani folk dance and music performance at Chokhi Dhani.'
      ],
      famousMarkets: ['Johari Bazaar (Jewelry)', 'Bapu Bazaar (Textiles & Mojaris)', 'Tripolia Bazaar (Lac bangles & brass)']
    },
    weather: {
      lat: 26.9124,
      lng: 75.7873,
      temperatureC: 25,
      conditionText: 'Sunny & Pleasant',
      isLive: false,
      bestMonthsToVisit: 'October to March (Warm golden sun, chilly evenings, ideal for fort exploration)',
      seasonalHighlights: {
        summer: 'April to June: Hot and dry (35°C to 43°C); sightseeing is best done before 10 AM.',
        monsoon: 'July to September: Aravalli hills turn lush emerald green; lake levels rise.',
        winter: 'November to February: Glorious crisp weather (10°C to 26°C); peak tourist season.'
      },
      rainfallInfo: 'Low annual rainfall (approx. 500 mm), mostly concentrated between July and August.'
    }
  },

  // ================= KERALA =================
  'kerala': {
    id: 'kerala',
    name: 'Kerala (Munnar & Alleppey)',
    state: 'Kerala',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    tagline: 'God’s Own Country – Backwaters, Tea Terraces & Ayurveda',
    overview: 'Tropical paradise along the Malabar Coast, celebrated for serene palm-fringed backwaters, traditional Kettuvallam houseboats, misty Munnar tea hills, and 5000-year-old authentic Ayurvedic rejuvenation.',
    attractions: [
      {
        id: 'alleppey-backwaters',
        name: 'Alleppey (Alappuzha) Backwaters Cruise',
        category: 'Famous',
        description: 'Glide on traditional thatched wooden houseboats through a tranquil labyrinth of palm-fringed canals, paddy fields, and village shores.',
        location: 'Punnamada Jetty, Alappuzha',
        entryFee: 'Day cruise: ₹6,000 – ₹10,000 / boat; Shikara: ₹600 – ₹1,000/hr',
        openingHours: 'Houseboats operate between 11:30 AM and 5:30 PM (docked at night)',
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '4 hours to overnight stay',
        travelTimeFromCenter: 'Central Alleppey'
      },
      {
        id: 'munnar-tea-gardens',
        name: 'Kolukkumalai & Tata Tea Terraces',
        category: 'Nature',
        description: 'World’s highest organic tea plantations at 7,900 ft, featuring rolling green hills, early morning cloud seas, and fresh orthodox tea tastings.',
        location: 'Munnar Hill Station, Idukki District',
        entryFee: 'Museum entry: ₹125; Jeep Safari: ₹2,000 – ₹3,000',
        openingHours: '9:00 AM – 4:00 PM (Museum closed on Mondays)',
        imageUrl: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: 'Half day',
        travelTimeFromCenter: '4 hours drive from Kochi'
      },
      {
        id: 'fort-kochi-nets',
        name: 'Fort Kochi & Chinese Fishing Nets',
        category: 'Historical',
        description: 'Historic coastal precinct with colonial Portuguese, Dutch, and British quarters, 14th-century cantilevered Chinese fishing nets, and spice warehouses.',
        location: 'Vasco da Gama Square, Fort Kochi',
        entryFee: 'Free entry (small tip to fishermen to try pulling nets)',
        openingHours: 'Sunrise to Sunset',
        imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: '1 hour from Cochin Airport'
      },
      {
        id: 'marari-beach',
        name: 'Marari Quiet Secluded Beach',
        category: 'Hidden Gem',
        description: 'Pristine, non-commercial golden sand beach bordered by coconut groves, offering tranquil sunset walks and quiet coastal fishing village life.',
        location: 'Mararikulam, near Alleppey',
        entryFee: 'Free entry',
        openingHours: 'Open 24 hours',
        imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 to 3 hours',
        travelTimeFromCenter: '25 mins from Alleppey'
      },
      {
        id: 'periyar-safari',
        name: 'Periyar Tiger Reserve Boat Safari',
        category: 'Adventure',
        description: 'Scenic boat safari on an artificial reservoir surrounded by dense Cardamom hills to spot wild elephants, gaur, sambar deer, and rare aquatic birds.',
        location: 'Thekkady, Idukki District',
        entryFee: '₹255 – ₹500 (Boating + Forest entry)',
        openingHours: 'Safaris: 7:30 AM, 9:30 AM, 11:15 AM, 1:45 PM, 3:30 PM',
        imageUrl: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2.5 hours',
        travelTimeFromCenter: '3 hours drive from Munnar'
      }
    ],
    hotels: [
      {
        id: 'kerala-houseboat-stay',
        name: 'Rainbow Luxury Houseboats Alleppey',
        category: 'Heritage',
        approxPricePerNightINR: 9500,
        rating: 4.8,
        reviewsCount: 920,
        location: 'Punnamada Lake, Alleppey',
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        amenities: ['Private Chef Cooking Sadya & Fish', 'AC Master Bedroom', 'Sun Deck', 'Backwater Cruise'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/alleppey?q=Rainbow+Houseboats+Alleppey'
      },
      {
        id: 'kumarakom-lake-resort',
        name: 'Kumarakom Lake Resort (Luxury Heritage Villas)',
        category: 'Luxury',
        approxPricePerNightINR: 24000,
        rating: 4.9,
        reviewsCount: 2800,
        location: 'Kumarakom, Kottayam',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        amenities: ['Meandering Infinity Pool', 'Authentic Ayurveda Ayurmana', 'Sunset Cruises', 'Fine Dining'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/kumarakom?q=Kumarakom+Lake+Resort'
      },
      {
        id: 'zostel-alleppey',
        name: 'Zostel Alleppey Beach',
        category: 'Budget',
        approxPricePerNightINR: 1100,
        rating: 4.6,
        reviewsCount: 1150,
        location: 'Alleppey Beach Road',
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        amenities: ['Steps from Beach', 'Hammocks & Common Chill Room', 'Kayaking Tours', 'High-Speed Wi-Fi'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/alleppey?q=Zostel+Alleppey'
      },
      {
        id: 'tea-county-munnar',
        name: 'KTDC Tea County Munnar',
        category: 'Mid-range',
        approxPricePerNightINR: 5200,
        rating: 4.5,
        reviewsCount: 1400,
        location: 'Munnar Town, Idukki',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        amenities: ['Surrounded by Hills', 'Ayurvedic Wellness Spa', 'Multi-cuisine Restaurant', 'Balcony Views'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/munnar?q=KTDC+Tea+County+Munnar'
      }
    ],
    dishes: [
      {
        id: 'kerala-sadya-dish',
        name: 'Traditional Kerala Sadya on Banana Leaf',
        hindiName: 'केरल सद्या',
        category: 'Regional Specialty',
        description: '24-dish vegetarian royal feast with red Matta rice, Avial, Sambar, Olan, Thoran, Kaalan, Rasam, and sweet Payasam.',
        approxPriceINR: '₹250 – ₹450 / leaf',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Mothers Veg Plaza (Trivandrum), Grand Pavilion (Kochi), BTH (Ernakulam)'
      },
      {
        id: 'karimeen-pollichathu',
        name: 'Karimeen Pollichathu (Pearl Spot Fish)',
        hindiName: 'करीमीन पोल्लिचतु',
        category: 'Regional Specialty',
        description: 'Fresh backwater Pearl Spot fish coated in spicy shallot-chili masala, tightly wrapped in plantain leaf, and slow pan-fried.',
        approxPriceINR: '₹400 – ₹700',
        isVegetarian: false,
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Houseboat kitchens, Vembanad Restaurant, Casino Hotel Kochi'
      },
      {
        id: 'appam-stew',
        name: 'Laced Appam with Coconut Milk Stew',
        hindiName: 'अप्पम और इष्टू',
        category: 'Regional Specialty',
        description: 'Fluffy fermented rice hoppers with crispy lace edges, dipped in fragrant coconut milk vegetable or chicken stew.',
        approxPriceINR: '₹120 – ₹220',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Dhe Puttu, Paragon Restaurant, Kashi Art Cafe'
      }
    ],
    transit: {
      howToReach: 'Cochin International Airport (COK) is the world’s first 100% solar-powered airport. Well connected by high-speed Vande Bharat and express trains to Ernakulam.',
      nearestAirport: {
        name: 'Cochin International Airport',
        code: 'COK',
        distance: '75 km to Alleppey, 110 km to Munnar'
      },
      railwayStations: [
        { name: 'Ernakulam Junction', code: 'ERS', distance: 'Kochi central hub' },
        { name: 'Alappuzha Railway Station', code: 'ALLP', distance: '3 km from backwaters' }
      ],
      busTerminals: ['KSRTC Bus Stand Alappuzha & Munnar (direct hill connectivity)'],
      localTransit: [
        'State Water Transport Department (SWTD) Public Ferries (₹10 – ₹25 per ferry trip)',
        'Auto-Rickshaws for town and beach access',
        'Private AC tourist taxis for hill climbs to Munnar'
      ],
      taxiOptions: ['Pre-paid airport taxis', 'Uber & Ola active in Kochi & Ernakulam'],
      estimatedTransitCosts: {
        metroOrBus: '₹15 – ₹40 for bus / ferry',
        autoRickshaw: '₹50 – ₹120 within town',
        fullDayTaxi: '₹2,500 – ₹3,200 for Cochin-Munnar hill transfer'
      },
      mapCoordinates: {
        lat: 9.4981,
        lng: 76.3388,
        zoom: 11
      }
    },
    culture: {
      festivals: [
        { name: 'Onam Harvest & Boat Races', month: 'August / September', description: 'Grand homecoming of mythical King Mahabali, featuring snake boat races (Vallam Kali) and flower carpets.' },
        { name: 'Thrissur Pooram', month: 'April / May', description: 'Spectacular temple festival with caparisoned elephants, Ilanjithara Melam percussion, and midnight fireworks.' }
      ],
      traditionalWear: {
        name: 'Kasavu Saree & Mundu',
        description: 'Elegant off-white handloom cotton garments trimmed with pure golden zari borders.'
      },
      famousHandicrafts: [
        { name: 'Aranmula Kannadi Metal Mirrors', description: 'Ancient secret alloy front-surface reflective mirrors with GI status.', bestMarket: 'Aranmula village' },
        { name: 'Coir & Coconut Shell Crafts', description: 'Eco-friendly mats, baskets, and decorative lamps.', bestMarket: 'Alleppey Coir emporiums' }
      ],
      localLanguagePhrases: [
        { phrase: 'നമസ്കാരം (Namaskaram)', translation: 'Hello / Greetings', meaning: 'The classic polite greeting in Malayalam.' },
        { phrase: 'നന്ദി (Nandi)', translation: 'Thank you', meaning: 'Expressing genuine gratitude.' },
        { phrase: 'സുഖമാണോ? (Sukhamano?)', translation: 'Are you doing well?', meaning: 'Warm friendly check-in.' }
      ],
      uniqueExperiences: [
        'Watch a 500-year-old Kathakali classical dance drama with live face makeup transformation.',
        'Experience authentic Ayurvedic Abhyanga massage with warm herb-infused medicated oils.',
        'Sunrise canoe ride into narrow quiet canals unreachable by large houseboats.'
      ],
      famousMarkets: ['Jew Town Spice Market (Fort Kochi)', 'Munnar Town Spice & Tea Bazaar']
    },
    weather: {
      lat: 9.4981,
      lng: 76.3388,
      temperatureC: 28,
      conditionText: 'Tropical & Balmy',
      isLive: false,
      bestMonthsToVisit: 'September to March (Crisp skies and breezy canals) & June to August (Monsoon Ayurveda season)',
      seasonalHighlights: {
        summer: 'March to May: Warm and humid along coasts (29°C to 34°C); cooler in Munnar hills.',
        monsoon: 'June to August: Heavy rains; prime season for Ayurvedic health retreats and raging waterfalls.',
        winter: 'October to February: Delightful breezes (23°C to 30°C); ideal for houseboat cruises.'
      },
      rainfallInfo: 'High rainfall during South-West (June-Aug) and North-East (Oct-Nov) monsoons.'
    }
  },

  // ================= ODISHA =================
  'odisha': {
    id: 'odisha',
    name: 'Odisha (Puri, Konark & Bhubaneswar)',
    state: 'Odisha',
    coverImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1600&q=85',
    tagline: 'Soul of Incredible India – Sacred Char Dham, Sun God & Dolphin Lagoons',
    overview: 'Land of timeless spirituality anchored by Lord Jagannath’s sacred shrine in Puri, the 13th-century astronomical chariot of Konark Sun Temple, ancient Kalinga architectural gems in Bhubaneswar, and Asia’s largest brackish lagoon at Chilika.',
    attractions: [
      {
        id: 'puri-jagannath',
        name: 'Jagannath Temple & Grand Road (Bada Danda)',
        category: 'Religious & Cultural',
        description: 'One of the four sacred Char Dhams of Hinduism, famed for its towering 65-meter vimana, 56-offering Mahaprasad, and the monumental annual Rath Yatra.',
        location: 'Bada Danda, Puri',
        entryFee: 'Free entry (Hindus only inside inner sanctum; panoramic rooftop views available at Raghunandan Library)',
        openingHours: '5:30 AM – 9:30 PM',
        imageUrl: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 to 3 hours',
        travelTimeFromCenter: 'Puri city center'
      },
      {
        id: 'konark-sun-temple',
        name: 'Konark Sun Temple (UNESCO World Heritage)',
        category: 'Famous',
        description: 'Architectural wonder crafted as a colossal 24-wheeled chariot of Surya the Sun God, pulled by seven stone horses with precision solar sundials.',
        location: 'Konark, Puri District',
        entryFee: '₹40 (Indians), ₹600 (Foreigners)',
        openingHours: '6:00 AM – 8:00 PM (Light & Sound show in evening)',
        imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2.5 hours',
        travelTimeFromCenter: '35 mins from Puri via scenic Marine Drive'
      },
      {
        id: 'chilika-lake',
        name: 'Chilika Lake & Dolphin Safari (Satapada)',
        category: 'Nature',
        description: 'Asia’s largest brackish lagoon hosting endangered Irrawaddy dolphins, migratory Siberian birds, and scenic boat tours to Rajhans Island.',
        location: 'Satapada, Chilika, Puri District',
        entryFee: 'OTDC Boat Safari: ₹1,400 – ₹2,400 per boat (up to 6 persons)',
        openingHours: '6:30 AM – 5:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '3 to 4 hours',
        travelTimeFromCenter: '1 hour 15 mins drive from Puri'
      },
      {
        id: 'raghurajpur-village',
        name: 'Raghurajpur Heritage Crafts Village',
        category: 'Hidden Gem',
        description: 'Traditional heritage village where every resident is a master artisan practicing centuries-old Pattachitra cloth scroll painting and palm-leaf engravings.',
        location: 'Near Chandanpur, Puri District',
        entryFee: 'Free entry (support artists by purchasing authentic art)',
        openingHours: '8:00 AM – 6:30 PM',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: '20 mins from Puri'
      },
      {
        id: 'golden-beach-puri',
        name: 'Puri Golden Beach (Blue Flag Certified)',
        category: 'Nature',
        description: 'International Blue Flag eco-certified clean beach with designated swimming zones, watchtowers, and famous sand sculptures by Sudarsan Pattnaik.',
        location: 'Chakratirtha Road, Puri',
        entryFee: '₹20 (Blue Flag zone maintenance)',
        openingHours: '6:00 AM – 7:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: 'Beachfront Puri'
      }
    ],
    hotels: [
      {
        id: 'mayfair-heritage-puri',
        name: 'MAYFAIR Heritage Beach Resort Puri',
        category: 'Luxury',
        approxPricePerNightINR: 9500,
        rating: 4.8,
        reviewsCount: 1950,
        location: 'Chakratirtha Road, Puri',
        imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        amenities: ['Private Beach Access', 'Oceanfront Dining', 'Ayurvedic Spa', 'Outdoor Pool'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/puri?q=Mayfair+Heritage+Puri'
      },
      {
        id: 'sterling-puri',
        name: 'Sterling Puri Resort',
        category: 'Mid-range',
        approxPricePerNightINR: 4800,
        rating: 4.5,
        reviewsCount: 1650,
        location: 'Sipasarubali, Puri',
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        amenities: ['Estuary View', 'Kids Activity Zone', 'Swimming Pool', 'Seafood Restaurant'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/puri?q=Sterling+Puri'
      },
      {
        id: 'zostel-puri',
        name: 'Zostel Puri (Near Beach)',
        category: 'Budget',
        approxPricePerNightINR: 900,
        rating: 4.6,
        reviewsCount: 780,
        location: 'New Marine Drive, Puri',
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        amenities: ['Backpacker Dorms', 'Rooftop Cafe', 'High-Speed Wi-Fi', 'Bicycle Rentals'],
        bookingSearchUrl: 'https://www.google.com/travel/hotels/puri?q=Zostel+Puri'
      }
    ],
    dishes: [
      {
        id: 'chhena-poda',
        name: 'Odia Chhena Poda (Caramelized Cottage Cheese)',
        hindiName: 'छेना पोड़ा',
        category: 'Traditional Sweet',
        description: 'Fresh cottage cheese slow-baked for hours in Sal leaves until the outer casing caramelizes into rich, smoky, cardamom-infused sweetness.',
        approxPriceINR: '₹80 – ₹160 per slice',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Puri Grand Road sweet shops, Nayagarh original shops'
      },
      {
        id: 'mahaprasad-khaja',
        name: 'Jagannath Temple Mahaprasad & Khaja',
        hindiName: 'महाप्रसाद और खाजा',
        category: 'Regional Specialty',
        description: 'Sacred food cooked in earthen pots stacked seven high on woodfire; accompanied by layered crispy sugar-glazed Khaja.',
        approxPriceINR: '₹150 – ₹300 per thali',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Ananda Bazaar inside Jagannath Temple, Nrusingha Sweets'
      },
      {
        id: 'odia-dalma',
        name: 'Odia Dalma with Steamed Rice',
        hindiName: 'दालमा',
        category: 'Regional Specialty',
        description: 'Hearty yellow toor dal simmered with raw papaya, pumpkin, eggplant, and plantain, tempered with roasted cumin, chili, and grated coconut.',
        approxPriceINR: '₹120 – ₹220',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Dalma Restaurant (Bhubaneswar), Wildgrass Restaurant (Puri)'
      }
    ],
    transit: {
      howToReach: 'Biju Patnaik International Airport (BBI) in Bhubaneswar (60 km from Puri). Direct Vande Bharat and express trains connect Puri (PURI) directly with Delhi, Kolkata, and Chennai.',
      nearestAirport: {
        name: 'Biju Patnaik International Airport, Bhubaneswar',
        code: 'BBI',
        distance: '60 km via NH 316 4-lane expressway (~1 hour drive)'
      },
      railwayStations: [
        { name: 'Puri Railway Station', code: 'PURI', distance: 'Terminal station in town' },
        { name: 'Bhubaneswar Railway Station', code: 'BBS', distance: '60 km north' }
      ],
      busTerminals: ['Puri Inter-State Bus Stand & Mo Bus Service'],
      localTransit: [
        'Mo Bus AC City Buses (connecting Bhubaneswar, Puri, and Konark seamlessly)',
        'Auto-Rickshaws and battery e-rickshaws for beach & temple corridors'
      ],
      taxiOptions: ['Ola/Uber in Bhubaneswar', 'Pre-paid tourist cabs for Golden Triangle circuit'],
      estimatedTransitCosts: {
        metroOrBus: '₹20 – ₹50 (Mo Bus is ultra-economical)',
        autoRickshaw: '₹50 – ₹100 for city hops',
        fullDayTaxi: '₹2,200 – ₹2,800 for Bhubaneswar-Konark-Puri day trip'
      },
      mapCoordinates: {
        lat: 19.8135,
        lng: 85.8312,
        zoom: 12
      }
    },
    culture: {
      festivals: [
        { name: 'Puri Rath Yatra', month: 'June / July', description: 'Over a million devotees pull three massive handcrafted wooden chariots through the Grand Road.' },
        { name: 'Konark Dance Festival', month: 'December 1 – 5', description: 'Classical Indian dance masters perform with the illuminated Sun Temple as the backdrop.' }
      ],
      traditionalWear: {
        name: 'Sambalpuri & Bomkai Handloom Sarees',
        description: 'Tie-dye (Ikat) weave depicting conch shells, wheels, and floral heritage.'
      },
      famousHandicrafts: [
        { name: 'Pattachitra Painting', description: 'Intricate scroll art on cloth and palm leaf depicting mythical legends.', bestMarket: 'Raghurajpur Village' },
        { name: 'Pipili Applique Work', description: 'Brightly colored fabric banners, lanterns, and umbrellas.', bestMarket: 'Pipili village along highway' }
      ],
      localLanguagePhrases: [
        { phrase: 'ନମସ୍କାର (Namaskara)', translation: 'Greetings / Hello', meaning: 'Standard respectful Odia greeting.' },
        { phrase: 'ଧନ୍ୟବାଦ (Dhanyabad)', translation: 'Thank you', meaning: 'Polite expression of gratitude.' },
        { phrase: 'କେମିତି ଅଛନ୍ତି? (Kemiti achhanti?)', translation: 'How are you?', meaning: 'Respectful inquiry.' }
      ],
      uniqueExperiences: [
        'Watch world champion sand artists carving live sculptures at Puri beach.',
        'Taste hot Dalma and sacred Mahaprasad at Ananda Bazaar.',
        'Sunset walk on Casuarina-lined Konark Marine Drive.'
      ],
      famousMarkets: ['Bada Danda Swargadwar Market (Puri)', 'Ekamra Haat (Bhubaneswar)']
    },
    weather: {
      lat: 19.8135,
      lng: 85.8312,
      temperatureC: 27,
      conditionText: 'Pleasant Coastal Breeze',
      isLive: false,
      bestMonthsToVisit: 'October to February (Cool sea breezes, sunny days, perfect for beach & temples)',
      seasonalHighlights: {
        summer: 'March to June: Warm and humid coastal weather (28°C to 38°C).',
        monsoon: 'July to September: Active rains, lush greenery, grand Rath Yatra.',
        winter: 'October to February: Delightful weather (16°C to 28°C); festival season.'
      },
      rainfallInfo: 'Moderate to high coastal rainfall with refreshing post-monsoon sea breezes.'
    }
  }
};

// Intelligent lookup and generator for any destination in India
export function getDestinationDetails(destinationName: string): CompleteDestinationDetail {
  const norm = (destinationName || '').toLowerCase().trim();

  // Direct match
  if (DESTINATION_DETAILS_MAP[norm]) {
    return DESTINATION_DETAILS_MAP[norm];
  }

  // Partial match
  for (const key of Object.keys(DESTINATION_DETAILS_MAP)) {
    if (norm.includes(key) || key.includes(norm)) {
      return DESTINATION_DETAILS_MAP[key];
    }
  }

  // Coherent, rich fallback for any other destination in India (e.g., Goa, Varanasi, Delhi, Kashmir, etc.)
  const displayName = destinationName || 'Explore India';
  return {
    id: norm || 'destination',
    name: displayName,
    state: 'Incredible India',
    coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    tagline: `Experience the Timeless Magic of ${displayName}`,
    overview: `${displayName} offers an unforgettable blend of historical grandeur, scenic landscapes, vibrant street markets, and authentic Indian hospitality. Discover ancient monuments, local bazaars, and traditional flavours.`,
    attractions: [
      {
        id: 'historic-center',
        name: `${displayName} Heritage Monument & Old City`,
        category: 'Historical',
        description: `The iconic cultural anchor of ${displayName}, featuring ancient architectural craftsmanship, sacred shrines, and centuries of preserved local history.`,
        location: `Central ${displayName}`,
        entryFee: '₹50 (Indians), ₹300 (Foreigners)',
        openingHours: '9:00 AM – 5:30 PM',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 to 3 hours',
        travelTimeFromCenter: 'Located in city center'
      },
      {
        id: 'scenic-viewpoint',
        name: `${displayName} Sunset Viewpoint & Lake`,
        category: 'Nature',
        description: `Breathtaking natural panorama offering sunset views over the town, surrounded by lush native trees and walking trails.`,
        location: `Outer ${displayName}`,
        entryFee: 'Free entry',
        openingHours: 'Sunrise to Sunset',
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '1.5 to 2 hours',
        travelTimeFromCenter: '15 mins by cab'
      },
      {
        id: 'artisan-bazaar',
        name: `${displayName} Traditional Artisan Bazaar`,
        category: 'Famous',
        description: `Bustling heritage market famous for handmade souvenirs, indigenous spices, handloom fabrics, and local street delicacies.`,
        location: `Market Square, ${displayName}`,
        entryFee: 'Free entry',
        openingHours: '10:00 AM – 9:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '2 hours',
        travelTimeFromCenter: 'City Center'
      },
      {
        id: 'hidden-retreat',
        name: `Peaceful Sanctuary & Gardens`,
        category: 'Hidden Gem',
        description: `Serene, lesser-known tranquil retreat tucked away from city crowds, ideal for contemplative walks and photography.`,
        location: `Quiet Quarter, ${displayName}`,
        entryFee: '₹20 nominal maintenance',
        openingHours: '7:00 AM – 6:00 PM',
        imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
        suggestedDuration: '1.5 hours',
        travelTimeFromCenter: '20 mins'
      }
    ],
    hotels: [
      {
        id: 'budget-stay',
        name: `${displayName} Travelers Backpackers Hostel`,
        category: 'Budget',
        approxPricePerNightINR: 1100,
        rating: 4.6,
        reviewsCount: 840,
        location: `Near Station Road, ${displayName}`,
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
        amenities: ['Free High-Speed Wi-Fi', 'Clean AC Dorms', 'Rooftop Cafe', 'Tour Desk'],
        bookingSearchUrl: `https://www.google.com/travel/hotels?q=budget+hotels+in+${encodeURIComponent(displayName)}`
      },
      {
        id: 'mid-range-stay',
        name: `${displayName} Heritage Haveli & Resort`,
        category: 'Mid-range',
        approxPricePerNightINR: 4200,
        rating: 4.7,
        reviewsCount: 1250,
        location: `Civil Lines, ${displayName}`,
        imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        amenities: ['Swimming Pool', 'Complimentary Breakfast', 'Garden Lawn', 'Family Suites'],
        bookingSearchUrl: `https://www.google.com/travel/hotels?q=hotels+in+${encodeURIComponent(displayName)}`
      },
      {
        id: 'luxury-stay',
        name: `The Grand Palace & Spa ${displayName}`,
        category: 'Luxury',
        approxPricePerNightINR: 16000,
        rating: 4.9,
        reviewsCount: 2400,
        location: `Palace Road, ${displayName}`,
        imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
        amenities: ['Luxury Spa', 'Fine Dining', 'Butler Service', 'Chauffeur Airport Transfers'],
        bookingSearchUrl: `https://www.google.com/travel/hotels?q=luxury+hotels+in+${encodeURIComponent(displayName)}`
      }
    ],
    dishes: [
      {
        id: 'specialty-thali',
        name: `${displayName} Signature Regional Thali`,
        hindiName: 'पारंपरिक थाली',
        category: 'Regional Specialty',
        description: 'Multi-course regional meal featuring seasonal indigenous vegetables, slow-cooked lentils, freshly made bread, and aromatic rice.',
        approxPriceINR: '₹220 – ₹380 / Thali',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
        popularSpots: `Top-rated heritage dining houses across ${displayName}`
      },
      {
        id: 'street-snack',
        name: 'Crispy Street Chaat & Fritters',
        hindiName: 'स्ट्रीट चाट',
        category: 'Street Food',
        description: 'Piping hot local snack seasoned with ground cumin, black rock salt, tangy tamarind, and fresh mint chutney.',
        approxPriceINR: '₹50 – ₹90',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Main Bazaar food stalls'
      },
      {
        id: 'dessert-treat',
        name: 'Traditional Milk Sweet (Mithai)',
        hindiName: 'शाही मिठाई',
        category: 'Traditional Sweet',
        description: 'Rich confectionery crafted from pure reduced milk, crushed cardamom, saffron, and roasted pistachios.',
        approxPriceINR: '₹60 – ₹120 per piece',
        isVegetarian: true,
        imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
        popularSpots: 'Heritage sweet makers'
      }
    ],
    transit: {
      howToReach: `Direct trains and state highway expressways connect major metropolitan hubs to ${displayName}.`,
      nearestAirport: {
        name: `Nearest Regional Gateway Airport`,
        code: 'AIR',
        distance: 'Within 45 to 90 mins drive'
      },
      railwayStations: [
        { name: `${displayName} Central Junction`, code: 'STN', distance: 'Central town hub' }
      ],
      busTerminals: [`${displayName} Central Inter-State Bus Stand`],
      localTransit: [
        'Auto-Rickshaws & E-Rickshaws for quick point-to-point transit',
        'State transport buses linking major tourist attractions'
      ],
      taxiOptions: ['Local tourist taxis', 'App cabs where available'],
      estimatedTransitCosts: {
        metroOrBus: '₹15 – ₹40 per trip',
        autoRickshaw: '₹50 – ₹120',
        fullDayTaxi: '₹2,000 – ₹2,800 for 8 hours'
      },
      mapCoordinates: {
        lat: 20.5937,
        lng: 78.9629,
        zoom: 11
      }
    },
    culture: {
      festivals: [
        { name: 'Annual Cultural & Heritage Fair', month: 'Winter Season', description: 'Celebrates indigenous music, folk dances, handicrafts, and regional cuisine.' }
      ],
      traditionalWear: {
        name: 'Regional Handloom & Traditional Attire',
        description: 'Handcrafted natural fiber fabrics adorned with traditional embroidery and festive borders.'
      },
      famousHandicrafts: [
        { name: 'Traditional Handcrafted Souvenirs', description: 'Wood carving, pottery, or textile weaving by local families.', bestMarket: 'Town craft market' }
      ],
      localLanguagePhrases: [
        { phrase: 'नमस्ते (Namaste)', translation: 'Greetings / Welcome', meaning: 'The universal Indian greeting of respect and goodwill.' },
        { phrase: 'धन्यवाद (Dhanyawaad)', translation: 'Thank you', meaning: 'Polite gratitude.' }
      ],
      uniqueExperiences: [
        `Guided walking tour through historic quarters of ${displayName}.`,
        'Tasting traditional sweets fresh from morning sweetshops.',
        'Sunset photography at scenic viewpoints.'
      ],
      famousMarkets: [`Main Bazaar of ${displayName}`, 'Clock Tower Market']
    },
    weather: {
      lat: 20.5937,
      lng: 78.9629,
      temperatureC: 26,
      conditionText: 'Clear & Sunny',
      isLive: false,
      bestMonthsToVisit: 'October to March (Ideal sightseeing weather across India)',
      seasonalHighlights: {
        summer: 'April to June: Warm weather; early morning sightseeing recommended.',
        monsoon: 'July to September: Refreshing rain-washed countryside and greenery.',
        winter: 'October to February: Cool and pleasant climate; peak travel season.'
      },
      rainfallInfo: 'Standard tropical rainfall concentrated in the monsoon months.'
    }
  };
}
