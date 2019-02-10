// Fragment 占位符,渲染时,不会出现这个标签
import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from './TodoItem';
import axios from 'axios'


class App extends Component {
    // 最优先执行的函数
    constructor(props) {
        // 继承父类
        super(props);
        // 定义数据
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                        type="text"/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    componentDidMount() {
        axios.get('api/todolist')
            .then((res) => {
                console.log(res.data);
                this.setState(() => ({
                    list: [...res.data]
                }))
            })
            .catch(() => {alert('error')})
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    content={item}
                    key={index}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e) {
        // const value = e.target.value;
        const value = this.input.value;
        // react 更改 state 的数据必须使用 setState
        this.setState(() => ({
            inputValue: value
        }));
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        this.setState((prevState) => {
            // 拷贝list
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }

}

export default App;
