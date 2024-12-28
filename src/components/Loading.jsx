import React from "react";

const Loading = ({ loading }) => {
  return loading ? (
    <div className="w-full h-full bg-gradient-to-r from-blue-50 to-purple-50 fixed top-0 left-0 z-50">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <img
            src="/cocktail.png"
            alt="cocktail"
            className="w-24 animate-shake"
          />
        </div>
        <p className="mt-4 text-lg font-medium text-orange-600 animate-pulse">
          カクテルを作成中...
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Loading;
