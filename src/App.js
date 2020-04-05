// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  // return で返すタグは一つではなければならない
  // for も予約後なのでhtmlForで書く
  return (
    <div>
      <h1>Test dayo</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("changed!!")} } />
    </div>
  );
}

export default App;
