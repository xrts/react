// 获取页面的 DOM 元素
// 节点中定义ref:
    // <input ref={(input) => {this.input = input}} type="text"/>
// 函数中获取节点:
    // const value = this.input.value;

// react 中尽量不要直接操作 DOM
// setState 是个异步函数,所以所获取的 DOM 会有错误, 应该在 setState 的回调函数中获取真实的 DOM
this.setState((prevState) => ({
    list: [...prevState.list, prevState.inputValue],
    inputValue: ''
}), () => {
    // 在这里操作 DOM
});
