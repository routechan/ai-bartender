import React, { useState } from "react";

const moods = [
  "リラックス",
  "パーティー",
  "ロマンティック",
  "冒険的",
  "落ち着いた",
  "エレガント",
];

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState();

  const onSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="mt-6">
      <label
        htmlFor="mood"
        className="text-xl font-semibold block
  "
      >
        気分
      </label>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => onSelect(mood)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedMood === mood
                ? "bg-orange-400 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Mood;
