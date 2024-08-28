import React from "react";

export const Visualizer = ({ isAnimating }: { isAnimating: boolean }) => {
  const ropeColors = ["#74ee15", "#f000ff", "#ffe700", "#4deeea"];

  return (
    <svg
      className="w-full h-[120px] overflow-hidden"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      {[0, 1, 2, 4].map((index) => (
        <path
          key={index}
          fill="none"
          stroke={ropeColors[index]}
          strokeWidth="15"
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
                M-30,180 Q380,200 790,180 T1480,180;
                M-20,180 Q380,120 790,180 T1480,180;
                M-20,180 Q380,200 790,180 T1480,180
              "
            />
          )}
        </path>
      ))}
    </svg>
  );
};
