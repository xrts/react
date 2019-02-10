import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            show: true
        };
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            <Fragment>
                {/*<CSSTransition
                    in={this.state.show}
                    timeout={300}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => {el.style.color = 'blue'}}
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransition>*/}
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout={300}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el) => {el.style.color = 'blue'}}
                                appear={true}
                                key={index}
                            >
                            <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment>
        )
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}

export default App;