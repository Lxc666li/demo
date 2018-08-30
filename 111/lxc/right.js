// import React from "react";
// import ReactDOM from "react-dom";
// import $ from "jquery";
// import  Promise from "./top.js";
// class Right extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 			data:[]
// 		}
// 	}
// 	render(){
// 		return(
//           <Promise promise={$.getJSON("http://api.github.com/search/repositories?q=javascript&sort=stars")}/>
// 			)
// 	}
// }
// ReactDOM.render(
// 	<Right/>,
// 	document.getElementById("app")
// )
// 
import React,{Component} from "react";
import $ from 'jquery';
const promise=new Promise(function(resolve,reject){
	$.ajax({
		url:"http://www.qhdlink.com/stutest/teacher.php",
		type:"post",
		dataType:"json",
		data:{username:"admin",pwd:"admin"},
		success:function(data){
			resolve(data);
		},
		error:function(){
			reject();
		}
	})
})
export default class prom extends Component{
	constructor(props){
		super(props)
		this.state={
			error:unll,
			data:unll
		}
	}
	componentDidMount(){
		promise.then(
		 value=>this.setState({
		 	data:value
		 }),
		 ()=>this.setState({
		 	error:new Error("error")
		 })
			)
	}
	render(){
		if(this.state.error !== null){
			console.log(this.state.data);
		}
		else if (this.state.data !== null){
			var repos=this.state.data;
			console.log(repos)
			var repList=repos.map(function(value){
				return(
                  <div>
                    <h1>{value.names}</h1>
                    <h1>{value.info}</h1>
                    <h1>{value.title}</h1>
                    <h1>{value.pic}</h1>
                  </div>
					)
			})
		}
		return(
          <div>
          {repoList}
          </div>
			)
	}
}