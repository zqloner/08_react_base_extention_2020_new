import React,{Component} from "react";
import SetStateDemo from "./01_setState";

export default class App extends Component {
  render() {
    return (
      <div>
        <SetStateDemo num={1}/>
      </div>
    );
  }
}
