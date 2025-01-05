"use client";

import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import Graph from "./graph";

export default function StatsCard({ title, data }) {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");

  const currentData = data[selectedPeriod];

  // Determine graph properties based on growth status
  const isGrowthUp = currentData.growthStatus === "Up";
  const growthRateNumber = parseFloat(currentData.growthRate);
  const isHighGrowth = growthRateNumber >= 30;

  const graphColor = isGrowthUp
    ? (isHighGrowth ? "#24BC73" : "#2A85FF")
    : "#FA6262";

  const graphPath = isGrowthUp
    ? "M0 80 Q 50 30, 100 50 T 200 20"
    : "M0 20 Q 50 50, 100 80 T 200 100";

  return (
    <div className="px-4 py-5 bg-white shadow-sm rounded-[8px] border border-gray-200 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-100">
              {selectedPeriod}
              <ChevronDown size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200 w-32 sm:w-40">
            {["Week", "Month", "Year"].map((period) => (
              <DropdownMenuItem
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className="hover:bg-gray-100 px-2 py-1 cursor-pointer text-sm text-gray-700"
              >
                Last {period}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Growth Status */}
        <div
          className={`flex items-center gap-1 ${isGrowthUp ? "text-green-500" : "text-red-500"}`}
        >
          {isGrowthUp ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
          <span className="text-sm font-medium">{currentData.growthRate}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-4 sm:mt-2">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{currentData.value}</p>
          <p className="text-sm text-gray-500">
            Overall {selectedPeriod}
          </p>
        </div>

        {/* Graph Section */}
        <Graph graphColor={graphColor} graphPath={graphPath} />
      </div>
    </div>
  );
}
