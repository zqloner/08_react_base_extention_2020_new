import React,{Component,useRef} from "react";
import ReactDOM from 'react-dom';

// class Demo extends Component {
//   state = {count:0}
//   myRef = React.createRef();
//   show = ()=>{
//       alert(this.myRef.current.value)
//     }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef}/>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     );
//   }
// }

function Demo() {
  const myRef = useRef()
 function show() {
    alert(myRef.current.value)
 }
  return (
    <div>
      <input type="text" ref={myRef}/>
      <button onClick={show}>点击提示数据</button>
    </div>
  )
}
export default Demo
