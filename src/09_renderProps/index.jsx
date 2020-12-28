import React,{Component} from "react";

import './index.css'

/*
renderProps   类似Vue中的slot插槽技术。
 */

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h3>我是parent组件</h3>
        {/*<A>*/}
        {/*  <B/>*/}
        {/*</A>*/}
          <A render={(name)=><B name={name}/>}/>  {/*这种子组件传值的方式*/}
      </div>
    );
  }
}

class A extends Component {
  state = {name:'tom'}
  render() {
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {this.props.render(this.state.name)}
      </div>
    );
  }
}


class B extends Component {
  render() {
    return (
      <div  className="b">
        <h3>我是B组件</h3>
        <h4>我从A收到的名字是:{this.props.name}</h4>
      </div>
    );
  }
}
