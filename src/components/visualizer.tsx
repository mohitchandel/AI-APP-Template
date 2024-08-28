import React from "react";

export const Visualizer = ({ isAnimating }: { isAnimating: boolean }) => {
  const ropeColors = ["#1BA3AC", "#1BA3AC", "#1BA3AC"];

  return (
    <div className="w-full bg-black dark:bg-white h-[150px] overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {[0, 1, 2].map((index) => (
          <path
            className=""
            key={index}
            fill="none"
            stroke={ropeColors[index]}
            strokeWidth="10"
            strokeLinecap="round"
            d="M-20,160 Q360,200 720,160 T1460,160"
            transform={`translate(0,${index * 30})`}
          >
            {isAnimating && (
              <animate
                attributeName="d"
                dur={`${1 + index}s`}
                repeatCount="indefinite"
                values="
                M-20,160 Q360,200 720,160 T1460,160;
                M-20,160 Q360,120 720,160 T1460,160;
                M-20,160 Q360,200 720,160 T1460,160
              "
              />
            )}
          </path>
        ))}
      </svg>
    </div>
  );
};
