"use client";
import { useChat } from "ai/react";
import MaxWidth from "@/components/common/MaxWidth";
import { ArrowLeft } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";
import MessageContainer from "./MessageContainer";
import ChatInput from "./ChatInput";
import { scrollTo } from "@/functions/common";
import { retrievePineconeDoc, trainText } from "@/functions/pinecone";
import { useActions } from "ai/rsc";
import Message from "@/components/_chat/Message";
import { useRouter } from "next/navigation";

const ChatWithMeContainer = () => {
  const [isStreamStarted, setIsStreamStarted] = useState(false);
  const router = useRouter();

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      onFinish(message, options) {
        console.log(message, options);
        setIsStreamStarted(false);
      },
      maxSteps: 10,
      experimental_throttle: 20,
      onResponse(response) {
        console.log("RESPONSE_________", response);
        setIsStreamStarted(true);
        // scrollTo("last-elem");
      },
      onToolCall({ toolCall }) {
        console.log("TOOL__________CALLED", toolCall);
      },
    });

  useEffect(() => {
    scrollTo("last-elem");
  }, [messages]);

  console.log(messages, "messages__");

  return (
    <MaxWidth className="page-container relative h-screen">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <ArrowLeft
          onClick={() => {
            router?.back();
          }}
          className="stroke-gray-500"
        />
      </div>

      {/* Content */}
      <MessageContainer
        isStreamStarted={isStreamStarted}
        isLoading={isLoading}
        messages={messages}
      />

      {/* Input */}
      <ChatInput
        handleSubmit={handleSubmit}
        onChange={handleInputChange}
        value={input}
      />
    </MaxWidth>
  );
};

export default ChatWithMeContainer;
