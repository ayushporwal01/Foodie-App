import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Did Mount");
    const data = await fetch("https://api.github.com/users/ayushporwal01");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card flex items-center space-x-8">
        <div className="user-img">
          <img src={avatar_url} className="rounded-full w-50" alt="Avatar" />
        </div>
        <div className="user-info">
          <h2><strong>Name: </strong>{name}</h2>
          <h3><strong>Location: </strong>{location}</h3>
          <h4><strong>Contact: </strong>porwalayush953@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
