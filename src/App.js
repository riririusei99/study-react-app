// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  // こんな風にも書ける2
  const greeting = "Good Moirning!";
  const dom = <h1>{greeting}</h1>
  return (dom);
}

export default App;
