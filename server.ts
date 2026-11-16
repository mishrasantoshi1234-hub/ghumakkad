/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Full Stack Express Server with Gemini 3.8 Flash Integration
 */

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
    console.log('[GHUMAKKAD Server] Gemini AI client initialized successfully with gemini-3.8-flash.');
  } catch (err) {
    console.warn('[GHUMAKKAD Server] Failed to initialize GoogleGenAI client:', err);
  }
} else {
  console.log('[GHUMAKKAD Server] GEMINI_API_KEY not configured. Running with built-in intelligent India Travel Knowledge Engine.');
}

// Fallback intelligent response generator for common queries
function generateKnowledgeBaseResponse(userMessage: string): { reply: string; followUps: string[]; isVerified: boolean } {
  const query = userMessage.toLowerCase();

  if (query.includes('5-day') && query.includes('rajasthan')) {
    return {
      reply: `Namaste! 🙏 Here is a curated 5-Day Royal Rajasthan Itinerary covering the Golden Triangle & Desert Royalty:

• **Day 1: Arrival in Jaipur (Pink City)** – Explore the honeycomb windows of Hawa Mahal, delve into Jantar Mantar observatory, and experience sunset panoramic views from Nahargarh Fort.
• **Day 2: Royal Palaces of Jaipur** – Ascend Amber Fort, tour City Palace complex, and feast on traditional Dal Baati Churma at Rawat Mishthan Bhandar.
• **Day 3: Scenic Drive to Jodhpur (The Blue City)** – Stop at the sacred town of Pushkar and its holy lake. Reach Jodhpur and explore the majestic Mehrangarh Fort towering 400 feet above the blue cubical houses.
• **Day 4: Jodhpur to Udaipur (City of Lakes)** – En route visit the intricately carved marble Ranakpur Jain Temple. Arrive in Udaipur and enjoy a sunset boat cruise on Lake Pichola overlooking Jag Mandir.
• **Day 5: Romantic Udaipur** – Tour the sprawling Mewar City Palace, stroll through the gardens of Saheliyon-ki-Bari, and attend the Dharohar folk dance show at Bagore Ki Haveli.

💡 *Budget Tip:* Estimated ₹18,000 – ₹25,000 per person including mid-range heritage stays, car transit, and entry tickets.`,
      followUps: ['Suggest budget hotels in Jaipur', 'What famous street food should I try in Jodhpur?', 'How to travel between Jaipur and Udaipur?'],
      isVerified: true
    };
  }

  if (query.includes('odisha') || query.includes('puri')) {
    return {
      reply: `Namaste! 🙏 Odisha is a treasure of spirituality, art, and coastal serenity. Here are the top must-visit places in the Odisha Golden Triangle:

1. **Puri Jagannath Temple** – One of the Char Dhams of Hinduism, famed for its ancient rituals, the monumental annual Rath Yatra, and divine Mahaprasad cooked in earthen pots.
2. **Konark Sun Temple (UNESCO)** – A 13th-century architectural marvel designed as a gigantic 24-wheeled chariot pulled by 7 stone horses, with precision sundials.
3. **Bhubaneswar (Temple City)** – Home to Lingaraj Temple, 7th-century Mukteshvara Temple ("Gem of Odia architecture"), and Khandagiri & Udayagiri Jain rock-cut caves.
4. **Chilika Lake (Satapada)** – Asia's largest brackish lagoon where you can spot endangered Irrawaddy dolphins and migratory Siberian birds.
5. **Raghurajpur Crafts Village** – Heritage village where every home is an art studio practicing centuries-old Pattachitra palm-leaf scroll painting.

🍲 *Culinary Highlight:* Don't miss the famous Odia dessert **Chhena Poda** (slow-baked caramelized cottage cheese) and steaming Dalma!`,
      followUps: ['Best time to visit Konark and Puri', 'What is the dress code at Jagannath Temple?', 'How to reach Puri from Bhubaneswar?'],
      isVerified: true
    };
  }

  if (query.includes('under ₹10,000') || query.includes('under 10000') || query.includes('budget') || query.includes('cheap')) {
    return {
      reply: `Namaste! India offers phenomenal budget travel where ₹10,000 can easily cover an unforgettable 3 to 4-day journey:

1. **Varanasi, Uttar Pradesh (₹5,000 – ₹8,000 for 3 Days)**
   • Stay in charming riverside hostels near Assi Ghat (₹600–₹1,000/night).
   • Free Ganga Aarti, inexpensive wooden boat rides (₹200–₹400), and legendary street food (Kachori sabzi, Tamatar chaat, Malaiyo for ₹50–₹100).

2. **Rishikesh, Uttarakhand (₹6,000 – ₹9,000 for 3 Days)**
   • Yoga retreats, beach camping, Ganga river rafting (₹600–₹1,000 per person), and serene evening aarti at Parmarth Niketan.

3. **Puri & Konark, Odisha (₹6,000 – ₹8,500 for 3 Days)**
   • Direct trains from Kolkata/Delhi, affordable beachside lodges, Blue Flag beach, and Konark Sun Temple entry for just ₹40.

4. **Hampi, Karnataka (₹5,500 – ₹8,500 for 3 Days)**
   • Rent a bicycle or moped (₹150–₹350/day) to tour the UNESCO ruins, stay in Hippie Island guesthouses, and enjoy hearty South Indian meals.

💡 *Pro Tip:* Use Sleeper or 3-Tier AC Indian Railways to save significantly on travel and night accommodation!`,
      followUps: ['Show hostels in Varanasi', 'How to reach Hampi by train?', 'What are safety tips for solo budget travelers?'],
      isVerified: true
    };
  }

  if (query.includes('kerala') && (query.includes('food') || query.includes('dish') || query.includes('eat'))) {
    return {
      reply: `Namaste! Kerala’s cuisine ("God's Own Food") is an aromatic harmony of fresh coconut, black pepper, curry leaves, and coastal spices. Here is what you MUST try:

• **Kerala Sadya:** The ultimate vegetarian feast served on a banana leaf with red Matta rice, Avial, Sambar, Olan, Kaalan, Thoran, and Payasam.
• **Appam with Ishtu (Stew):** Laced, fluffy fermented rice hoppers with a soft spongy centre, dipped in aromatic coconut milk vegetable or chicken stew.
• **Karimeen Pollichathu:** Fresh Pearl Spot fish marinated in fiery ground shallots and spices, wrapped tightly in banana leaf, and pan-fried.
• **Malabar Parotta with Beef or Chicken Roast:** Flaky, multi-layered spiral flatbread paired with rich caramelized onion and black pepper gravy.
• **Puttu and Kadala Curry:** Steamed cylindrical rice cakes layered with grated coconut served with black chickpea curry.

☕ *Drink:* Sip a glass of steaming hot Sulaimani (spiced black tea with lemon and cardamom) after your meal!`,
      followUps: ['Best places to eat Sadya in Kochi', 'What are top Kerala backwater itineraries?', 'When is the best season to visit Munnar?'],
      isVerified: true
    };
  }

  if (query.includes('kashmir') || query.includes('srinagar')) {
    return {
      reply: `Namaste! Kashmir is truly "Paradise on Earth". 

• **Best Season:**
  - *Spring/Summer (April to August):* Perfect for Dal Lake Shikaras, blooming Tulip Garden (April in Srinagar), and green alpine meadows.
  - *Winter (December to February):* For snow lovers and skiers heading to Gulmarg (Gondola Phase 2 reaches 13,780 ft).
• **Key Highlights:** Dal Lake Houseboat stay, Nishat & Shalimar Mughal Gardens, Betaab Valley in Pahalgam, and Sonamarg glaciers.
• **What to Eat:** Kashmiri Wazwan (Rogan Josh, Gushtaba), Nadru Yakhni (lotus stem), and aromatic Kahwa tea with crushed saffron and almonds.`,
      followUps: ['How to book Gulmarg Gondola tickets?', 'Is it safe to travel to Kashmir?', 'Plan a 4-day itinerary for Srinagar'],
      isVerified: true
    };
  }

  // Default welcoming tourism guidance
  return {
    reply: `Namaste! 🙏 Welcome to GHUMAKKAD – Your Intelligent Travel Companion.

I am here to help you discover the magic of India:
• **Destination Ideas:** From the snowy peaks of Kashmir and Himachal, to the royal palaces of Rajasthan, the spiritual ghats of Varanasi, the lush backwaters of Kerala, the ancient temples of Odisha, to the living root bridges of Meghalaya!
• **Trip Planning:** Tell me your starting city, budget, number of days, and interests (History, Nature, Beaches, Food, or Spirituality), and I will build a tailored itinerary.
• **Practical Tips:** Train classes (IRCTC), UPI digital payments, local customs, and verified emergency assistance (Dial 112 or Tourist Helpline 1363).

Where would you like to travel today?`,
    followUps: [
      'Which places should I visit in India?',
      'Plan a 5-day trip to Rajasthan.',
      'What are the best places to visit in Odisha?',
      'Suggest destinations under ₹10,000.',
      'What famous food should I try in Kerala?'
    ],
    isVerified: true
  };
}

// ================= API ENDPOINTS =================

// 1. Health & status check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    appName: 'GHUMAKKAD – Your Intelligent Travel Companion',
    hasGeminiKey: Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY'),
    model: 'gemini-3.8-flash'
  });
});

// 2. Chat Endpoint with Gemini 3.8 Flash
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // If Gemini client is active, query the real Gemini model
    if (aiClient) {
      try {
        const systemPrompt = `You are "Ghumakkad AI", an intelligent, courteous, and culturally knowledgeable Indian tourism guide.
Greet visitors warmly with Indian hospitality ("Namaste! Atithi Devo Bhava - Guest is God").
Your mission is to help Indian and international tourists explore India safely, respectfully, and delightfully.
Guidelines:
1. Provide practical, accurate, and vivid travel recommendations for destinations across North, South, East, West, and Northeast India.
2. When asked for itineraries, structure them day-by-day with morning, afternoon, and evening recommendations.
3. Suggest authentic regional culinary dishes and explain their cultural context.
4. Provide realistic INR budget estimates and clear transportation choices (IRCTC rail, flights, local metro, auto-rickshaws).
5. Always highlight respect for local customs, attire decorum at sacred sites, and eco-friendly tourism.
6. Clearly distinguish between verified travel advice (e.g., official helpline 1363, 112 emergency, official ticket booking portals like IRCTC) and AI personalized suggestions. Do not invent fake train schedules or false opening hours.
7. Keep your tone polite, warm, engaging, and easy to understand.`;

        // Format recent messages for context
        let fullPrompt = `${message}`;
        if (Array.isArray(history) && history.length > 0) {
          const recentContext = history.slice(-4).map((h: any) => `${h.sender === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
          fullPrompt = `Recent Conversation Context:\n${recentContext}\n\nCurrent User Query: ${message}`;
        }

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: fullPrompt,
          config: {
            systemInstruction: systemPrompt,
          }
        });

        const replyText = response.text || 'Namaste! I could not generate a response. Please try again.';

        return res.json({
          reply: replyText,
          isAiGenerated: true,
          model: 'gemini-3.8-flash',
          suggestedFollowUps: [
            'What is the best time of year to visit?',
            'What local delicacies must I try there?',
            'How should I budget for this trip?'
          ]
        });
      } catch (geminiError: any) {
        console.error('[Gemini API Call Error]:', geminiError?.message || geminiError);
        // Fall back gracefully to internal knowledge base
        const fallback = generateKnowledgeBaseResponse(message);
        return res.json({
          reply: fallback.reply,
          isAiGenerated: false,
          fallbackReason: 'Switched to offline Indian tourism engine',
          suggestedFollowUps: fallback.followUps
        });
      }
    }

    // If no API key configured, use built-in smart knowledge engine
    const kb = generateKnowledgeBaseResponse(message);
    return res.json({
      reply: kb.reply,
      isAiGenerated: false,
      model: 'smart-tourism-engine',
      suggestedFollowUps: kb.followUps
    });

  } catch (error: any) {
    console.error('[Server /api/chat Error]:', error);
    res.status(500).json({ error: 'Failed to process tourism query' });
  }
});

// 3. Plan My Trip Endpoint
app.post('/api/plan-trip', async (req, res) => {
  try {
    const {
      startingLocation,
      destination,
      travelDate,
      numberOfTravellers = 1,
      numberOfDays = 3,
      budgetCategory = 'Moderate',
      preferences = [],
      pace = 'Balanced'
    } = req.body;

    if (!destination) {
      return res.status(400).json({ error: 'Destination is required' });
    }

    const travellers = Math.max(1, Number(numberOfTravellers) || 1);
    const days = Math.min(14, Math.max(1, Number(numberOfDays) || 3));

    // Calculate realistic financial breakdown
    const dailyRates: Record<string, number> = {
      Budget: 2200,
      Moderate: 4500,
      Luxury: 9500
    };
    const ratePerDay = dailyRates[budgetCategory] || 4500;
    const totalCost = ratePerDay * days * travellers;

    const accommodationTotal = Math.round(totalCost * 0.40);
    const foodTotal = Math.round(totalCost * 0.25);
    const transportTotal = Math.round(totalCost * 0.20);
    const activitiesTotal = Math.round(totalCost * 0.15);

    // If Gemini is available, we can ask it for a customized day-wise schedule
    if (aiClient) {
      try {
        const prompt = `Generate a detailed ${days}-day travel itinerary for visiting ${destination} starting from ${startingLocation || 'Delhi'}.
Number of travellers: ${travellers}.
Budget Tier: ${budgetCategory}.
Travel Preferences: ${preferences.join(', ') || 'Culture, Food, Sightseeing'}.
Pace: ${pace}.

Provide a response in JSON format conforming to this structure:
{
  "dayWisePlan": [
    {
      "day": 1,
      "title": "Short title for Day 1",
      "morning": { "place": "Name of morning place", "activity": "What to do", "tips": "Practical tip" },
      "afternoon": { "place": "Name of afternoon place", "activity": "What to do", "tips": "Practical tip" },
      "evening": { "place": "Name of evening place", "activity": "What to do", "tips": "Practical tip" },
      "foodRecommendation": { "lunch": "Recommended dish/place", "dinner": "Recommended dinner", "mustTryStreetFood": "Snack to try" },
      "estimatedDayCost": ${Math.round(totalCost / days)}
    }
  ],
  "transportationAdvice": {
    "howToReach": "How to reach from ${startingLocation || 'major cities'}",
    "localTransitTips": "Local cabs, metro, or auto advice",
    "recommendedTravelPass": "Optional transit card"
  },
  "culturalSafetyNotes": [
    "Attire advice",
    "Safety tip",
    "Local custom tip"
  ],
  "packingEssentials": [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
}`;

        const response = await aiClient.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            systemInstruction: 'You are an expert Indian itinerary architect. Output strictly valid JSON without markdown wrapping.'
          }
        });

        const rawText = (response.text || '').trim();
        const parsed = JSON.parse(rawText);

        return res.json({
          destination,
          startingLocation: startingLocation || 'Delhi',
          totalDays: days,
          travellers,
          budgetTier: budgetCategory,
          estimatedTotalExpense: {
            totalINR: totalCost,
            accommodationINR: accommodationTotal,
            foodINR: foodTotal,
            transportINR: transportTotal,
            activitiesINR: activitiesTotal
          },
          transportationAdvice: parsed.transportationAdvice || {
            howToReach: `Direct trains and flights connect ${startingLocation || 'major hubs'} to ${destination}.`,
            localTransitTips: 'Use pre-paid taxi counters, ride-hailing apps (Ola/Uber) or metro where available.'
          },
          culturalSafetyNotes: parsed.culturalSafetyNotes || [
            'Dress modestly when entering religious and sacred premises.',
            'Keep small currency notes handy for autorickshaws and rural tea stalls.',
            'Drink bottled or RO-purified water and avoid ice at untrusted roadside vendors.'
          ],
          dayWisePlan: parsed.dayWisePlan || [],
          packingEssentials: parsed.packingEssentials || ['Comfortable walking shoes', 'Cotton breathable clothing', 'Universal power adapter', 'Sunscreen and hat']
        });

      } catch (geminiError: any) {
        console.warn('[Gemini Plan Trip API Error, using algorithmic generator]:', geminiError?.message || geminiError);
      }
    }

    // Built-in intelligent algorithmic itinerary fallback
    const daysArray = [];
    for (let i = 1; i <= days; i++) {
      daysArray.push({
        day: i,
        title: `Day ${i}: Highlights & Cultural Immersion in ${destination}`,
        morning: {
          place: i === 1 ? `Historic Landmarks of ${destination}` : `Scenic Natural Sights & Temples`,
          activity: i === 1 ? `Early morning exploration of primary architectural sites before peak crowds.` : `Sunrise viewpoint walk, guided heritage photography tour, and local museum.`,
          tips: 'Arrive early by 7:30 AM to beat long lines and enjoy pleasant morning light.'
        },
        afternoon: {
          place: `Traditional Artisan Bazaars & Local Heritage Hubs`,
          activity: `Explore vibrant local markets, meet local craftsmen, and indulge in a traditional regional lunch.`,
          tips: 'Haggling is customary in traditional street bazaars; stay polite and compare prices.'
        },
        evening: {
          place: `Scenic Ghats / Sunset Viewpoint / Cultural Center`,
          activity: `Witness sunset over prominent landmarks, followed by cultural folk music, dance or evening temple aarti.`,
          tips: 'Carry a light shawl or sweater as temperatures drop after sundown.'
        },
        foodRecommendation: {
          lunch: `Authentic regional thali featuring locally grown seasonal produce and home-ground spices.`,
          dinner: `Delightful local speciality paired with freshly baked flatbreads or aromatic rice.`,
          mustTryStreetFood: `Famous local street delicacy from reputable stalls with high customer turnover.`
        },
        estimatedDayCost: Math.round(totalCost / days)
      });
    }

    return res.json({
      destination,
      startingLocation: startingLocation || 'Delhi',
      totalDays: days,
      travellers,
      budgetTier: budgetCategory,
      estimatedTotalExpense: {
        totalINR: totalCost,
        accommodationINR: accommodationTotal,
        foodINR: foodTotal,
        transportINR: transportTotal,
        activitiesINR: activitiesTotal
      },
      transportationAdvice: {
        howToReach: `Regular trains and domestic flights connect ${startingLocation || 'major metros'} to ${destination}. Pre-book IRCTC tickets 30-60 days in advance.`,
        localTransitTips: 'Download Uber, Ola, or Rapido apps for upfront metered fares. For sightseeing, hire a licensed tourist taxi for a full 8-hour day.',
        recommendedTravelPass: 'City Tourist Metro Day Pass or state transport smart pass where available.'
      },
      culturalSafetyNotes: [
        'Dress modestly with shoulders and knees covered when entering temples, mosques, and gurudwaras.',
        'Always remove footwear before stepping onto religious premises; dedicated shoe-storage stalls exist at entrances.',
        'Use UPI digital payments (PhonePe, Google Pay, UPI One World) for contactless, transparent transactions everywhere.',
        'Emergency Tourist Helpline 1363 (toll-free) and National Police Helpline 112 are operational 24/7.'
      ],
      dayWisePlan: daysArray,
      packingEssentials: [
        'Comfortable walking shoes with easy slip-on/off for temples',
        'Light cotton breathable clothes for daytime and a light jacket for breezy evenings',
        'Personal water bottle with purification filter',
        'Government photo ID (Passport / Aadhaar) required for hotel check-ins and monument tickets'
      ]
    });

  } catch (error: any) {
    console.error('[Server /api/plan-trip Error]:', error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }
});

// Vite middleware for development or static serving for production
async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('[GHUMAKKAD Server] Vite middleware mounted in dev mode.');
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('[GHUMAKKAD Server] Serving static build from dist directory.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[GHUMAKKAD Server] 🚀 Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[GHUMAKKAD Server] Fatal error starting server:', err);
});
