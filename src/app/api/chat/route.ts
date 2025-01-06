import { google } from "@ai-sdk/google";
import { smoothStream, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.0-pro"),
    messages,
    experimental_transform: smoothStream({
      delayInMs: 10,
      chunking: "word",
    }),
  });

  return result.toDataStreamResponse();
}
