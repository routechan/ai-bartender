import React from "react";
import { useState } from "react";
const Ingredients = ({ addIngredient, ingredients, removeIngredient }) => {
  const [ingredient, setIngredient] = useState("");
  const handleAddIngredient = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      // 空文字チェック
      addIngredient(ingredient);
      setIngredient(""); // 入力をクリア
    }
  };

  return (
    <div>
      <label
        htmlFor="ingredients"
        className="text-xl font-semibold block
      "
      >
        材料
      </label>
      <div>
        <form className="flex gap-2 mt-2" onSubmit={handleAddIngredient}>
          <input
            className="border-solid border border-gray-300 rounded-md p-2 flex-1 focus:outline-none focus:ring-1 focus:ring-orange-400"
            id="ingredients"
            type="text"
            placeholder="材料を入力"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button
            type="submit"
            className="bg-orange-400 p-2 rounded-md text-white"
          >
            追加
          </button>
        </form>
      </div>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            className="text-sm text-gray-500 bg-gray-100 p-2 rounded-full inline-block mr-2 mt-2"
            key={index}
          >
            {ingredient}
            <button onClick={() => removeIngredient(ingredient)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
