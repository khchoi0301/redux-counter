import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// Redux 관련 불러오기
import { createStore } from 'redux'
import reducers from './reducers';
import { Provider } from 'react-redux';

// 스토어 생성
const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// actions : type을 정의하고 함수를 할당함
// components : component를 정의함
// containers : 정의된 콤포넌틀를 불러오고 dispatch, connect 함
// reducers : type에 따른 연산을 수행함 
// utils : 참조할 값과 함수를 정의함
// index.js 시작 : container/app.js을 로드하고 reducer를 연동한다