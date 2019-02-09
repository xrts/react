import React, { Component } from 'react';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }

    handleClick() {
        // 调用父组件方法
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
}

export default TodoItem;