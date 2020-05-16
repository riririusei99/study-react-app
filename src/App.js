// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} />
    </div>
  )
}

const User = (props) => {
  return (
    <React.Fragment>
     Hi, I am {props.name}!
    </ React.Fragment>
  )
}

export default App;
