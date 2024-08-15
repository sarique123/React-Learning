import User from "./User";
import Userclass from "./Userclass";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
   // console.log("Parent constructor");
    
  }

  componentDidMount(){
   // console.log("Parent componentDidMount");
  }
  render(){
    //console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is about page</h2>
        {/* <Userclass name = {"Mohammad Sarique"} location = {"Sultanpur, U.P."} contact ={"itz_sarique"}/>
        <Userclass name = {"Manish Yadav"} location = {"Mau, U.P."} contact = {"raghavmanish"}/> */}
        <Userclass />
      </div>
    );
  }
}
export default About;
