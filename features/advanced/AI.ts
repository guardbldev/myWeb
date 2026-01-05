import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({ apiKey: "YOUR_OPENAI_API_KEY" });
const openai = new OpenAIApi(configuration);

export async function getAILayoutSuggestion(prompt: string) {
  const resp = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a web layout assistant. Suggest compelling section/component ideas. Output as JSON array." },
      { role: "user", content: prompt }
    ],
    temperature: 0.6,
    max_tokens: 400
  });
  // Parse out [ { type: 'hero', props: {...} }, ...]
  return JSON.parse(resp.data.choices[0].message?.content ?? "[]");
}

export async function generateAIUIFromPrompt(prompt: string) {
  const resp = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a UI generator. Output a full React HTML/CSS layout to match the prompt." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 600
  });
  return resp.data.choices[0].message?.content ?? "";
}