import { Tools } from "@/types/ai";
import React from "react";

type Props = {
  result: any;
  type: Tools;
};

const ToolMessageRenderer: React.FC<Props> = ({ result, type }) => {
  switch (type) {
    case Tools.GET_SKILLS:
      return (
        <div className="w-full bg-gray-50 rounded-lg p-4">
          <h3 className="mb-3 section-heading !text-gray-600">The Skills I have are: </h3>

          {result?.map((i: string, k: number) => (
            <p key={k} className="mb-1">
              {k + 1}. {i}
            </p>
          ))}
        </div>
      );

    default:
      return <p>{result}</p>;
  }
};

export default ToolMessageRenderer;
