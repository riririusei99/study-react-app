// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

// Class Component
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Test dayo</h1>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("changed!!")} } />
//       </React.Fragment>
//     );
//   }
// }

// functional Component
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
