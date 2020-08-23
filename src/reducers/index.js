// 各reducerを結合する
import { combineReducers } from 'redux'
import count from './count'

// import したreducerを結合する
// 例）export default combineReducers({ foo, bar, buz })
export default combineReducers({ count })
