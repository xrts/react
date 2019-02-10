// 假设 react 底层运行机制
// 1. state数据
// 2. JSX 模板
// 3. 数据 + 模板 结合,生成真实的 DOM, 来显示
// 4. state 发生改变
// 5. 数据 + 模板 结合,生成真实的 DOM, 替换原始的DOM

// 缺陷:
// 第一次生成了完整的 DOM 片段
// 第二次生成了完整的 DOM 片段
// 第二次的 DOM 替换第一次的 DOM, 非常耗性能


// 改良 react 底层运行机制
// 1. state数据
// 2. JSX 模板
// 3. 数据 + 模板 结合,生成真实的 DOM, 来显示
// 4. state 发生改变
// 5. 数据 + 模板 结合,生成真实的 DOM, 并不直接替换原始的 DOM
// 6. 新的 DOM (DoucumentFragment) 和原始的 DOM 做对比, 找差异
// 7. 找出 input 框发生了变化
// 8. 只用新的 DOM 中的 input 元素, 替换掉老的 DOM 中的 input 元素

// 缺陷
// 新旧做对比的时候也耗性能


// 真实的 react 底层运行机制
// 1. state数据
// 2. JSX 模板
// 3. 数据 + 模板 结合, 生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象, 用它来描述真实 DOM)
    // 真实: <div id='abc><span>hello world</span></div>
    // 虚拟: ['div', {id: 'abc'}, ['span',{}, 'hello world']]
// 4. 用虚拟 DOM 的结构生成真实的 DOM , 来实现
// 5. state 发生改变
// 6. 数据 + 模板 结合, 生成新的虚拟 DOM (极大的提升了性能)
    // ['div', {id: 'abc'}, ['span',{}, 'bye bye']]
// 7. 比较原始虚拟 DOM 和新的虚拟 DOM 的区别, 找到区别是 span 中的内容
// 8. 直接操作 DOM, 改变 span 中的内容

// 优点:
    // 性能提升了
    // 它使得跨端应用得以实现, React Native

// JSX --> createElement --> 虚拟 DOM (js 对象) --> 真实的 DOM


// 虚拟 DOM 中的 Diff 算法
// 同层比对, 如果第一层不一致,直接替换整层