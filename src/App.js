import Ingredients from "./components/Ingredients";
import Alcohol from "./components/Alcohol";
import Taste from "./components/Taste";
import Mood from "./components/Mood";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <h1 className="text-2xl font-bold text-center">AIバーテンダー</h1>
      <p className="text-center text-sm mt-2">
        あなたの手元にある材料、アルコールの強さ、味、今の気分を入力すると
        <br />
        AIがオリジナルのカクテルを考え、レシピなどを教えてくれます
      </p>
      <div
        className="max-w-2xl mx-auto  p-4 bg-white rounded-lg shadow-md mt-6
      "
      >
        <Ingredients />
        <Alcohol />
        <Taste />
        <Mood />
        <button className="bg-orange-400 p-2 rounded-md text-white block w-full mt-8 ">
          カクテルを生成
        </button>
      </div>
    </div>
  );
}

export default App;
