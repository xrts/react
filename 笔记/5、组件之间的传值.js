// 父 ----> 子
// 通过绑定属性传值,子组件在 props 内取值
// 父: <TodoItem content={item}/>
// 子: <div>{this.props.content}</div>

// 子 ----> 父
// 注意父组件的方法需要绑定当前this
// 父: <TodoItem  index={index} deleteItem={this.handleItemDelete.bind(this)}/>
// 子: this.props.deleteItem(this.props.index)