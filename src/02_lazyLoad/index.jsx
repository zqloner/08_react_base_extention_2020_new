import React,{Component,lazy,Suspense} from "react";
import {Route,NavLink} from 'react-router-dom'

// import Home from "./Home";
// import About from "./About";
//Loaing组件不能再用懒加载了。
import Loading from "./Loading";
const Home = lazy(()=> import('./Home'))
const About = lazy(()=>import('./About'))


export default class Demo extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header"><h2>React Router Demo</h2></div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*                原生html中靠<a>跳转到不通的页面*/}
                {/*                <a className="list-group-item" href="./about.html">About</a>
                   <a className="list-group-item active" href="./home.html">Home</a>  */}

                {/*                在React中靠路由链接实现切换组件*/}
                {/*路由链接*/}
                <NavLink className="list-group-item" to="/about">About</NavLink>  {/*Link标签必须包含在Router中*/}
                <NavLink className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*     注册路由     */}
                  {/*  Suspense 懒加载组件   */}
                  <Suspense fallback={<Loading/>}>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
