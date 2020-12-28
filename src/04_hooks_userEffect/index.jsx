import React,{Component,useState, useEffect} from "react";
import ReactDOM from 'react-dom';

// class Demo extends Component {
//   state = {count:0}
//
//   add = ()=>{
//     this.setState(state=>({count:state.count+1}))
//   }
//
//   unMount = ()=>{
//       ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//
//   componentDidMount() {
//     this.timer = setInterval(()=>{
//         this.setState(state=>({count:state.count+1}))
//       },1000)
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//
//   render() {
//     return (
//       <div>
//         <h2>当前求和状态为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unMount}>点我卸载组件</button>
//       </div>
//     );
//   }
// }

function Demo() {
  const [count,setCount] = React.useState(0)
  React.useEffect(()=>{
    let timer = setInterval(()=>{
        setCount(count=>count+1)
      },1000)
    return ()=>{
        clearInterval(timer)
      }
  },[])//第二个参数不写,谁也不监测,第二个参数写[],谁都监测。
  /*
  React.userEffect(()=>{console.log("@")},[])//第二个参数不写,谁也不监测,第二个参数写[],谁都监测。
   */

  function add() {
    setCount(count=>count+1)//第二种写法
  }
  function unMount() {//卸载组件的回调
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  /*
  总结：
                useEffect(() => {
                      // 在此可以执行任何带副作用操作。
                      return () => { // 在组件卸载前执行
                        // 在此做一些收尾工作, 比如清除定时器/取消订阅等。这里return的函数就是componentWillUnmount()钩子
                      }
                    }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行

   */

  return (
    <div>
      <h2>当前求和状态为:{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unMount}>点我卸载组件</button>
    </div>
  )
}
export default Demo
