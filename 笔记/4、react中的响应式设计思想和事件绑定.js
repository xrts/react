// 不再关注 dom 层, 关注数据层
// state 负责存储数据
// 事件绑定要 bind(this) 对作用域进行变更
// 改变 state 数据需要用setState

// Fragment 占位符,渲染时,不会出现这个标签
import React, { Component, Fragment } from 'react';


class App extends Component {
    // 最优先执行的函数
    constructor(props) {
        // 继承父类
        super(props);
        // 定义数据,存储
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                        type="text"/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>learning react</li>
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        // react 更改 state 的数据必须使用 setState
        this.setState({
            inputValue: e.target.value
        })
    }
}

export default App;

