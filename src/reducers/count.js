// Actionのタイプをimportしておく
import { INCREMENT, DECREMENT} from '../actions'

// Stateの初期値を定義する
const initialState = { value: 0}

// countReducerを定義する
// 関数として定義する＆引数は二つ持つ
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
    default:
      return state
  }
}
