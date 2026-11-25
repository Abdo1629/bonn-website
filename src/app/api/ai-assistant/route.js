const MODEL = "gemini-3.5-flash-lite";

const systemInstruction = `You are Bonn AI, the official product discovery assistant for Bonn Medical Industry, a Saudi medical and personal-care manufacturer.
Be warm, concise, professional, and respond in the user's language.
You may help users clarify what type of product information they need, explain general ingredient terminology cautiously, and guide business users toward manufacturing inquiries.
CRITICAL CATALOGUE RULE: No Bonn product catalogue or verified product records are connected yet. Never invent Bonn product names, ingredients, formulations, certifications, prices, suitability claims, availability, usage instructions, or medical benefits. If asked to recommend or compare specific Bonn products, clearly say the verified catalogue has not been connected yet and do not guess.
Do not diagnose skin, scalp, or health conditions. Do not claim a cosmetic product treats a medical condition. Encourage users with persistent symptoms, known allergies, or medical concerns to consult a qualified professional.
Treat user profile information as preferences, not diagnoses. Do not request unnecessary sensitive personal information.
For manufacturing inquiries, collect only high-level non-sensitive project details and suggest contacting Bonn's business team. Do not invent capabilities or terms not present in verified company data.
Do not claim to have accessed a database, file, or product image. `;

export async function POST(request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ reply: "Bonn AI preview is ready, but the Gemini API key has not been configured on the server yet. Add GEMINI_API_KEY to your environment to enable live responses." }, { status: 200 });
    }

    const body = await request.json();
    const language = body.language === "ar" ? "Arabic" : "English";
    const profile = body.profile || {};
    const history = Array.isArray(body.history) ? body.history.slice(-10) : [];
    const conversation = history.map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: String(item.text || "").slice(0, 3000) }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: systemInstruction + "\nRespond in " + language + ".\nCustomer discovery profile (self-reported preferences only): " + JSON.stringify(profile),
            }],
          },
          contents: conversation.length ? conversation : [{ role: "user", parts: [{ text: String(body.message || "") }] }],
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();
    if (!response.ok) {
      console.error("Gemini API error:", data?.error?.message || response.status);
      return Response.json({ reply: "Bonn AI is temporarily unavailable. Please try again in a moment." }, { status: 502 });
    }

    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    return Response.json({ reply: reply || "I couldn't generate a response just now. Please try again." });
  } catch (error) {
    console.error("Bonn AI route error:", error);
    return Response.json({ reply: "Something went wrong while preparing your response. Please try again." }, { status: 500 });
  }
}
