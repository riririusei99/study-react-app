// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  // こんな風にも書ける
  const dom = <h1>Hi!</h1>
  return (dom);
}

export default App;
