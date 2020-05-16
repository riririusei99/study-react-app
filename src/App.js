// JSXをトランスパイル時にReacを使うために必ず記述する。
import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age:10},
    { name: "Hanako", age:5}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</ div>
}

export default App;
