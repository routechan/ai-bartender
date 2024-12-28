import React from "react";
import { Link } from "react-router-dom";

function Cocktail({ cocktail }) {
  if (!cocktail) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center mb-6">{cocktail.name}</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">材料</h3>
        <ul className="list-disc pl-5 space-y-1">
          {cocktail.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">作り方</h3>
        <p className="text-gray-600 whitespace-pre-line">
          {cocktail.instructions}
        </p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">
          カクテルストーリー
        </h3>
        <p className="text-gray-600 whitespace-pre-line">{cocktail.story}</p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Link to="/">
          <button className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 duration-300">
            もう一度カクテルを作る
          </button>
        </Link>
        <a
          href="https://twitter.com/intent/tweet?text=AIバーテンダーで作ったカクテルを試してみてください！&url=https://ai-bartender-67d9c.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-md hover:bg-gray-800 duration-300 inline-block"
        >
          カクテルをXでシェア
        </a>
      </div>
    </div>
  );
}

export default Cocktail;
