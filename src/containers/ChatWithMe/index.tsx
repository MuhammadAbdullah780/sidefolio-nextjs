"use client";
import { useChat } from "ai/react";
import MaxWidth from "@/components/common/MaxWidth";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import MessageContainer from "./MessageContainer";
import ChatInput from "./ChatInput";
import { scrollTo } from "@/functions/common";

const ChatWithMeContainer = () => {
  const [isStreamStarted, setIsStreamStarted] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      onFinish(message, options) {
        console.log(message, options);
        setIsStreamStarted(false);
      },
      experimental_throttle: 20,
      onResponse(response) {
        console.log("RESPONSE_________", response);
        setIsStreamStarted(true);
        // scrollTo("last-elem");
      },
    });

    useEffect(() => {
      scrollTo("last-elem");
    }, [messages]);

  return (
    <MaxWidth className="page-container relative h-screen">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <ArrowLeft className="stroke-gray-500" />
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
