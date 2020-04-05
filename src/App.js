import React from 'react';

function App() {
  // ここがJSX
  // 直感的に書ける。
  return (<div>Hello, World!</div>);
  // JSXについては下記のように書ける。
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello, World!!"
  // )
}

export default App;
