import React from "react";

export default function Graph({ graphColor, graphPath }) {
    return (
        <div className="mt-6">
            <svg
                viewBox="0 0 200 100"
                className="w-full h-20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={graphColor} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={graphColor} stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path
                    d={graphPath}
                    fill="none"
                    stroke={graphColor}
                    strokeWidth="2"
                />

                <path
                    d={`${graphPath} V100 H0 Z`}
                    fill={`${graphColor}`}
                    opacity={0.25}
                />

            </svg>
        </div>
    );
}

