// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

function App() {
  return (
    <div>
      <h1>Test dayo</h1>
      <input type="text" onChange={() => {console.log("changed!!")} } />
    </div>
  );
}

export default App;
