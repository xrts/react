// 生命周期函数指在某一个时刻组件会自动调用执行的函数

// Initialization 初始化
    // setup props and state

// Mounting 挂载
    // 1.componentWillMount
        // 只会在第一次被执行
        // 在组件即将被挂载到页面的时刻自动执行
    // 2.render
        // 页面渲染的时刻执行
    // 3.componentDidMount
        // 只会在第一次被执行
        // 组件被挂载到页面的时刻执行

// Updation 更新
    // 1. props
        // 1.1 componentWillReceiveProps (props发生变化独有的)
            // 一个组件要从父组件接受参数
            // 只要父组件的 render 函数被重新执行了, 子组件的这个生命周期函数就会被执行
            // 如果这个组件第一次存在于父组件中, 不会执行
            // 如果这个组件之前已经存在于父组件中, 才会执行
        // 1.2 shouldComponentUpdate
            // 组件被更新之前自动执行
            // 返回一个 boolean 值, 如果为 false, 组件将不会被更新
        // 1.3 componentWillUpdate
            // 组件被更新之前自动执行,在 shouldComponentUpdate 之后执行, 如果 shouldComponentUpdate 返回 true 才被执行
        // 1.4 render
            // 页面重新渲染
        // 1.5 componentDidUpdate
            // 组件被更新之后执行
    // 2. states
        // 2.1 shouldComponentUpdate
        // 2.2 componentWillUpdate
        // 2.3 render
        // 2.4 componentDidUpdate

// Unmounting 去除
    // componentWillUnmount
        // 当这个组件即将被从页面中剔除的时候执行


// 使用场景
// 发 ajax 请求一般放在 componentDidMount 周期内