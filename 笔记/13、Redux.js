// Redux = Reducer + Flux

// Redux 的工作流程 ==> Redux Flow.png

// 设计使用三原则:
    // 1. store 必须是唯一的
    // 2. 只有 store 能改变自己的内容
    // 3. Reducer 必须是纯函数 (给固定的输入,就一定有固定的输出,而且不会有任何副作用)


// redux 中间件 ===> Redux Data Flow.jpg
// 对 dispatch 的一个封装和升级 (原生 dispatch 只能接收对象 )
// 例如: redux-thunk , 如果 dispatch 传递过来一个对象,会直接把对象传给 store, 但如果 dispatch 传递过来一个函数, 会先执行函数再丢给 store


// redux-thunk 的引入
// 解决异步问题
// 把异步操作放到 action 里

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(reducer, enhancer);

export default store;


// redux-saga
// 解决异步问题
// 会单独抽出一个文件

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
);


const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);

export default store;

// react-redux
