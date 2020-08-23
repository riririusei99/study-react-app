import React from 'react';
import ReactDOM from 'react-dom';
// Storeを作成するための関数をimportする
import { createStore } from 'redux'
// 作成したStoreを全コンポーネントに渡す機能を持つコンポーネントをimportする
import { Provider} from 'react-redux'
// 作成したreducerをimportする
import reducer from './reducers'
import './index.css';
// componentをimportする
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

// storeを作成する
const store = createStore(reducer)

// アプリケーションのcomponentでstoreが使えるようにする
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
