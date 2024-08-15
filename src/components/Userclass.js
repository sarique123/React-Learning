import React from "react";
class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      userInfo : {
        name : "default name",
        location : "default location",
      }
    }
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/sarique123");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    })
    
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact : @mohammad123.com</h4>
      </div>
    );
  }
}

export default Userclass;
