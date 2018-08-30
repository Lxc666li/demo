// import React from "react";
// import ReactDOM from "react-dom";
// import "../node_modules/antd/dist/antd.css";
// import {DatePicker,Button,Icon} from "antd";
// var sty={
// 	fontSize:"40px",
// 	color:"#f00"
// }
// class One extends React.Component{
//   render(){
//     return(
//       <div>
//        <DatePicker/>
//        <Button type="primary" icon="search">1</Button>
//         <Button type="danger" icon="home">2</Button>
//          <Button type="dashed" icon="user">3</Button>
//          <Button></Button>
//          <Icon type="loading" style={{fontSize:"50px",color:"#f00"}}/>
//        </div>
//       )
//   }
// }
// ReactDOM.render(
// 	<One/>,
// 	document.getElementById("app")
// )

import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/antd/dist/antd.css";
import {Row,Col} from "antd";
class One extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Col x5={24} sm={18} md={12} lg={8} style={{border:"solid 1px #ff0"}}>Col-12</Col>
        </Row>
       </div>
      )
  }
}
ReactDOM.render(
	<One/>,
	document.getElementById("app")
)