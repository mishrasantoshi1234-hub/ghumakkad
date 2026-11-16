import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-3.8-flash";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const form = await request.json();
    const {
      startingLocation = "New Delhi",
      destination,
      travelDate = "",
      numberOfTravellers = 1,
      numberOfDays = 3,
      budgetCategory = "Moderate",
      preferences = [],
      pace = "Balanced"
    } = form;

    if (typeof destination !== "string" || !destination.trim()) {
      return Response.json({ error: "Please enter a destination." }, { status: 400 });
    }

    const travellers = Math.max(1, Math.min(20, Number(numberOfTravellers) || 1));
    const days = Math.max(1, Math.min(14, Number(numberOfDays) || 3));
    const budget = ["Budget", "Moderate", "Luxury"].includes(budgetCategory)
      ? budgetCategory
      : "Moderate";
    const dailyPerPerson: Record<string, number> = {
      Budget: 2200,
      Moderate: 4500,
      Luxury: 9500
    };
    const totalCost = dailyPerPerson[budget] * days * travellers;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json({
        error: "The AI service is not configured yet. Add GEMINI_API_KEY in your Netlify environment variables."
      }, { status: 503 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Create a useful ${days}-day travel itinerary for ${destination.trim()}, India.
Starting location: ${startingLocation}.
Travel date: ${travelDate || "Not specified"}.
Travellers: ${travellers}.
Budget category: ${budget}.
Interests: ${Array.isArray(preferences) ? preferences.join(", ") : "General sightseeing"}.
Travel pace: ${pace}.
Estimated overall budget guide: approximately ₹${totalCost.toLocaleString("en-IN")} total for the group. Treat this as an estimate, not a live quote.

Return ONLY valid JSON with this exact structure:
{
  "dayWisePlan": [
    {
      "day": 1,
      "title": "Short day title",
      "morning": {"place": "Place", "activity": "Activity", "tips": "Practical tip"},
      "afternoon": {"place": "Place", "activity": "Activity", "tips": "Practical tip"},
      "evening": {"place": "Place", "activity": "Activity", "tips": "Practical tip"},
      "foodRecommendation": {"lunch": "Food suggestion", "dinner": "Food suggestion", "mustTryStreetFood": "Local snack"},
      "estimatedDayCost": ${Math.round(totalCost / days)}
    }
  ],
  "transportationAdvice": {
    "howToReach": "General route guidance; do not invent schedules",
    "localTransitTips": "Local transport guidance",
    "recommendedTravelPass": "Optional pass, or an empty string"
  },
  "culturalSafetyNotes": ["Useful respectful travel tip"],
  "packingEssentials": ["Useful item"]
}
Include exactly ${days} dayWisePlan entries. Keep recommendations relevant to the named destination. Do not invent precise live fares, schedules, availability, or opening hours.`;

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are an experienced Indian travel itinerary planner. Return valid JSON only."
      }
    });

    const raw = (result.text || "").trim().replace(/^```json\s*/i, "").replace(/\s*```$/, "");
    const parsed = JSON.parse(raw);

    const dayWisePlan = Array.isArray(parsed.dayWisePlan) ? parsed.dayWisePlan.slice(0, days) : [];
    if (dayWisePlan.length !== days) {
      throw new Error("The generated itinerary did not contain the requested number of days.");
    }

    return Response.json({
      destination: destination.trim(),
      startingLocation,
      totalDays: days,
      travellers,
      budgetTier: budget,
      estimatedTotalExpense: {
        totalINR: totalCost,
        accommodationINR: Math.round(totalCost * 0.4),
        foodINR: Math.round(totalCost * 0.25),
        transportINR: Math.round(totalCost * 0.2),
        activitiesINR: Math.round(totalCost * 0.15)
      },
      transportationAdvice: parsed.transportationAdvice || {
        howToReach: `Check current train, bus and flight options from ${startingLocation} to ${destination}.`,
        localTransitTips: "Use licensed local transport and confirm fares before travel."
      },
      culturalSafetyNotes: Array.isArray(parsed.culturalSafetyNotes) ? parsed.culturalSafetyNotes : [],
      dayWisePlan,
      packingEssentials: Array.isArray(parsed.packingEssentials) ? parsed.packingEssentials : []
    });
  } catch (error) {
    console.error("GHUMAKKAD itinerary function error:", error);
    return Response.json({
      error: "The itinerary could not be generated. Please check your details and try again."
    }, { status: 500 });
  }
};
