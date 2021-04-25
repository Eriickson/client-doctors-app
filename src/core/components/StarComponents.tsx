import { IconStar } from "@tabler/icons";
import React from "react";

interface StarComponentsProps {
  score: number;
}

export const StarComponents: React.FC<StarComponentsProps> = ({ score }) => {
  return (
    <div className="flex space-x-1">
      {Array(Math.round(score / 2)).fill(
        <div className="w-5 h-5 p-0.5 flex items-center justify-center bg-yellow-200 rounded-md">
          <IconStar className="w-4 h-4 text-yellow-500" />
        </div>,
      )}
      <strong className="text-sm">({Math.round(score / 2)}/5)</strong>
    </div>
  );
};


