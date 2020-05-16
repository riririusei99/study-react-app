// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

const App = () => {
  return (
    <div>
      <User name={"Taro"} age={10}/>
      <br />
      <User name={"Hanako"} age={5}/>
    </div>
  )
}

const User = (props) => {
  return (
    <React.Fragment>
     Hi, I am {props.name}, and {props.age} years old!
    </ React.Fragment>
  )
}

export default App;
