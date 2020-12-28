import React,{Component} from "react";

// class Demo extends Component {
//   state = {count:0}
//
//   add = ()=>{
//     this.setState(state=>({count:state.count+1}))
//   }
//   render() {
//     return (
//       <div>
//         <h2>当前求和状态为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//       </div>
//     );
//   }
// }

function Demo() {
  //这个函数返回两个值的数组,第一个是state状态,第二个是更改状态的函数
  const [count,setCount] = React.useState(0)  //初始化状态
  const [name,setName] = React.useState('tom')  //初始化状态,多个state需要些多句userState
  //按照数组的解构，解构出来看。
  console.log(count,setCount)

  function add() {
    console.log("点击了add函数")
    // setCount(count+1)//第一种写法,类似于setState
    setCount(count=>count+1)//第二种写法
  }

  function changeName() {
    setName('jack')//第一种写法
    // setName(()=>'jack')//第e二种写法
  }
  return (
    <div>
      <h2>当前求和状态为:{count}</h2>
      <h2>我的名字是:{name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
    </div>
  )
}
export default Demo
