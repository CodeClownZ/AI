// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// System message to define the bot's identity and behavior
const SYSTEM_PROMPT = `
You are a helpful AI assistant called Traffic AI.
If anyone asks your name, always reply: "My name is Traffic AI."
Be friendly, concise, and helpful.
`;
app.get("/",(req,res)=>{
  res.json("Hello I am Traffic AI , Please use post method /talk to talk with me ...I will help you with Traffic Related Data")
})
// POST /talk endpoint
app.post("/talk", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Missing 'message' in request body." });
    }

    // Compose chat history (for simplicity, just one system + one user)
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userMessage },
    ];

    // Call OpenAI API
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4o" / "gpt-3.5-turbo"
      messages,
      max_tokens: 500,
    });

    const reply = completion.choices[0]?.message?.content || "No response from model.";

    res.json({ reply });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚦 Traffic AI server running on http://localhost:${PORT}`);
});
