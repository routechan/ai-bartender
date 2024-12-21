import React from "react";

const Ingredients = () => {
  return (
    <div>
      <label
        htmlFor="ingredients"
        className="text-xl font-semibold block
      "
      >
        材料
      </label>
      <div className="flex gap-2 mt-2">
        <input
          className="border-solid border border-gray-300 rounded-md p-2 flex-1 focus:outline-none focus:ring-1 focus:ring-orange-400"
          id="ingredients"
          type="text"
          placeholder="材料を入力"
        />
        <button className="bg-orange-400 p-2 rounded-md text-white">
          追加
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
