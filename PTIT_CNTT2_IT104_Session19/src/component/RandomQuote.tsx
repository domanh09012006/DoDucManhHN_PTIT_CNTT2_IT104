import React, { useState } from "react";

const quotes = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
];

function RandomQuote() {
  const [quote, setQuote] = useState(quotes[0]);
  function handleNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }
  return (
    <div>
      <h2>cau noi :</h2>
      <p>
        "{quote}"
      </p>
      <button
        onClick={handleNewQuote}
      >
        Lấy câu mới
      </button>
    </div>
  );
}
export default RandomQuote;
