//操作ボタンを取得→ボタンを押したら動作する
//変更元を取得→内容を変更 

const btn = document.getElementById("btn");

btn,addEventListener(("click"),() => {
  const text = document.getElementById("text");

  text.textContent = "ボタンをクリックしました";
})