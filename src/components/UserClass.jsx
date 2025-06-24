import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      //count2: 0
    };

    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Did Mount");

    //Api calls
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              //count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ayushporwal1</h4>
      </div>
    );
  }
}

export default UserClass;


/*
Parent Constructor
Parent Render
  - Ayush LifeCycle
  - Elon Did Mount

  - Ayush Did Mount
  - Elon LifeCycle
Parent Did Mount
*/ 