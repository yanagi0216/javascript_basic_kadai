const btn = document.getElementById("btn");
const text = document.getElementById("text");

//クリックで文章が変わる動作
btn.addEventListener("click",() => {
  text.textContent = "ボタンをクリックしました";
})