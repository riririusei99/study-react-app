import React,  {Component} from 'react';
// connect 関数をimportする
import { connect } from 'react-redux'

// 必要なactioncreatorのincrement,decrementをimportする
import { increment, decrement } from '../actions'


class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div> count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
