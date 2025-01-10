import React from "react";
import { Message as ChatMessage, ToolInvocation } from "ai";
import { cx } from "@/functions/common";
import { Bot, Sparkles, User } from "lucide-react";
import { Tools } from "@/types/ai";
import ToolMessageRenderer from "./ToolMessage";
import { Markdown } from "@/components/common/Markdown";

type Props = {
  message: ChatMessage;
};

const toolNametoTextMapper = {
  [Tools.GET_SKILLS]: "Getting Skills",
};

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex gap-2 items-start">
      {/*  */}
      <div className="flex p-[5px] border border-gray-200 items-center rounded-full justify-center bg-gray-100">
        {message?.role === "user" ? (
          <User size={20} className="stroke-gray-500" />
        ) : (
          <Bot size={20} className="stroke-gray-500" />
        )}
      </div>
      <div className="p-0 m-0">
        <Markdown>{message?.content}</Markdown>
      </div>
      {/* <p></p> */}
      {/* <>
        {message?.toolInvocations &&
          message?.toolInvocations?.map((tool: ToolInvocation, i: number) => {
            const { toolName, toolCallId, state } = tool;

            if (state === "result") {
              return (
                <ToolMessageRenderer
                  result={tool.result}
                  type={Tools.GET_SKILLS}
                />
              );
            } else {
              return <p>Loading Tool Call...</p>;
            }
          })}
      </> */}

      {/* <>
        {
          // Means tool is called
          message.toolInvocations?.[0]?.state === "result" && (
            <ToolMessageRenderer
              type={message.toolInvocations?.[0]?.toolName as Tools}
              result={message?.toolInvocations?.[0]?.result}
            />
          )
        }
      </> */}
    </div>
  );
};

export default Message;
