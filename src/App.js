// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  // こんな風にも書ける2
  const greeting = "Good Moirning!";
  // Javascriptの予約後とかぶる
  const dom = <h1 className="foo">{greeting}</h1>
  return (dom);
}

export default App;
