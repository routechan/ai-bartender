import Ingredients from "./components/Ingredients";
import Alcohol from "./components/Alcohol";
import Taste from "./components/Taste";
import Mood from "./components/Mood";
import Cocktail from "./components/Cocktail";
import Loading from "./components/Loading";
import parseResponse from "./utils/parseResponse";
import axios from "axios";
import { useState } from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";

function App() {
  const [cocktail, setCocktail] = useState(null);
  const navigate = useNavigate();
  // 材料
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };
  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  // アルコール
  const [alcohol, setAlcohol] = useState(0);
  const handleAlcoholChange = (alcohol) => {
    setAlcohol(alcohol);
  };

  // 味わい
  const [taste, setTaste] = useState(0);
  const handleTasteChange = (taste) => {
    setTaste(taste);
  };

  // 気分
  const [mood, setMood] = useState("");
  const handleMoodChange = (mood) => {
    setMood(mood);
  };

  // ローディング
  const [loading, setLoading] = useState(false);

  /**入力された値を基にpromptを作成し、OpenAIのAPIを呼び出す*/
  const handleSubmit = async (e) => {
    if (!ingredients.length) {
      // 材料が入力されていない場合
      alert("材料を入力してください");
      return;
    } else if (!mood) {
      // 気分が入力されていない場合
      alert("気分を入力してください");
      return;
    }
    e.preventDefault();

    const prompt = `
    以下の情報を元にオリジナルカクテルを生成してください。
      ・使う材料は入力された材料（全て使わなくてもいい）。
      ・材料の数は多くても4つまでにしてください。
      ・レモンはレモンジュースではありません
      ・材料にはどのくらいの量を使うのかを明示して
      ・材料に優先順位はないです、後半に入力された材料も使ってください
      ・入力された以外の材料は一般的な家庭にあるものだけにしてください
      ・材料の前には数字は入れないでください
      ・カクテル名の前後に「-」や「*」などは入れないでください
      ・ストーリーはカクテルの背景をロマンチックな感じで作って。

      1. ${ingredients.join(",")}
      2. アルコールの強さ(0に近いほど弱く、100に近いほど強い): ${alcohol}/100
      3. 味わい(0に近いほど甘く、100に近いほど辛い): ${taste}/100
      5. 気分: ${mood}

      結果は以下のとおりにだしてください：
      - カクテル名
      - 材料
      - 作り方
      - 背景ストーリー
          `;

    try {
      // ローディングを表示
      setLoading(true);
      // OpenAIのAPIを呼び出す
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4-turbo",
          messages: [
            { role: "system", content: "あなたはプロのバーテンダーです。" },
            { role: "user", content: prompt },
          ],

          temperature: 1.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      //レスポンスをイイ感じにフォーマット
      const parsedCocktail = parseResponse(
        response.data.choices[0].message.content
      );
      setCocktail(parsedCocktail);
      // カクテルページに移動
      navigate("/cocktail");
      // ローディングを非表示
      setLoading(false);
    } catch (error) {
      console.error("Error generating cocktail:", error);
      // ローディングを非表示
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <Loading loading={loading} />

      <h1 className="text-2xl font-bold text-center">
        <Link to="/">AIバーテンダー </Link>
      </h1>

      <p className="text-center text-sm mt-2">
        あなたの手元にある材料、アルコールの強さ、味、今の気分を入力すると
        <br />
        AIがオリジナルのカクテルを考え、レシピなどを教えてくれます
      </p>

      <Routes>
        <Route
          path="/"
          element={
            <div
              className="max-w-2xl mx-auto  p-4 bg-white rounded-lg shadow-md mt-6
      "
            >
              <Ingredients
                addIngredient={addIngredient}
                ingredients={ingredients}
                removeIngredient={removeIngredient}
              />
              <Alcohol handleAlcoholChange={handleAlcoholChange} />
              <Taste handleTasteChange={handleTasteChange} />
              <Mood handleMoodChange={handleMoodChange} />
              <button
                onClick={handleSubmit}
                className="bg-orange-400 p-2 rounded-md text-white block w-full mt-8 hover:bg-orange-500 duration-300"
              >
                カクテルを生成
              </button>
            </div>
          }
        />

        <Route path="/cocktail" element={<Cocktail cocktail={cocktail} />} />
      </Routes>
    </div>
  );
}

export default App;
