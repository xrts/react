import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List  } from 'antd';


// 无状态组件
// 性能较高
const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder="todo info"
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                <List
                    style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={() => {props.handleItemDelete(index)}}
                        >{item}</List.Item>)}
                />
            </div>
        </div>
    )
};

// // 普通UI组件
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder="todo info"
//                         style={{width:'300px',marginRight:'10px'}}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                     <List
//                         style={{width:'300px',marginTop:'10px'}}
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (
//                             <List.Item
//                                 onClick={(index) => {this.props.handleItemDelete(index)}}
//                             >{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI;