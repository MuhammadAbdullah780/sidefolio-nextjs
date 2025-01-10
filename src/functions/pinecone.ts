"use server";
import { Pinecone } from "@pinecone-database/pinecone";
import { embed, embedMany } from "ai";
import { google } from "@ai-sdk/google";

export const trainText = async () => {
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  const index = pinecone.Index(process.env.PINECONE_INDEX!);

  const summary = `

Muhammad Abdullah is a 21-year-old software engineer based in Karachi, Pakistan, with a Bachelor's degree and 2 years of professional experience. Currently working as a FullStack + Gen AI Developer at Expedey, he specializes in building robust applications and integrating AI-driven solutions. His technical expertise spans frontend development with React, Next.js, and Gatsby, backend development with Node.js, FastAPI, NestJS, Express.js, MongoDB, Firebase, and PostgreSQL, as well as cloud infrastructure management with AWS. He also has significant experience in AI and chatbot development, leveraging tools such as OpenAI, Gemini, LangChain, LangGraph, Pinecone, and Chroma DB.

Over his career, Muhammad has completed several impactful projects. These include an Instagram Clone built with the MERN stack and Next.js, a Chat Application using Nest.js, Next.js, Tailwind CSS, and Socket.IO, and an HRM System developed with Nest.js, Next.js, Ant Design, and Redux Toolkit. He also created Pricemoov, a dynamic website powered by Gatsby.js and Contentful, and an Affiliate Marketing Platform that tracks sub-advertisers, conversions, and integrates with platforms like Impact and Partnerize. Other notable projects include the Suburban Treasure Dashboard, which uses Generative AI for product search and price recommendations, a Wefresh Clone for a static website using Next.js and Contentful, and a Proposal Automation Tool that uses Generative AI to streamline Upwork proposals with dynamic prompts.

Outside of work, Muhammad enjoys gaming, cricket, and football. He is deeply interested in Generative AI, MERN, Next.js, Nest.js, and Python, constantly exploring innovative applications in these fields. His GitHub profile, https://github.com/MuhammadAbdullah780, and LinkedIn, https://www.linkedin.com/in/muhammad-abdullah780/, showcase his professional journey and accomplishments.
  `;

  const splittedTexts = [
    "Muhammad Abdullah is a 21-year-old software engineer based in Karachi, Pakistan, with a Bachelor's degree and 2 years of professional experience",
    "Currently working as a FullStack + Gen AI Developer at Expedey, he specializes in building robust applications and integrating AI-driven solutions.",
    "His technical expertise spans frontend development with React, Next.js, and Gatsby, backend development with Node.js, FastAPI, NestJS, Express.js, MongoDB, Firebase, and PostgreSQL, as well as cloud infrastructure management with AWS.",
    "He also has significant experience in AI and chatbot development, leveraging tools such as OpenAI, Gemini, LangChain, LangGraph, Pinecone, and Chroma DB.",
    "Over his career, Muhammad has completed several impactful projects. ",
    "These include an Instagram Clone built with the MERN stack and Next.js, a Chat Application using Nest.js, Next.js, Tailwind CSS, and Socket.IO, and an HRM System developed with Nest.js, Next.js, Ant Design, and Redux Toolkit. He also created Pricemoov, a dynamic website powered by Gatsby.js and Contentful, and an Affiliate Marketing Platform that tracks sub-advertisers, conversions, and integrates with platforms like Impact and Partnerize. Other notable projects include the Suburban Treasure Dashboard, which uses Generative AI for product search and price recommendations, a Wefresh Clone for a static website using Next.js and Contentful, and a Proposal Automation Tool that uses Generative AI to streamline Upwork proposals with dynamic prompts.",
    "Outside of work, Muhammad enjoys gaming, cricket, and football.",
    "He is deeply interested in Generative AI, MERN, Next.js, Nest.js, and Python, constantly exploring innovative applications in these fields.",
    "His GitHub profile, https://github.com/MuhammadAbdullah780, and LinkedIn, https://www.linkedin.com/in/muhammad-abdullah780/, showcase his professional journey and accomplishments.",
  ];

  const data = summary.split(".");

  const values = await embedMany({
    model: google.textEmbeddingModel("text-embedding-004"),
    values: splittedTexts,
  });

  await index.upsert(
    values.embeddings.map((embeddedItem: number[], i: number) => {
      return {
        id: String(Math.round(Math.random() * 10000)),
        values: embeddedItem,
        metadata: {
          text: values.values?.[i],
        },
      };
    })
  );
};

export const retrievePineconeDoc = async (query: string) => {
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  const index = pinecone.Index(process.env.PINECONE_INDEX!);

  const val = await embed({
    model: google.textEmbeddingModel("text-embedding-004"),
    value: query,
  });
  console.log("HERE___________");

  const data = await index.query({
    vector: val.embedding,
    topK: 2,
    includeValues: true,
    includeMetadata: true,
  });

  const possibleTextValues = data?.matches
    ?.map((i) => i?.metadata?.text)
    ?.join(". ");
  console.log("POSSIBLE", possibleTextValues);

  return possibleTextValues
};
