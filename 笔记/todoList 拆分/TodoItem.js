import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 绑定this
        this.handleClick = this.handleClick.bind(this);
    }
    // 防止子组件不断render
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== nextState.content
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

// 对参数做校验
TodoItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

export default TodoItem;