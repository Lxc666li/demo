import React from "react";
import ReactDOM from "react-dom";


import Lxcs from "./lxcs.js";
import Header from "./header.js"; 
import Nav from "./nav.js";
import Banner from "./banner.js";
import Content from "./content.js";
import Footer from "./footer.js";
import "../css/index.css";
// ./代表当前
// var arr=[
//   <button>按钮</button>
// ]


class Hello extends React.Component{
	constructor(props){
    super(props);
      this.state={
        name:"Lily"
      }
    }
    componentWillMount(){
      console.log("componentWillMount");
    }
    componentDidMount(){
      console.log("componentDidMount");
    }
    componentWillReceiveProps(){
      console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate");
      return true;
    }
    componentWillUpdate(){
      console.log("componentWillUpdate");
    }
    componentDidUpdate(){
      console.log("componentDidUpdate");
    }
    click1=()=>{
      this.setState({
        name:"Tom"
      })
    }
  render(){
    console.log("render");
		return(
          <div>
           <h1 onClick={this.click1}>Hello {this.state.name}</h1>
           <Lxcs/>
           <Header/>
           <Nav/>
           <Banner/>
           <Content/>
           <Footer/>
          </div>
			)
	}
}


ReactDOM.render(
	<Hello/>,
	document.getElementById("app")
)