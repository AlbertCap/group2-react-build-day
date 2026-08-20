import React from "react";
import { fortunes } from "../Data/fortunesData.js";

const FortuneHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <p className="p-4 text-center text-gray-500">
        ยังไม่มีประวัติการเสี่ยงทายจ้า
      </p>
    );
  }

  return (
    <div className="flex flex-col max-h-120 gap-3 overflow-y-auto pr-1 [scrollbar-none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {history.map((fortuneId, index) => {
        const item = fortunes.find((f) => f.id === fortuneId);

        if (!item) return null;

        return (
          <div
            key={index}
            className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-left shadow-sm"
          >
            <div className="bg-red-700 text-white text-center px-4 py-1.5 [clip-path:polygon(12px_0%,calc(100%-12px)_0%,100%_50%,calc(100%-12px)_100%,12px_100%,0%_50%)]">
              ใบที่ {item.id} : {item.title}
            </div>
            <p className="text-stone-600 text-xs line-clamp-4 mt-2">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FortuneHistory;
