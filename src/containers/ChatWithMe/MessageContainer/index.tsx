import { cx } from "@/functions/common";
import { Message } from "ai";
import { Bot, Loader, User } from "lucide-react";
import EmptyText from "./EmptyText";
import { useRef } from "react";

// AIzaSyB3N0DPDxJKe7JRGcvL5dJwNcfpAtomH8U

type Props = {
  messages: Message[];
  isLoading?: boolean;
  isStreamStarted?: boolean;
};

export const scrollTo = (id: string) => {
  if (typeof window !== undefined) {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element smoothly
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};

const MessageContainer: React.FC<Props> = ({
  messages,
  isLoading,
  isStreamStarted,
}) => {
  const messagesEndRef = useRef(null);

  return (
    <div className="flex min-h-1 overflow-y-auto overflow-x-hidden no-scrollbar flex-1 flex-col gap-3">
      {messages?.length ? (
        <>
          {messages?.map((item, i) => {
            return (
              <div key={i} className="flex gap-2 items-start">
                <div className="flex p-[5px] border border-gray-200 items-center rounded-full justify-center bg-gray-100">
                  {item?.role === "user" ? (
                    <User size={20} className="stroke-gray-500" />
                  ) : (
                    <Bot size={20} className="stroke-gray-500" />
                  )}
                </div>
                <p
                  className={cx(
                    "mt-1 whitespace-pre-wrap",
                    item?.role === "user" && "line-clamp-8"
                  )}
                >
                  {item?.content}
                </p>
              </div>
            );
          })}
          {isLoading && !isStreamStarted && (
            <div className="flex gap-2 items-start">
              <div className="flex p-[5px] border border-gray-200 items-center rounded-full justify-center bg-gray-100">
                <Bot size={20} className="stroke-gray-500" />
              </div>
              <Loader className="animate-spin stroke-gray-400 mt-1" />
            </div>
          )}
          <div id="last-elem" />
        </>
      ) : (
        <EmptyText />
      )}
    </div>
  );
};

export default MessageContainer;
