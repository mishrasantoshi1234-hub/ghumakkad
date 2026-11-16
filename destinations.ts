/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Comprehensive Structured Indian Destinations Dataset
 */

import { Destination } from '../types/travel';

export const DESTINATIONS: Destination[] = [
  // ================= NORTH INDIA =================
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'National Capital Territory',
    region: 'North',
    tagline: 'The Historic Heartbeat of India',
    description: 'A magnificent blend of Mughal grandeur, British colonial boulevards, vibrant bazaars, and cutting-edge modernity.',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80', // India Gate / Humayun Tomb
    galleryImages: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598324789736-4861fadd3a4c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Red Fort', 'Qutub Minar', 'Humayun’s Tomb', 'India Gate', 'Lotus Temple', 'Chandni Chowk'],
    bestTimeToVisit: 'October to March (pleasant winter)',
    estimatedBudget: '₹7,000 – ₹14,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Heritage', 'Food', 'History', 'Shopping'],
    howToReach: {
      byAir: 'Indira Gandhi International Airport (DEL) connects globally with terminals T1, T2 & T3.',
      byTrain: 'New Delhi (NDLS), Old Delhi (DLI), and Hazrat Nizamuddin (NZM) connect all major Indian cities.',
      byRoad: 'Inter-state bus terminals at Kashmere Gate (ISBT), Anand Vihar, and Sarai Kale Khan.'
    },
    localFoodMustTry: ['Old Delhi Paranthe Wali Gali', 'Chole Bhature at Sita Ram', 'Butter Chicken at Pandara Road', 'Daulat ki Chaat in winter'],
    culturalEtiquetteTips: ['Dress modestly at Jama Masjid, Gurudwara Bangla Sahib, and Akshardham Temple.', 'Cover head and remove shoes before entering shrines.', 'Use Delhi Metro smart tokens or travel cards for easy commute.'],
    weatherHighlights: {
      summer: 'April to June: Hot (35°C to 45°C), carry sun protection and stay hydrated.',
      monsoon: 'July to September: Humid with periodic heavy rains (28°C to 35°C).',
      winter: 'October to March: Crisp and pleasant (8°C to 24°C), ideal for sightseeing.'
    },
    sampleTwoDayPlan: {
      day1: 'Morning at Old Delhi (Jama Masjid & Rickshaw ride through Chandni Chowk), afternoon at Red Fort, evening at India Gate & Connaught Place.',
      day2: 'Morning at Humayun’s Tomb and Qutub Minar, afternoon at National Museum, evening sunset at Lotus Temple.'
    }
  },
  {
    id: 'agra',
    name: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    tagline: 'City of the Eternal Taj Mahal',
    description: 'Home to the iconic white marble Taj Mahal, Agra Fort, and the abandoned Mughal capital of Fatehpur Sikri.',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80', // Taj Mahal
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Taj Mahal (UNESCO)', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah'],
    bestTimeToVisit: 'October to March',
    estimatedBudget: '₹5,000 – ₹10,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 2,
    tags: ['Heritage', 'UNESCO', 'Mughal Architecture', 'Photography'],
    howToReach: {
      byAir: 'Agra Kheria Airport (AGR) has limited flights; DEL (200 km) is the primary international gateway.',
      byTrain: 'Agra Cantt (AGC) is connected via high-speed Gatimaan Express & Vande Bharat from Delhi (1h 40m).',
      byRoad: 'Yamuna Expressway from Greater Noida takes just ~2.5 hours by car or express bus.'
    },
    localFoodMustTry: ['Agra Petha (Panchi Petha)', 'Bedmi Puri with Aloo Sabzi', 'Mughlai Kebabs at Sadar Bazaar'],
    culturalEtiquetteTips: ['Taj Mahal is closed on Fridays for prayers.', 'Drones and large bags are strictly prohibited inside archaeological complexes.', 'Book tickets online via ASI portal for faster entry.'],
    weatherHighlights: {
      summer: 'April to June: Extremely warm (up to 44°C).',
      monsoon: 'July to September: Lush gardens with humid days.',
      winter: 'October to February: Foggy early mornings with mild sunshine in afternoons.'
    },
    sampleTwoDayPlan: {
      day1: 'Sunrise at Taj Mahal, breakfast at Sadar Bazaar, afternoon at Agra Fort, sunset views from Mehtab Bagh.',
      day2: 'Half-day excursion to Fatehpur Sikri, return via Tomb of Akbar the Great (Sikandra).'
    }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'North', // Also categorized in West
    tagline: 'The Pink City of Royal Fortresses & Palaces',
    description: 'Capital of Rajasthan famed for the honeycomb Hawa Mahal, colossal Amber Fort, vibrant textiles, and royal cuisine.',
    heroImage: 'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=1200&q=80', // Hawa Mahal
    galleryImages: [
      'https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Hawa Mahal', 'Amber Palace', 'City Palace', 'Jantar Mantar (UNESCO)', 'Nahargarh Fort', 'Johari Bazaar'],
    bestTimeToVisit: 'October to March',
    estimatedBudget: '₹8,000 – ₹16,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Royal', 'Heritage', 'Shopping', 'Architecture'],
    howToReach: {
      byAir: 'Jaipur International Airport (JAI) at Sanganer connects to all tier-1 Indian cities and Dubai/Sharjah.',
      byTrain: 'Jaipur Junction (JP) receives Shatabdi, Vande Bharat, and superfast expresses from Delhi/Mumbai.',
      byRoad: 'Delhi-Jaipur Expressway (NH 48) provides seamless road connectivity (~4 hours).'
    },
    localFoodMustTry: ['Dal Baati Churma with Pure Desi Ghee', 'Pyaz Kachori from Rawat Mishthan Bhandar', 'Ghewar', 'Laal Maas'],
    culturalEtiquetteTips: ['Haggling is customary in traditional bazaars; remain courteous.', 'Dress respectfully when entering temples inside forts.'],
    weatherHighlights: {
      summer: 'March to June: Dry desert heat (up to 43°C).',
      monsoon: 'July to September: Aravalli hills turn emerald green.',
      winter: 'November to February: Glorious warm days and chilly desert evenings (10°C to 26°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Early morning climb to Amber Fort with elephant/jeep, photo stop at Jal Mahal, afternoon at City Palace and Jantar Mantar.',
      day2: 'Hawa Mahal exterior at sunrise, shopping at Bapu and Johari Bazaar, sunset panoramic views from Nahargarh Fort.'
    }
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    region: 'North',
    tagline: 'The Eternal Spiritual City of Light',
    description: 'One of the world’s oldest continuously inhabited cities, sacred to Hinduism and Buddhism on the serene banks of the Holy Ganges.',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80', // Varanasi Ghats
    galleryImages: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Dashashwamedh Ghat Ganga Aarti', 'Kashi Vishwanath Corridor', 'Assi Ghat Sunrise', 'Manikarnika Ghat', 'Sarnath (Deer Park)'],
    bestTimeToVisit: 'October to March (Dev Deepavali in Nov is spectacular)',
    estimatedBudget: '₹6,000 – ₹11,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 3,
    tags: ['Spiritual', 'Culture', 'Photography', 'Ancient Heritage'],
    howToReach: {
      byAir: 'Lal Bahadur Shastri International Airport (VNS) at Babatpur.',
      byTrain: 'Varanasi Junction (BSB) and Pt. Deen Dayal Upadhyaya Junction (DDU). Connected with Vande Bharat Express from Delhi.',
      byRoad: 'NH 19 links Varanasi to Kolkata, Delhi, and Patna.'
    },
    localFoodMustTry: ['Banarasi Paan', 'Kachori Sabzi at Ram Bhandar', 'Malaiyo (foamy milk sweet in winter)', 'Blue Lassi near Manikarnika', 'Tamatar Chaat'],
    culturalEtiquetteTips: ['Maintain reverent silence and no photography at cremation ghats (Manikarnika/Harishchandra).', 'Respect queue decorum in Kashi Vishwanath temple complex.'],
    weatherHighlights: {
      summer: 'May to June: Intense heat (40°C+).',
      monsoon: 'July to September: Ganges water levels rise substantially; boat rides may be restricted during peak flooding.',
      winter: 'November to February: Magical mist over the river and cool weather (9°C to 24°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Dawn wooden boat ride from Assi to Dashashwamedh Ghat, visit Kashi Vishwanath Temple, evening attend the grand Ganga Aarti.',
      day2: 'Morning excursion to Sarnath (where Buddha gave his first sermon), afternoon wandering the ancient alleys of Thatheri Bazaar, sunset music at Assi Ghat.'
    }
  },
  {
    id: 'shimla',
    name: 'Shimla',
    state: 'Himachal Pradesh',
    region: 'North',
    tagline: 'Queen of the Hills & Toy Train Wonderland',
    description: 'Former summer capital of British India nestled in pine-clad Himalayan ridges with colonial architecture and scenic mountain vistas.',
    heroImage: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80', // Shimla ridge
    galleryImages: [
      'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['The Ridge', 'Mall Road', 'Jakhoo Temple (Giant Hanuman statue)', 'Kalka-Shimla Toy Train (UNESCO)', 'Viceregal Lodge', 'Kufri Snow Point'],
    bestTimeToVisit: 'March to June (summer escape) or December to February (for snowfall)',
    estimatedBudget: '₹9,000 – ₹18,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Hills', 'Snow', 'Colonial', 'Romance', 'Nature'],
    howToReach: {
      byAir: 'Shimla Airport at Jubbarhatti (limited) or Chandigarh Airport (IXC, 120 km) with taxi connectivity.',
      byTrain: 'Kalka Railway Station links to broad gauge trains; ride the UNESCO Heritage Toy Train to Shimla.',
      byRoad: 'Himalayan Expressway connects Chandigarh to Shimla in ~3.5 hours.'
    },
    localFoodMustTry: ['Himachali Siddu with Ghee', 'Madra (Chickpeas in yogurt gravy)', 'Chha Gosht', 'Hot Apple Pie at Mall Road bakeries'],
    culturalEtiquetteTips: ['Mall Road and Ridge are strictly pedestrian only—no vehicles permitted.', 'Do not litter or feed wild monkeys at Jakhoo Temple.'],
    weatherHighlights: {
      summer: 'April to June: Pleasantly cool (15°C to 25°C).',
      monsoon: 'July to August: Heavy rains, landslide cautions required.',
      winter: 'December to February: Sub-zero temperatures (-2°C to 10°C) with periodic snowfall.'
    },
    sampleTwoDayPlan: {
      day1: 'Stroll on Mall Road, Christ Church at The Ridge, hike or ropeway to Jakhoo Temple, sunset at Scandal Point.',
      day2: 'Tour Viceregal Lodge (Indian Institute of Advanced Study), day trip to Kufri for nature and Himalayan viewpoints.'
    }
  },
  {
    id: 'kashmir',
    name: 'Kashmir (Srinagar & Gulmarg)',
    state: 'Jammu & Kashmir',
    region: 'North',
    tagline: 'Paradise on Earth – Shikaras, Meadows & Snow',
    description: 'Breathtaking valleys surrounded by snow-capped Pir Panjal mountains, tranquil Dal Lake houseboats, Mughal gardens, and alpine meadows.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80', // Dal Lake Shikara
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Dal Lake Shikara & Houseboats', 'Gulmarg Gondola (World’s highest)', 'Nigeen Lake', 'Mughal Gardens (Shalimar & Nishat)', 'Pahalgam Valley of Shepherds', 'Sonamarg'],
    bestTimeToVisit: 'March to August (lush flowers & lakes) or December to February (skiing & powder snow)',
    estimatedBudget: '₹14,000 – ₹28,000 / person',
    budgetCategory: 'Luxury',
    idealDurationDays: 5,
    tags: ['Paradise', 'Mountains', 'Snow', 'Romantic', 'Lakes'],
    howToReach: {
      byAir: 'Sheikh ul-Alam International Airport (SXR) in Srinagar with regular flights from Delhi, Mumbai, and Amritsar.',
      byTrain: 'Jammu Tawi (JAT) and Udhampur; direct rail link via the newly built Chenab Railway Arch bridge is revolutionizing access.',
      byRoad: 'NH 44 connects Jammu to Srinagar through the engineering marvel of the Syama Prasad Mookerjee Tunnel.'
    },
    localFoodMustTry: ['Kashmiri Wazwan (Rogan Josh, Gushtaba, Rista)', 'Kahwa tea infused with saffron & crushed almonds', 'Kashmiri Nadru Yakhni (Lotus stem)'],
    culturalEtiquetteTips: ['Negotiate Shikara ride rates per official government rate cards.', 'Kashmiri artisans produce authentic GI-tagged Pashmina shawls and walnut wood carving; buy from registered emporiums.'],
    weatherHighlights: {
      summer: 'May to August: Mild and glorious (15°C to 28°C), apple blossoms blooming.',
      monsoon: 'Light rains, clear fresh air.',
      winter: 'December to March: Heavy snowfall (-5°C to 8°C), world-class skiing at Gulmarg.'
    },
    sampleTwoDayPlan: {
      day1: 'Early morning floating vegetable market on Dal Lake, explore Nishat Bagh and Shalimar Bagh, evening sunset Shikara cruise.',
      day2: 'Full-day excursion to Gulmarg: ride Phase 1 & Phase 2 Gondola up to Apharwat Peak (13,780 ft) for sweeping Himalayan panoramas.'
    }
  },

  // ================= SOUTH INDIA =================
  {
    id: 'kerala',
    name: 'Kerala (Munnar & Alleppey)',
    state: 'Kerala',
    region: 'South',
    tagline: 'God’s Own Country – Backwaters & Tea Hills',
    description: 'Emerald labyrinth of palm-fringed backwaters, traditional Kettuvallam houseboats, misty Munnar tea plantations, and Ayurvedic wellness.',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80', // Kerala Backwaters
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Alleppey (Alappuzha) Houseboat Cruise', 'Munnar Tea Estates & Mattupetty Dam', 'Kochi Fort & Chinese Fishing Nets', 'Varkala Cliff Beach', 'Periyar Wildlife Sanctuary (Thekkady)'],
    bestTimeToVisit: 'September to March (pleasant) or June to August (for authentic Monsoon Ayurveda therapy)',
    estimatedBudget: '₹12,000 – ₹24,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 5,
    tags: ['Backwaters', 'Nature', 'Ayurveda', 'Tea Gardens', 'Beaches'],
    howToReach: {
      byAir: 'Cochin International Airport (COK) – world’s first fully solar-powered airport, or Trivandrum (TRV).',
      byTrain: 'Ernakulam Junction (ERS) and Alappuzha (ALLP) are well served by national railways.',
      byRoad: 'NH 66 and scenic hill routes connect Kochi, Munnar, and Alleppey.'
    },
    localFoodMustTry: ['Kerala Sadya on banana leaf with 24 delicacies', 'Appam with Coconut Milk Stew', 'Karimeen Pollichathu (Pearl spot fish in banana leaf)', 'Malabar Parotta with Beef or Chicken Fry', 'Puttu and Kadala Curry'],
    culturalEtiquetteTips: ['Remove footwear before entering traditional homes and temple premises.', 'Book certified houseboats with green/gold pollution compliance certificates.'],
    weatherHighlights: {
      summer: 'March to May: Warm & humid in coastal plains, cool in Munnar hills.',
      monsoon: 'June to August: Vibrant South-West monsoon rejuvenation.',
      winter: 'October to February: Breezy, cool nights, ideal climate for cruising.'
    },
    sampleTwoDayPlan: {
      day1: 'Overnight cruise on Alleppey backwaters aboard an authentic wooden houseboat, relishing freshly prepared Karimeen fish.',
      day2: 'Drive up into Munnar hills, visit Tata Tea Museum, walk through rolling Kolukkumalai tea terraces.'
    }
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    state: 'Tamil Nadu',
    region: 'South',
    tagline: 'Queen of the Nilgiri Blue Mountains',
    description: 'Charming colonial hill station nestled amidst Nilgiri eucalyptus forests, botanical gardens, tea factories, and the heritage Nilgiri Toy Train.',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80', // Ooty hills
    galleryImages: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Nilgiri Mountain Railway (UNESCO)', 'Ooty Botanical Gardens', 'Doddabetta Peak', 'Pykara Lake & Waterfalls', 'Tea Factory & Chocolate Museum', 'Rose Garden'],
    bestTimeToVisit: 'October to June',
    estimatedBudget: '₹8,000 – ₹15,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Hills', 'Tea Gardens', 'Nature', 'Heritage Train'],
    howToReach: {
      byAir: 'Coimbatore Airport (CJB) is 88 km away with scenic uphill taxi drive.',
      byTrain: 'Mettupalayam Railway Station links to the UNESCO Nilgiri Toy Train.',
      byRoad: 'Ghat road with 36 hairpin bends connecting Coimbatore, Mysore, and Bangalore.'
    },
    localFoodMustTry: ['Fresh homemade Nilgiri chocolates', 'Ooty Varkey (crisp puff pastry)', 'Hot South Indian filter coffee in the cold breeze'],
    culturalEtiquetteTips: ['Plastic bags are strictly banned across Nilgiri district to preserve mountain ecology.', 'Advance booking is required for Nilgiri Mountain Railway seats.'],
    weatherHighlights: {
      summer: 'March to June: Mild (15°C to 20°C).',
      monsoon: 'July to September: Misty rains, lush greens.',
      winter: 'December to February: Crisp and chilly (5°C to 15°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Ride the toy train from Coonoor to Ooty, visit Government Botanical Gardens, boating on Ooty Lake.',
      day2: 'Hike to Doddabetta Peak (highest in Nilgiris), visit Pykara falls and boating, taste fresh artisan chocolates.'
    }
  },
  {
    id: 'mysore',
    name: 'Mysore (Mysuru)',
    state: 'Karnataka',
    region: 'South',
    tagline: 'City of Royal Palaces, Silk & Sandalwood',
    description: 'The regal capital of the Wadiyar dynasty renowned for its illuminated Mysore Palace, aromatic sandalwood, Mysore Pak, and Dasara celebrations.',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010e42e5646?auto=format&fit=crop&w=1200&q=80', // Mysore palace
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397608-f010e42e5646?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Mysore Palace (illuminated by 100,000 bulbs on Sundays)', 'Chamundeshwari Temple (Chamundi Hill)', 'Brindavan Gardens Musical Fountains', 'St. Philomena’s Cathedral', 'Devaraja Market'],
    bestTimeToVisit: 'September to March (October for world-famous Mysore Dasara)',
    estimatedBudget: '₹6,000 – ₹12,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 2,
    tags: ['Royal', 'Heritage', 'Silk', 'Architecture', 'Culture'],
    howToReach: {
      byAir: 'Mysore Airport (MYQ) has regional flights; Bengaluru Kempegowda (BLR, 170 km) is the primary gateway.',
      byTrain: 'Mysuru Junction (MYS) with Vande Bharat Express to Bengaluru and Chennai.',
      byRoad: 'Bengaluru-Mysuru 10-lane Expressway cuts travel time to just ~90 minutes.'
    },
    localFoodMustTry: ['Original Ghee Mysore Pak from Guru Sweets', 'Mysore Masala Dosa with red garlic chutney', 'Mylari Dosa at Hotel Vinayaka Mylari'],
    culturalEtiquetteTips: ['Shoes must be deposited outside Mysore Palace and Chamundeshwari Temple.', 'Buy pure Mysore Silk from KSIC government showrooms with holographic silk mark.'],
    weatherHighlights: {
      summer: 'March to May: Warm days (up to 34°C).',
      monsoon: 'June to September: Pleasant rainfall.',
      winter: 'October to February: Cool and delightful (15°C to 28°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Climb Chamundi Hill to visit Chamundeshwari Temple and see the monolithic Nandi bull, tour the opulent Mysore Palace, evening palace light display.',
      day2: 'Walk Devaraja bazaar for sandalwood, flowers, and spices, visit St. Philomena’s Neo-Gothic cathedral, evening at Brindavan Gardens.'
    }
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    tagline: 'Gateway to South Indian Classical Arts & Temples',
    description: 'Dynamic cultural capital known for Marina Beach, Dravidian temple gopurams of Kapaleeshwarar, Carnatic music season, and Kollywood cinema.',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80', // Chennai / Mahabalipuram
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Kapaleeshwarar Temple (Mylapore)', 'Marina Beach (2nd longest natural urban beach in world)', 'San Thome Basilica', 'Mahabalipuram Shore Temples (UNESCO, 50 km)', 'Government Museum Egmore', 'DakshinaChitra Heritage Village'],
    bestTimeToVisit: 'November to February (Margazhi Carnatic Music Season)',
    estimatedBudget: '₹7,000 – ₹13,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Culture', 'Temples', 'Beach', 'Carnatic Music', 'Heritage'],
    howToReach: {
      byAir: 'Chennai International Airport (MAA) at Meenambakkam connects globally.',
      byTrain: 'Chennai Central (MAS) and Chennai Egmore (MS) are major Southern Railway hubs.',
      byRoad: 'East Coast Road (ECR) offers scenic coastal drives towards Pondicherry.'
    },
    localFoodMustTry: ['Filter Kaapi (degree coffee)', 'Idli-Vada-Sambar at Murugan Idli Shop', 'Chettinad Pepper Chicken', 'Sundal and Fish Fry at Marina Beach'],
    culturalEtiquetteTips: ['Traditional attire (veshti/dhoti or churidar/saree) is mandatory at prominent temples.', 'Footwear is prohibited inside sanctum sanctorum.'],
    weatherHighlights: {
      summer: 'April to June: Hot and humid (35°C to 42°C).',
      monsoon: 'October to December: North-East monsoon brings cooling rains.',
      winter: 'December to February: Mild and pleasant (20°C to 28°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Morning temple architecture walk around Kapaleeshwarar Temple in Mylapore, visit San Thome Cathedral, evening breeze and street snacks at Marina Beach.',
      day2: 'Day trip down East Coast Road to UNESCO World Heritage site Mahabalipuram: Shore Temple, Arjuna’s Penance, and Krishna’s Butter Ball.'
    }
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    region: 'South',
    tagline: 'UNESCO Bouldered Wonder of the Vijayanagara Empire',
    description: 'Surreal landscape of giant granite boulders, monolithic stone chariots, musical pillars, and ruins of the 14th-century Vijayanagara capital.',
    heroImage: 'https://images.unsplash.com/photo-1600100397937-cabb79c4001d?auto=format&fit=crop&w=1200&q=80', // Hampi stone chariot
    galleryImages: [
      'https://images.unsplash.com/photo-1600100397937-cabb79c4001d?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Stone Chariot at Vijaya Vittala Temple', 'Virupaksha Temple', 'Lotus Mahal & Elephant Stables', 'Matanga Hill Sunrise', 'Tungabhadra River Coracle Boat Ride', 'Anjanadri Hill (Birthplace of Lord Hanuman)'],
    bestTimeToVisit: 'October to February',
    estimatedBudget: '₹6,000 – ₹11,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 3,
    tags: ['UNESCO', 'Ancient History', 'Architecture', 'Adventure', 'Photography'],
    howToReach: {
      byAir: 'Jindal Vidyanagar Airport (VDY, 40 km) or Hubballi (HBX, 140 km).',
      byTrain: 'Hosapete Junction (HPT, 13 km) is well connected by Hampi Express from Bengaluru.',
      byRoad: 'KSRTC sleeper buses connect Bengaluru, Goa, and Hyderabad.'
    },
    localFoodMustTry: ['South Indian banana leaf thali', 'Jowar Rotti with brinjal curry', 'Mango Tree Restaurant wood-fired pizza and juices'],
    culturalEtiquetteTips: ['Rent bicycles or electric mopeds to explore the sprawling 41 sq km UNESCO zone responsibly.', 'Carry ample water and wear sturdy walking shoes for bouldering.'],
    weatherHighlights: {
      summer: 'March to May: Scorching granite heat (38°C to 42°C).',
      monsoon: 'July to September: Emerald green moss covers ancient stones.',
      winter: 'October to February: Cool mornings and pleasant afternoons (16°C to 30°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Dawn trek to Matanga Hill for 360-degree sunrise, explore active Virupaksha Temple, coracle boat crossing across Tungabhadra river.',
      day2: 'Visit Vijaya Vittala Temple and its musical pillars, explore the Royal Enclosure, Queen’s Bath, and Lotus Mahal.'
    }
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    state: 'Karnataka',
    region: 'South',
    tagline: 'Scotland of India – Coffee Hills & Kodava Valour',
    description: 'Lush green mist-clad mountains blanketed in Arabica and Robusta coffee plantations, cascading waterfalls, and martial Kodava traditions.',
    heroImage: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80', // Coffee plantation
    galleryImages: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Abbey Falls & Iruppu Falls', 'Raja’s Seat (Panoramic Sunset)', 'Dubare Elephant Camp', 'Namdroling Golden Temple (Bylakuppe Tibetan settlement)', 'Talakaveri (Source of River Cauvery)', 'Tadiandamol Peak Trek'],
    bestTimeToVisit: 'October to March (pleasant) or July to September (for dramatic misty monsoons)',
    estimatedBudget: '₹9,000 – ₹17,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Coffee', 'Hills', 'Waterfalls', 'Trekking', 'Serenity'],
    howToReach: {
      byAir: 'Kannur International Airport (CNN, 90 km) or Mangalore (IXE, 140 km) or Bangalore (BLR, 260 km).',
      byTrain: 'Mysuru Junction (MYS, 120 km) is the nearest major railhead.',
      byRoad: 'Scenic driving highway from Mysuru or Mangalore through Western Ghats.'
    },
    localFoodMustTry: ['Kodava Pandi Curry (Pork with spicy Kachampuli vinegar)', 'Kadambuttu (Steamed rice balls)', 'Coorg wild honey and freshly ground plantation coffee', 'Bamboo Shoot Curry (in monsoon)'],
    culturalEtiquetteTips: ['Stay in authentic plantation homestays to experience genuine Kodava hospitality.', 'Maintain quiet demeanor inside Namdroling Tibetan monastery prayer halls.'],
    weatherHighlights: {
      summer: 'March to May: Moderate and breezy (20°C to 30°C).',
      monsoon: 'June to September: Torrential rains, coffee flowers bloom.',
      winter: 'December to February: Chilly mornings with heavy mist (11°C to 20°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Visit Golden Temple at Bylakuppe Tibetan settlement, head to Dubare Elephant Camp, watch the sunset at Raja’s Seat in Madikeri.',
      day2: 'Coffee plantation walk, trek to Abbey Falls, pilgrimage to sacred Talakaveri on Brahmagiri hill.'
    }
  },

  // ================= EAST INDIA =================
  {
    id: 'odisha-puri',
    name: 'Puri & Odisha Golden Triangle',
    state: 'Odisha',
    region: 'East',
    tagline: 'Sacred Abode of Lord Jagannath & Golden Sands',
    description: 'Spiritual haven of Jagannath Temple, the ancient Rath Yatra chariot procession, serene Bay of Bengal golden beaches, and sand art.',
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80', // Puri / Odisha coast
    galleryImages: [
      'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Jagannath Temple (Mahaprasad 56 Bhog)', 'Golden Beach (Blue Flag certified)', 'Rath Yatra Grand Road (Bada Danda)', 'Sudarsan Sand Art Museum', 'Raghurajpur Heritage Crafts Village (Pattachitra)', 'Chilika Lake (Irrawaddy Dolphins at Satapada)'],
    bestTimeToVisit: 'October to February (June/July for Rath Yatra)',
    estimatedBudget: '₹6,000 – ₹12,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 3,
    tags: ['Spiritual', 'Beaches', 'Handicrafts', 'Culture', 'Wildlife'],
    howToReach: {
      byAir: 'Biju Patnaik International Airport (BBI) in Bhubaneswar (60 km).',
      byTrain: 'Puri Railway Station (PURI) is a terminal station connected by Vande Bharat and express trains.',
      byRoad: 'NH 316 connects Bhubaneswar and Puri in ~1 hour via a smooth 4-lane highway.'
    },
    localFoodMustTry: ['Jagannath Temple Mahaprasad (Khaja, Kanika, Dalma)', 'Chhena Poda (Smoked cottage cheese dessert)', 'Puri Malpua', 'Fresh Bay of Bengal seafood curry'],
    culturalEtiquetteTips: ['Non-Hindus and foreigners cannot enter the main Jagannath temple sanctum; view the temple from Raghunandan Library rooftop.', 'Leather items (belts, wallets) and phones are strictly barred inside temple premises.'],
    weatherHighlights: {
      summer: 'March to June: Warm and humid coastal weather.',
      monsoon: 'July to September: Active monsoon rains.',
      winter: 'November to February: Delightful sea breezes (16°C to 27°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Early darshan at Jagannath Temple and taste sacred Mahaprasad, afternoon relaxation at Blue Flag Golden Beach, evening sand art gallery.',
      day2: 'Visit Raghurajpur heritage crafts village to watch Pattachitra scroll painters, afternoon boat safari into Chilika Lake to spot Irrawaddy dolphins.'
    }
  },
  {
    id: 'konark',
    name: 'Konark',
    state: 'Odisha',
    region: 'East',
    tagline: 'The Monumental 13th-Century Sun Temple',
    description: 'Architectural wonder shaped as a colossal chariot with 24 carved stone wheels pulled by seven horses, celebrating the cosmic Sun God.',
    heroImage: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=1200&q=80', // Konark wheel
    galleryImages: [
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Sun Temple (UNESCO World Heritage Site)', 'Konark Wheel Sundials', 'Chandrabhaga Beach', 'Konark Archaeological Museum', 'Konark Dance Festival (Annual December)', 'Marine Drive Eco Retreat'],
    bestTimeToVisit: 'October to March (December 1-5 for Konark Dance Festival)',
    estimatedBudget: '₹4,000 – ₹8,000 / person',
    budgetCategory: 'Budget',
    idealDurationDays: 1,
    tags: ['UNESCO', 'Sun God', 'Ancient Architecture', 'Beach', 'Dance'],
    howToReach: {
      byAir: 'Bhubaneswar Airport (BBI, 65 km).',
      byTrain: 'Puri (35 km) or Bhubaneswar (65 km).',
      byRoad: 'Puri-Konark Marine Drive is one of India’s most scenic coastal drives through Casuarina forests.'
    },
    localFoodMustTry: ['Chhena Gaja sweet', 'Mudhi Mansa (puffed rice with spiced mutton/chicken)', 'Fresh coconut water at Chandrabhaga Beach'],
    culturalEtiquetteTips: ['Hire certified ASI guides to explain the intricate astronomical calculations of the 24 sundial wheels.', 'Preserve the fragile ancient sandstone carvings—never touch or lean.'],
    weatherHighlights: {
      summer: 'Hot coastal humidity.',
      monsoon: 'Lush greenery, overcast skies.',
      winter: 'Clear blue skies with gentle ocean breeze (15°C to 28°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Sunrise at Chandrabhaga Beach, explore Konark Sun Temple with ASI guide to understand wheel sundial calculations, visit Archaeological Museum.',
      day2: 'Combine with Puri or Bhubaneswar temple circuit (Lingaraj & Mukteshvara).'
    }
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    region: 'East',
    tagline: 'Champagne of Teas & Kanchenjunga Vistas',
    description: 'Iconic hill station famous for world-renowned Muscatel tea, the UNESCO Himalayan Railway toy train, and golden sunrise over Mt. Kanchenjunga.',
    heroImage: 'https://images.unsplash.com/photo-1622308644420-a7d903f6f0f5?auto=format&fit=crop&w=1200&q=80', // Darjeeling tea
    galleryImages: [
      'https://images.unsplash.com/photo-1622308644420-a7d903f6f0f5?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Tiger Hill Sunrise (viewing Mt. Kanchenjunga & Everest)', 'Darjeeling Himalayan Railway (UNESCO Toy Train)', 'Happy Valley Tea Estate', 'Batasia Loop & War Memorial', 'Himalayan Mountaineering Institute & Zoo (Red Pandas)', 'Peace Pagoda'],
    bestTimeToVisit: 'March to May (rhododendrons) and October to December (crystal clear mountain vistas)',
    estimatedBudget: '₹8,000 – ₹16,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Tea Gardens', 'UNESCO Train', 'Himalayas', 'Red Panda', 'Mountains'],
    howToReach: {
      byAir: 'Bagdogra Airport (IXB) is 70 km away with shared or private taxis uphill (3 hours).',
      byTrain: 'New Jalpaiguri (NJP) connects to Kolkata, Delhi, and Guwahati.',
      byRoad: 'Hill Cart Road (NH 110) winds uphill through Kurseong.'
    },
    localFoodMustTry: ['Darjeeling First Flush Tea at Glenary’s Bakery', 'Steamed Tibetan Momos with fiery dalle khursani chili paste', 'Thukpa (Tibetan noodle soup)', 'Churpi (traditional Himalayan hardened cheese)'],
    culturalEtiquetteTips: ['Wake up at 3:30 AM to beat the queue for Tiger Hill sunrise parking.', 'Glenary’s and Keventer’s are legendary heritage eateries—arrive early for terrace seating.'],
    weatherHighlights: {
      summer: 'March to June: Cool and fresh (11°C to 19°C).',
      monsoon: 'July to August: Dense clouds and heavy mountain downpours.',
      winter: 'November to February: Freezing nights (2°C to 10°C), clear skies.'
    },
    sampleTwoDayPlan: {
      day1: 'Early 4:00 AM trip to Tiger Hill for sunrise over Kanchenjunga, stop at Batasia Loop, breakfast at Keventer’s, toy train joyride to Ghum.',
      day2: 'Tea tasting at Happy Valley Tea Estate, visit Himalayan Mountaineering Institute to see Everest expeditions history and Red Pandas at the Zoo.'
    }
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    tagline: 'City of Joy – Literature, Heritage & Flavours',
    description: 'Cultural capital of India, city of Rabindranath Tagore and Mother Teresa, celebrated for colonial palaces, yellow Ambassador taxis, trams, and Durga Puja.',
    heroImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80', // Victoria memorial
    galleryImages: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Victoria Memorial Hall', 'Howrah Bridge over Hooghly River', 'Dakshineswar Kali Temple & Belur Math', 'College Street Boi Para (World’s largest second-hand book market)', 'Indian Museum (Oldest museum in India)', 'Kumartuli (Clay Idol Artisans District)'],
    bestTimeToVisit: 'October to March (October for UNESCO-inscribed Durga Puja festival)',
    estimatedBudget: '₹6,000 – ₹13,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Culture', 'Colonial', 'Literature', 'Foodie', 'Durga Puja'],
    howToReach: {
      byAir: 'Netaji Subhash Chandra Bose International Airport (CCU).',
      byTrain: 'Howrah Junction (HWH) and Sealdah (SDAH) are among the busiest railway stations in the world.',
      byRoad: 'Well connected to eastern and northern highways.'
    },
    localFoodMustTry: ['Bengali Rosogolla (KC Das)', 'Kolkata Biryani with Aloo and boiled egg', 'Kathi Rolls at Nizam’s', 'Macher Jhol (Fish Curry)', 'Mishti Doi and Sandesh', 'Puchka (Water balls) at Vivekananda Park'],
    culturalEtiquetteTips: ['Take a historic electric tram ride—Kolkata operates Asia’s oldest working tram network.', 'During Durga Puja, be prepared for jubilant night pandal-hopping.'],
    weatherHighlights: {
      summer: 'April to June: Hot and humid with Kalbaishakhi thunderstorms.',
      monsoon: 'July to September: Romantic rain-washed boulevards.',
      winter: 'November to February: Breezy and pleasant (12°C to 26°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Morning walk along Princep Ghat on Hooghly river, admire Victoria Memorial and St. Paul’s Cathedral, afternoon coffee at historic Indian Coffee House on College Street.',
      day2: 'Ferry ride from Belur Math to Dakshineswar Kali Temple, visit Kumartuli clay idol artists, evening dinner at Park Street.'
    }
  },
  {
    id: 'sikkim',
    name: 'Sikkim (Gangtok & Pelling)',
    state: 'Sikkim',
    region: 'East',
    tagline: 'Organic Kingdom in the Lap of Kangchenjunga',
    description: 'India’s first 100% organic state, boasting pristine glacial lakes, Tibetan Buddhist monasteries, prayer flags, and dramatic alpine heights.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Sikkim mountains
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Tsomgo (Changu) Glacial Lake & Baba Mandir', 'Nathu La Pass (Indo-China Border, 14,140 ft)', 'Rumtek Monastery', 'MG Marg Gangtok (Pedestrian boulevard)', 'Yumthang Valley of Flowers', 'Gurudongmar Lake (North Sikkim)'],
    bestTimeToVisit: 'March to May (spring blooms) and October to mid-December (clear sky & snow)',
    estimatedBudget: '₹12,000 – ₹22,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 4,
    tags: ['Organic', 'Glacial Lakes', 'Monasteries', 'Borders', 'Himalayas'],
    howToReach: {
      byAir: 'Pakyong Airport (PYG) near Gangtok or Bagdogra Airport (IXB, 120 km) followed by a 4-hour scenic drive along Teesta River.',
      byTrain: 'New Jalpaiguri (NJP) is the main railway link.',
      byRoad: 'NH 10 connects Siliguri to Gangtok.'
    },
    localFoodMustTry: ['Sikkimese Tingmo (Steamed flower bread) with spicy curry', 'Kinema Curry (Fermented soybean delicacy)', 'Sha Phaley (Crispy Tibetan meat pie)', 'Organic bamboo shoot pickles'],
    culturalEtiquetteTips: ['Protected Area Permits (PAP) and Inner Line Permits (ILP) are mandatory for Nathu La and North Sikkim; carry passport photos and photo ID.', 'Sikkim is strictly plastic-free and smoking in public is prohibited.'],
    weatherHighlights: {
      summer: 'April to June: Mild (12°C to 22°C).',
      monsoon: 'July to August: Intense rains and roadblocks.',
      winter: 'December to February: Freezing (sub-zero at high altitudes), snow at Tsomgo.'
    },
    sampleTwoDayPlan: {
      day1: 'Explore MG Marg Gangtok, visit Enchey Monastery and Namgyal Institute of Tibetology, evening ropeway cable car ride over Gangtok valley.',
      day2: 'Day excursion with special permit to sacred Tsomgo Lake at 12,310 ft and historical Indo-China border post at Nathu La Pass.'
    }
  },

  // ================= WEST INDIA =================
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    region: 'West',
    tagline: 'Sun, Sand, Susegad & Portuguese Heritage',
    description: 'Golden tropical beaches, whitewashed Portuguese baroque churches, lively beach shacks, vibrant night markets, and spice plantations.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80', // Goa beach
    galleryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Basilica of Bom Jesus (UNESCO, Old Goa)', 'Palolem Beach & Agonda (South Goa)', 'Anjuna & Vagator Flea Markets', 'Aguada Fort & Lighthouse', 'Dudhsagar Waterfalls', 'Fontainhas Latin Quarter (Panaji)'],
    bestTimeToVisit: 'November to February (festive season) or July to September for tranquil monsoon greenery',
    estimatedBudget: '₹10,000 – ₹22,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 4,
    tags: ['Beaches', 'Portuguese Heritage', 'Nightlife', 'Seafood', 'Susegad'],
    howToReach: {
      byAir: 'Goa International Airport at Dabolim (GOI) and Manohar International Airport at Mopa (GOX).',
      byTrain: 'Madgaon Junction (MAO) and Thivim (THVM) connected by Konkan Railway.',
      byRoad: 'NH 66 links Mumbai and Bengaluru to Goa.'
    },
    localFoodMustTry: ['Goan Fish Curry Rice with raw mango', 'Pork Vindaloo and Chicken Xacuti', 'Bebinca (7-layered Goan coconut dessert)', 'Feni (Cashew/Palm spirit)', 'Poee bread with chorizo sausage'],
    culturalEtiquetteTips: ['Wear appropriate clothing when visiting churches in Old Goa (sleeves and trousers/long skirts).', 'Do not drive scooters under influence; helmet is strictly mandatory.'],
    weatherHighlights: {
      summer: 'March to May: Warm & humid tropical climate.',
      monsoon: 'June to September: Romantic waterfalls and lush paddy fields.',
      winter: 'November to February: Ideal balmy sunshine and cool beach nights (20°C to 30°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Heritage walk in Fontainhas Latin Quarter with colorful Portuguese villas, visit Basilica of Bom Jesus in Old Goa, sunset cruise on Mandovi River.',
      day2: 'South Goa beach hopping: relax at crescent Palolem Beach, kayak at Cola Beach lagoon, fresh seafood dinner at a beach shack.'
    }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    tagline: 'The Maximum City of Dreams & Coastal Hustle',
    description: 'Financial capital of India, home of Bollywood, grand Victorian Gothic architecture, the iconic Gateway of India, and Marine Drive’s Queen’s Necklace.',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80', // Gateway of India
    galleryImages: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Gateway of India', 'Marine Drive (Queen’s Necklace)', 'Chhatrapati Shivaji Maharaj Terminus (CSMT, UNESCO)', 'Elephanta Caves (UNESCO, ferry from Gateway)', 'Bandra Bandstand & Sea Link', 'Colaba Causeway Shopping'],
    bestTimeToVisit: 'October to March',
    estimatedBudget: '₹9,000 – ₹20,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Metropolis', 'Colonial Architecture', 'Bollywood', 'Coastal', 'Street Food'],
    howToReach: {
      byAir: 'Chhatrapati Shivaji Maharaj International Airport (BOM) with T1 & world-class T2.',
      byTrain: 'CSMT, Mumbai Central (MMCT), and Bandra Terminus (BDTS).',
      byRoad: 'Mumbai-Pune Expressway, Mumbai-Nagpur Samruddhi Mahamarg.'
    },
    localFoodMustTry: ['Vada Pav (The soul burger of Mumbai)', 'Pav Bhaji at Sardar Refreshments or Cannon', 'Irani Chai & Bun Maska at Britannia & Co.', 'Bombay Duck (Bombil) Fry', 'Bhelpuri at Chowpatty Beach'],
    culturalEtiquetteTips: ['Local trains during peak office hours (8:30-10:30 AM & 6:00-8:30 PM) are intensely crowded; travel mid-day if sightseeing.', 'Metered black-and-yellow taxis and auto-rickshaws run strictly by digital meter.'],
    weatherHighlights: {
      summer: 'March to May: Hot and humid.',
      monsoon: 'June to September: Epic Mumbai rains with high tides along Marine Drive.',
      winter: 'December to February: Mild and pleasant coastal weather (18°C to 30°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Gateway of India, ferry to ancient rock-cut Elephanta Caves, heritage walk around Colaba and Fort area, sunset sitting on Marine Drive tetrapods.',
      day2: 'Tour Victorian CSMT terminus, drive over Bandra-Worli Sea Link, visit Haji Ali Dargah, evening Bollywood spotting and cafes in Bandra.'
    }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    state: 'Rajasthan',
    region: 'West',
    tagline: 'City of Lakes & Venice of the East',
    description: 'Romantic oasis surrounded by Aravalli mountains, shimmering Lake Pichola, floating white marble Lake Palace, and royal Mewar dynasties.',
    heroImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80', // Udaipur Lake Pichola
    galleryImages: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['City Palace Complex', 'Lake Pichola Boat Cruise & Jag Mandir', 'Taj Lake Palace', 'Saheliyon-ki-Bari', 'Bagore Ki Haveli (Dharohar Folk Dance)', 'Monsoon Palace (Sajjangarh)'],
    bestTimeToVisit: 'September to March',
    estimatedBudget: '₹9,000 – ₹19,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Romance', 'Lakes', 'Palaces', 'Royal Heritage', 'Folk Dance'],
    howToReach: {
      byAir: 'Maharana Pratap Airport (UDR) at Dabok (22 km) connects to Delhi, Mumbai, and Jaipur.',
      byTrain: 'Udaipur City Railway Station (UDZ) connects directly to Delhi, Mumbai, and Ahmedabad.',
      byRoad: 'NH 48 connects Udaipur with Jaipur and Ahmedabad.'
    },
    localFoodMustTry: ['Gatte ki Sabzi with Bajra Roti', 'Ker Sangri (Desert berry delicacy)', 'Dal Baati Churma at Krishna Dal Bati', 'Kachori at Jagdish Chowk'],
    culturalEtiquetteTips: ['Book Lake Pichola sunset boat ride tickets well in advance.', 'Attend the 7:00 PM Dharohar folk dance show at Bagore Ki Haveli for authentic Rajasthani puppetry and Chari dance.'],
    weatherHighlights: {
      summer: 'April to June: Warm desert sun.',
      monsoon: 'July to September: Romantic lake levels fill up, hills turn emerald.',
      winter: 'October to February: Cool breezes over lakes, starry skies (10°C to 27°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Explore the grand Mewar City Palace, take a boat ride on Lake Pichola around Jag Mandir, evening cultural dance show at Bagore Ki Haveli.',
      day2: 'Visit the peaceful fountain gardens of Saheliyon-ki-Bari, climb to Sajjangarh Monsoon Palace for sunset over the Aravallis, dinner by the lake ghats.'
    }
  },
  {
    id: 'rann-of-kutch',
    name: 'Rann of Kutch',
    state: 'Gujarat',
    region: 'West',
    tagline: 'The White Salt Desert & Rann Utsav Spectacle',
    description: 'Enchanting endless expanse of white salt desert shining under full moon nights, artisan villages, Rogan art, and the vibrant Rann Utsav tent city.',
    heroImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80', // Kutch white desert
    galleryImages: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Great Rann White Desert (Full Moon experience)', 'Rann Utsav at Dhordo Tent City', 'Kalo Dungar (Black Hill – highest point)', 'Nirona Artisan Village (Rogan Art & Copper Bells)', 'Dholavira (Harappan UNESCO Site)', 'Mandvi Beach & Vijay Vilas Palace'],
    bestTimeToVisit: 'November to February (Rann Utsav festival period)',
    estimatedBudget: '₹11,000 – ₹22,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Desert', 'Salt Flats', 'Full Moon', 'Artisan Crafts', 'Harappan'],
    howToReach: {
      byAir: 'Bhuj Airport (BHJ) connects with Mumbai and Ahmedabad.',
      byTrain: 'Bhuj Railway Station (BHUJ) is well connected by express trains from Delhi and Mumbai.',
      byRoad: 'Taxis and tourist buses ply from Bhuj to Dhordo (85 km, 1.5 hours).'
    },
    localFoodMustTry: ['Authentic Kutchi Thali', 'Kutchi Dabeli (the original spiced potato bun)', 'Khaman Dhokla', 'Fresh Mawa sweet of Khavda'],
    culturalEtiquetteTips: ['Indian and foreign nationals must obtain a border permit to enter the White Desert; available online or at Bhirandiyara checkpoint.', 'Respect traditional artisan families demonstrating 300-year-old Rogan art in Nirona.'],
    weatherHighlights: {
      summer: 'March to June: Inhospitable desert heat (45°C+).',
      monsoon: 'July to September: Submerged under seawater.',
      winter: 'November to February: Dry, crisp days (12°C to 25°C) and chilly desert nights (down to 5°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Drive from Bhuj to Dhordo, visit artisan village of Nirona, late afternoon walk onto the blinding White Rann, watch sunset and moonrise over salt crystals.',
      day2: 'Climb Kalo Dungar for panoramic view of the Great Rann, visit the ancient 4500-year-old Indus Valley metropolis of Dholavira.'
    }
  },

  // ================= NORTHEAST INDIA =================
  {
    id: 'meghalaya',
    name: 'Meghalaya (Shillong & Cherrapunji)',
    state: 'Meghalaya',
    region: 'Northeast',
    tagline: 'Abode of Clouds & Living Root Bridges',
    description: 'Enchanting rainforest highlands, crystal-clear Umngot river at Dawki, roaring Nohkalikai Falls, and centuries-old bio-engineered living root bridges.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Living root bridge / Meghalaya waterfall
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Double Decker Living Root Bridge (Nongriat)', 'Dawki Umngot River (Glass-like transparent water)', 'Nohkalikai Falls (India’s tallest plunge waterfall)', 'Mawsmai & Arwah Limestone Caves', 'Mawlynnong (Asia’s Cleanest Village)', 'Umiam Lake & Shillong Peak'],
    bestTimeToVisit: 'October to April (clear sunny weather) or June to September (for raging monsoon waterfalls)',
    estimatedBudget: '₹11,000 – ₹20,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 4,
    tags: ['Nature', 'Living Root Bridges', 'Cleanest Village', 'Waterfalls', 'Caves'],
    howToReach: {
      byAir: 'Shillong Airport at Umroi (limited) or Guwahati Airport (GAU, 120 km) with 3-hour picturesque highway cab.',
      byTrain: 'Guwahati Railway Station (GHY) is the major railhead.',
      byRoad: 'Guwahati-Shillong 4-lane expressway provides smooth transit through pine-covered slopes.'
    },
    localFoodMustTry: ['Khasi Jadoh (Rice cooked with meat and aromatic herbs)', 'Dohkhlieh (Pork salad with onions and chilies)', 'Tungrymbai (Fermented soybean delicacy)', 'Bamboo shoot chicken', 'Pineapple from local roadside farmers'],
    culturalEtiquetteTips: ['Mawlynnong is maintained impeccably by villagers—use bamboo dustbins; zero plastic tolerance.', 'The trek to Nongriat Double Decker bridge has ~3,500 stairs each way; carry hydration and good grip shoes.'],
    weatherHighlights: {
      summer: 'March to May: Pleasant and breezy (15°C to 24°C).',
      monsoon: 'June to September: Cherrapunji and Mawsynram receive the highest rainfall on Earth.',
      winter: 'November to February: Crisp and sunny days, cool evenings (6°C to 16°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Drive to Cherrapunji (Sohra), marvel at Nohkalikai Falls, explore limestone formations inside Mawsmai Cave, visit Seven Sisters Falls.',
      day2: 'Early morning boat ride on the crystal-clear glass waters of Umngot River in Dawki, stroll through flower-lined pathways of Mawlynnong village.'
    }
  },
  {
    id: 'assam',
    name: 'Assam (Kaziranga & Majuli)',
    state: 'Assam',
    region: 'Northeast',
    tagline: 'Home of the One-Horned Rhino & Mighty Brahmaputra',
    description: 'Lush tea gardens, the mighty Brahmaputra river, Majuli (world’s largest river island), and the UNESCO sanctuary preserving two-thirds of the world’s one-horned rhinos.',
    heroImage: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80', // Kaziranga rhino
    galleryImages: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Kaziranga National Park (UNESCO – One-Horned Rhinoceros)', 'Majuli Island (World’s largest river island & Neo-Vaishnavite Satras)', 'Kamakhya Temple (Guwahati)', 'Brahmaputra Sunset Cruise', 'Assam Tea Estates (Jorhat & Tezpur)', 'Manas National Park'],
    bestTimeToVisit: 'November to April (National Parks are open; closed during monsoon floods)',
    estimatedBudget: '₹9,000 – ₹18,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 4,
    tags: ['Wildlife', 'UNESCO', 'River Island', 'Tea Estates', 'Rhino Safari'],
    howToReach: {
      byAir: 'Guwahati Airport (GAU) or Jorhat Airport (JRH, 95 km from Kaziranga).',
      byTrain: 'Furkating (FKG) or Guwahati (GHY).',
      byRoad: 'NH 715 passes through Kaziranga National Park connecting Guwahati and Jorhat.'
    },
    localFoodMustTry: ['Assamese Masor Tenga (Tangy sour fish curry with elephant apple or tomato)', 'Khaar (Alkaline preparation with raw papaya)', 'Duck meat with Ash Gourd', 'Pitha sweet cakes during Bihu', 'Strong Assam orthodox CTC tea'],
    culturalEtiquetteTips: ['Book morning elephant and jeep safari slots in Kaziranga’s Central (Kohora) or Western (Bagori) ranges.', 'Show respect inside Vaishnavite Satras on Majuli island.'],
    weatherHighlights: {
      summer: 'March to May: Humid and warm.',
      monsoon: 'June to September: Heavy Brahmaputra floods submerge grasslands for natural rejuvenation.',
      winter: 'November to March: Misty, pleasant safaris with high animal visibility (10°C to 24°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Early 5:30 AM elephant safari in Bagori range to spot Great Indian Rhinos grazing in tall elephant grass, afternoon jeep safari in Kohora range.',
      day2: 'Ferry across Brahmaputra to Majuli Island: visit mask-making artisans at Samaguri Satra and experience spiritual Sattriya monastic dance.'
    }
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh (Tawang)',
    state: 'Arunachal Pradesh',
    region: 'Northeast',
    tagline: 'Land of Dawn-Lit Mountains & Tawang Monastery',
    description: 'Mystical Himalayan borderland featuring Sela Pass at 13,700 ft, India’s largest Buddhist monastery at Tawang, pristine glacial lakes, and Monpa culture.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Arunachal monastery / mountain
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Tawang Monastery (Galden Namgey Lhatse – 400 years old)', 'Sela Pass & Sela Lake (13,700 ft)', 'Madhuri (Sangetsar) Lake', 'Jaswant Garh War Memorial', 'Nuranang (Bong Bong) Waterfalls', 'Bum La Pass (Indo-China Border)'],
    bestTimeToVisit: 'March to June (warm with rhododendrons) or September to November (crisp clear mountain air)',
    estimatedBudget: '₹14,000 – ₹26,000 / person',
    budgetCategory: 'Luxury',
    idealDurationDays: 5,
    tags: ['Himalayan Border', 'Monastery', 'Snow Pass', 'Adventure', 'Offbeat'],
    howToReach: {
      byAir: 'Tezpur Airport (TEZ, 320 km) or Guwahati Airport (GAU, 450 km). Helicopter services operate between Guwahati and Tawang subject to weather.',
      byTrain: 'Rangapara North (RPAN) near Tezpur.',
      byRoad: 'Road journey via newly inaugurated Sela Tunnel ensures all-weather access.'
    },
    localFoodMustTry: ['Thukpa and Gyapa Khazi (Monpa style fried rice)', 'Zan (Finger millet porridge with vegetables)', 'Chura Sabzi (Fermented cheese with chilies)', 'Butter tea (Suja)'],
    culturalEtiquetteTips: ['Inner Line Permit (ILP) is strictly mandatory for all Indian tourists; Protected Area Permit (PAP) for foreign nationals.', 'Bum La Pass requires additional clearance from DC office in Tawang and Army Brigade.'],
    weatherHighlights: {
      summer: 'May to June: Cool mountain air (12°C to 20°C).',
      monsoon: 'July to August: Heavy rains, landslide cautions.',
      winter: 'December to February: Heavy snowfall, sub-zero temperatures (-8°C to 5°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Drive through the snowy Sela Pass, pay respects at Jaswant Garh War Memorial, witness the thunderous Nuranang Waterfalls, arrive in Tawang.',
      day2: 'Morning prayer chants at Tawang Monastery, visit the Urgelling Gompa (birthplace of 6th Dalai Lama), afternoon trip to Madhuri Lake.'
    }
  },
  {
    id: 'nagaland',
    name: 'Nagaland (Kohima & Dzukou)',
    state: 'Nagaland',
    region: 'Northeast',
    tagline: 'Land of Festivals, Hornbill & Dzukou Valley',
    description: 'Mountain state famed for brave Naga warrior traditions, the world-famous Hornbill Festival, Dzukou Valley bamboo lilies, and Khonoma green village.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Nagaland hills
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Hornbill Festival (Kisama Heritage Village – Dec 1-10)', 'Dzukou Valley (Trekker’s paradise of rolling bamboo meadows)', 'Kohima War Cemetery (WWII)', 'Khonoma Green Village (Asia’s 1st green village)', 'State Museum Kohima'],
    bestTimeToVisit: 'October to May (December 1-10 is the pinnacle Hornbill Festival)',
    estimatedBudget: '₹10,000 – ₹20,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 4,
    tags: ['Hornbill Festival', 'Tribal Culture', 'Trekking', 'Green Village', 'Adventure'],
    howToReach: {
      byAir: 'Dimapur Airport (DMU, 74 km from Kohima).',
      byTrain: 'Dimapur Railway Station (DMV) connects to Guwahati and Kolkata.',
      byRoad: 'NH 29 connects Dimapur to Kohima in ~2.5 hours.'
    },
    localFoodMustTry: ['Smoked Pork cooked with Fermented Bamboo Shoot and Raja Mircha (Bhut Jolokia)', 'Axone (Fermented soybean delicacy)', 'Galho (Naga soupy rice with greens and meat)', 'Zutho (Traditional Naga rice brew)'],
    culturalEtiquetteTips: ['Inner Line Permit (ILP) is required for domestic visitors to enter Nagaland.', 'Respect tribal traditions and ask permission before photographing village elders.'],
    weatherHighlights: {
      summer: 'April to June: Mild (18°C to 26°C).',
      monsoon: 'July to September: Wet hills with lush vegetation.',
      winter: 'November to February: Crisp and chilly (4°C to 18°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Experience the 16 major Naga tribes celebrating their folk songs, dances, and archery at Kisama Heritage Village during Hornbill Festival.',
      day2: 'Tour Khonoma Green Village to learn about indigenous forest conservation and sustainable terraced rice farming.'
    }
  },
  {
    id: 'manipur',
    name: 'Manipur (Imphal & Loktak)',
    state: 'Manipur',
    region: 'Northeast',
    tagline: 'Jewel of India – Floating Phumdis & Sangai Deer',
    description: 'Pristine valley surrounded by nine hill ranges, hosting Loktak Lake (the world’s only floating national park) and birthplace of modern Polo.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80', // Loktak Lake
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    ],
    famousAttractions: ['Loktak Lake & Floating Phumdis', 'Keibul Lamjao National Park (Only floating park in the world, home to Sangai Dancing Deer)', 'Ima Keithel (Mother’s Market – 500-year-old all-women operated market)', 'Kangla Fort', 'INA Memorial at Moirang (Where Netaji Subhas Chandra Bose hoisted the Tricolour in 1944)'],
    bestTimeToVisit: 'October to April (November for Manipur Sangai Festival)',
    estimatedBudget: '₹9,000 – ₹18,000 / person',
    budgetCategory: 'Moderate',
    idealDurationDays: 3,
    tags: ['Floating Lake', 'Sangai Deer', 'All-Women Market', 'Polo Origin', 'History'],
    howToReach: {
      byAir: 'Bir Tikendrajit International Airport (IMF) in Imphal connects to Kolkata, Guwahati, and Delhi.',
      byTrain: 'Jiribam is the rail link; Dimapur (200 km) is the primary broad-gauge station.',
      byRoad: 'NH 2 connects Kohima to Imphal.'
    },
    localFoodMustTry: ['Eromba (Mashed boiled vegetables, fermented fish Ngari, and King Chili)', 'Kangshoi (Nutritious vegetable stew)', 'Singju (Spicy raw vegetable and herb salad)', 'Chak-hao Kheer (Black aromatic rice pudding)'],
    culturalEtiquetteTips: ['Ima Keithel is run entirely by over 5,000 married Manipuri women—be courteous and respectful of their historic cooperative rules.', 'ILP permit is required to enter Manipur.'],
    weatherHighlights: {
      summer: 'March to May: Moderate and breezy (16°C to 28°C).',
      monsoon: 'June to September: Moderate rainfall.',
      winter: 'November to February: Cool and pleasant (6°C to 22°C).'
    },
    sampleTwoDayPlan: {
      day1: 'Explore historic Kangla Fort, wander through vibrant Ima Keithel women’s market, taste purple black-rice Chak-hao kheer.',
      day2: 'Day trip to Loktak Lake: ride traditional wooden canoes around floating Phumdi rings, spot the rare brow-antlered Sangai deer in Keibul Lamjao National Park.'
    }
  }
];
