import UserContext from "../utils/UserContext";
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
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-center items-center">
        <UserClass name={"First"} location={"Indore Class"} />
      </div>
    );
  }
}

export default About;
