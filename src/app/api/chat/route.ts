import { retrievePineconeDoc } from "@/functions/pinecone";
import { google } from "@ai-sdk/google";
import { smoothStream, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const context = await retrievePineconeDoc(messages?.at(-1)?.content);

    const result = streamText({
      model: google("gemini-1.5-pro-latest"),
      experimental_transform: smoothStream({
        delayInMs: 10,
        chunking: "word",
      }),
      experimental_toolCallStreaming: true,
      messages,
      system: `
      - You are a helpful Personal AI Assistant. Always prioritize the provided context when answering queries.  
      - If the query relates to the context, base your response primarily on the context.  

      - If the query is outside the scope of the context, you may generate a response based on your general knowledge.  
        - Clearly separate responses based on the context from those based on general knowledge.  
      
      - DO NOT provide answers that contradict the provided context. If unsure, explicitly state:  
        "The context does not cover this information, but here’s what I can provide based on my general knowledge."
      
      - ======== The Context ========  
        ${context}  
      
      - ======== Response Format ========  
        1. When using the context, directly respond using proper markdown formatting.  
        2. For queries outside the context, preface your response with:  
           "This query is outside the provided context. Here's a general answer:"  
        3. Ensure proper markdown for readability and clarity in all responses.

      `,
      tools: {
        // [Tools.GET_SKILLS]: tool({
        //   description: "This tool gives user skills OR experties Information.",
        //   parameters: z.object({}),
        //   execute: async () => {
        //     return new Promise((res, rej) => {
        //       setTimeout(() => {
        //         res([
        //           "HTML",
        //           "CSS",
        //           "JS",
        //           "React JS",
        //           "Next JS",
        //           "Node JS",
        //           "Express JS",
        //           "Langchian",
        //           "LangFlow",
        //           "Lang Graph",
        //           "Python",
        //           "JAVA",
        //           "Fast API",
        //           "Django",
        //           "Flask",
        //           "Mongo DB",
        //           "Sqlite",
        //           "Prisma",
        //         ]);
        //       }, 4000);
        //     });
        //   },
        // }),
      },
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log(error, "ERROR_______");
  }
}
