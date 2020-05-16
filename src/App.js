// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  // return で返すタグは一つではなければならない
  // 余分なdiv等で囲わないように<React.Fragment>を使う
  // for も予約後なのでhtmlForで書く
  return (
    <React.Fragment>
      <h1>Test dayo</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("changed!!")} } />
    </React.Fragment>
  );
}

export default App;
