import { ChatRequestOptions } from "ai";
import React from "react";

type Props = {
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
};

const ChatInput: React.FC<Props> = ({ onChange, value, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="w-full relative block m-auto">
      <textarea
        rows={2}
        value={value}
        className="py-2 pl-2 pr-10 resize-none block rounded-lg w-full bg-gray-100 border-gray-200 text-sm outline-none"
        placeholder="Ask me anything..."
        // defaultValue={""}
        onChange={onChange}
      />
      <button
        type="submit"
        className="inline-flex absolute top-[20%] right-[10px] shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500"
      >
        <svg
          className="shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
