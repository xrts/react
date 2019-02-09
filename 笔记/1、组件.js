// index.js 是程序的入口,引入了 react, reactDom, 组件
// 通过reactDOM 把组件显示在 id 为 root 的标签下面
// 用到了 JSX 语法,所以要引入 react

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));



// app.js 就是一个 react 组件
// 必须引入 component 并继承
// 用到了 JSX 语法,所以要引入 react

import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                hello world
            </div>
        );
    }
}

export default App;