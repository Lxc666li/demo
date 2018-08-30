import React from "react";
import ReactDOM from "react-dom";
import {Route,Link,HashRouter} from "react-router-dom";
import $ from "jquery";
var img="";
class Left extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		// $.ajax({
		// 	url:"http://www.qhdlink.com/stutest/teacher.php",
		// 	data:{username:"admin",pwd:"admin"},
		// 	dataType:"json",
		// 	type:"post",
		// 	success:function(data){
		// 		$.each(data,function(index,val){
		// 			this.setState({
		// 				name:val.names
		// 			})
		// 		}.bind(this))
		// 	}.bind(this)
		// })
		// 
		$.ajax({
		  url:"http://www.qhdlink.com/stutest/teacher.php",
	 	  data:{username:"admin",pwd:"admin"},
		  dataType:"json",
		  type:"post",
		  success:function(val){
          this.setState({
         	data:val
         })
		  }.bind(this)
	})
	}
	render(){
		var person=this.state.data;
		return(
			<div>{person.map(function(items){
				img="http://www.qhdlink.com/"+items.pic;
             return(
                 <div id="c1">
                   <img src={img}/>
                   <p>{items.names}</p>
                   <p>{items.info}</p>
                   <p>{items.title}</p>
                   <p>{items.pic}</p>
                 </div>
             	) 
			})
		}

            </div>
			)
	}
}
ReactDOM.render(
	<Left/>,
	document.getElementById("app")
)