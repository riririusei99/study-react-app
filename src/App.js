// JSXをトランスパイル時にReacを使うために必ず記述する。
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Test dayo</h1>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("changed!!")} } />
      </React.Fragment>
    );
  }
}

export default App;
