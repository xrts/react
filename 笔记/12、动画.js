// react-transition-group

// import { CSSTransition } from 'react-transition-group';

/*
<CSSTransition
    in={this.state.show}
    timeout={300}
    classNames='fade'
    unmountOnExit // 隐藏的时候移除DOM
    onEntered={(el) => {el.style.color = 'blue'}} // 入场动画结束后执行
    appear={true} // 第一次显示的时候动画,需要定义 fade-appear , fade-appear-active
>
    <div>hello</div>
</CSSTransition>
*/


// css
// fade-enter,fade-exit: 入场/出场动画执行的第一个时刻
// fade-enter-active,fade-exit-active: 入场/出场动画执行的第二个时刻到入场/出场动画执行完成之前的时刻
// fade-enter-done,fade-exit-done: 入场/出场动画执行完成后的时刻


/*
/!*入场动画执行的第一个时刻*!/
.fade-enter,.fade-appear {
    opacity: 0;
}
/!*入场动画执行的第二个时刻到入场动画执行完成之前的时刻*!/
.fade-enter-active, .fade-appear-active {
    opacity: 1;
    transition: opacity 1s ease-in;
}
/!*入场动画执行完成后的时刻*!/
.fade-enter-done {
    opacity: 1;
}

.fade-exit {
    opacity: 1;
}

.fade-exit-active {
    opacity: 0;
    transition: opacity 1s ease-in;
}

.fade-exit-done {
    opacity: 0;
}*/
