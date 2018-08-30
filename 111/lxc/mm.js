import React from "react";
import ReactDOM from "react-dom";
import Right from "./right.js";
class Mm extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}
	render(){
		return(
           <div>
            <Right/>
           </div>
			)
	}
}
 ReactDOM.render(
 	<Mm/>,
	document.getElementById("app")
	 )