import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Episode 7 of Namaste React</h2>
        <UserClass name={"First"} location={"Indore Class"} />
      </div>
    );
  }
}

export default About;
