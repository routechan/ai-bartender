function parseResponse(response) {
  // 1. 結果を格納するオブジェクトを初期化
  const sections = {
    name: "", // カクテル名を格納
    ingredients: [], // 材料を配列として格納
    instructions: "", // 作り方を格納
    story: "", // 背景ストーリーを格納
  };

  // 2. 応答テキストを行ごとに分割
  const lines = response.split("\n");
  let currentSection = null; // 現在処理中のセクションを追跡

  // 3. 各行を順番に処理
  for (const line of lines) {
    // 4. セクションの判定
    if (line.includes("カクテル名")) {
      currentSection = "name";
      // カクテル名の場合は、「カクテル名:」を除去して保存
      sections.name = line.replace("カクテル名:", "").trim();
    }
    // 以下、各セクションの開始を検出
    else if (line.includes("材料")) {
      currentSection = "ingredients";
    } else if (line.includes("作り方")) {
      currentSection = "instructions";
    } else if (line.includes("背景")) {
      currentSection = "story";
    }
    // 5. 内容の振り分け処理
    else if (line.trim() && currentSection) {
      if (currentSection === "ingredients") {
        // 箇条書き（-）のみを除去
        if (line.trim().startsWith("-")) {
          const ingredient = line.trim().substring(1).trim();
          if (ingredient) {
            sections.ingredients.push(ingredient);
          }
        }
        // 数字で始まる行もそのまま追加
        else if (line.trim().match(/^\d+\./)) {
          const ingredient = line.trim();
          if (ingredient) {
            sections.ingredients.push(ingredient);
          }
        }
      } else if (currentSection === "instructions") {
        // 作り方は文章として連結
        sections.instructions += line.trim() + "\n";
      } else if (currentSection === "story") {
        // 背景ストーリーも文章として連結
        sections.story += line.trim() + "\n";
      }
    }
  }

  // 6. 最後に余分な改行を削除
  sections.instructions = sections.instructions.trim();
  sections.story = sections.story.trim();

  return sections;
}

export default parseResponse;
