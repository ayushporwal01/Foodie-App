import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Episode 7 of Namaste React</h2>
      <User name={"Ayush Porwal(function)"} location={"Indore Function"} />
      <UserClass name={"Ayush Porwal(class)"} location={"Indore Class"} />
    </div>
  );
};

export default About;
