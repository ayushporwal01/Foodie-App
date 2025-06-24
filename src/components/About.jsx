import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Episode 7 of Namaste React</h2>
        <UserClass name={"Ayush Porwal(class)"} location={"Indore Class"} />
      </div>
    );
  }
}

export default About;
