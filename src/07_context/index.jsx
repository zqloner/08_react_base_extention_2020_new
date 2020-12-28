import React,{Component} from "react";

import './index.css'

//创建Context对象
const MyContext = React.createContext()
export default class Demo extends Component {
  state = {username:'tom'}
  render() {
    return (
      <div className="parent">
        <h1>我是Demo组件,是祖组件</h1>
        <h3>我的用户名是:{this.state.username}</h3>
        {/*包裹。向后代传递参数。也可以传对象*/}
        <MyContext.Provider value={this.state.username}>
          <A username={this.state.username}/>
        </MyContext.Provider>
      </div>
    );
  }
}
class A extends Component {
  //声明接收context
  static contextType =MyContext
  render() {
    console.log(this.context)
    return (
      <div className="child">
        <h1>我是A组件,是子组件</h1>
        <h3>我从Demo组件接收到的用户名是:{this.props.username}</h3>
        <h3>我从Demo组件通过context接收到的用户名是:{this.context}</h3>
        <B username={this.props.username}/>
      </div>
    );
  }
}

//这是类组件。下面是函数式组件的写法
// class B extends Component {
//   //声明接收Context
//   static contextType =MyContext
//     render() {
//       console.log(this.context)
//     return (
//       <div className="grand">
//         <h1>我是B类组件,是孙子组件</h1>
//         <h3>我从A组件接收到的用户名是:{this.props.username}</h3>
//         <h3>我从Demo组件通过context接收到的用户名是:{this.context}</h3>
//       </div>
//     );
//   }
// }

//函数式组件
function B(){
    return (
      <div className="grand">
        <h1>我是B函数组件,是孙子组件</h1>
        <h3>我从Demo组件通过context接收到的用户名是:
          <MyContext.Consumer>
            {
              value => value
            }
          </MyContext.Consumer>
        </h3>
      </div>
    );
}
