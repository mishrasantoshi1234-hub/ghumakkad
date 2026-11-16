import { GoogleGenAI } from "@google/genai";

const MODEL = "gemini-3.8-flash";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { message, history = [] } = await request.json();
    if (typeof message !== "string" || !message.trim()) {
      return Response.json({ error: "A message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({
        error: "The AI service is not configured yet. Add GEMINI_API_KEY in your Netlify environment variables."
      }, { status: 503 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = `You are Ghumakkad AI, a helpful Indian tourism guide.
Help Indian and international visitors plan safe, respectful trips across India.
Give practical destination recommendations, day-by-day itineraries, regional food suggestions,
cultural context, transport options and approximate budgets in INR.
Do not invent live train schedules, ticket availability, opening hours or current prices.
Clearly say when details should be checked with official sources. Keep answers clear and student-friendly.`;

    const recentHistory = Array.isArray(history)
      ? history.slice(-6).map((item: { sender?: string; text?: string }) =>
          `${item.sender === "assistant" ? "Assistant" : "User"}: ${String(item.text || "").slice(0, 2500)}`
        ).join("\n")
      : "";

    const prompt = `${recentHistory ? `Recent conversation:\n${recentHistory}\n\n` : ""}Current user message:\n${message.trim()}`;

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: { systemInstruction: systemPrompt }
    });

    const reply = result.text?.trim();
    if (!reply) throw new Error("The AI returned an empty response.");

    return Response.json({
      reply,
      isAiGenerated: true,
      model: MODEL,
      suggestedFollowUps: [
        "What is the best season to visit?",
        "Suggest local food I should try.",
        "How can I plan this trip on a budget?"
      ]
    });
  } catch (error) {
    console.error("GHUMAKKAD chat function error:", error);
    return Response.json({
      error: "Sorry, the AI guide could not answer right now. Please try again in a moment."
    }, { status: 500 });
  }
};
