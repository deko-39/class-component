import React from "react";

class Person extends React.Component {
  constructor() {
    super();
  }

  state = {
    name: "Tien",
    age: 10,
  };

  // Run on each update
  componentDidUpdate() {
    console.log("Re-Render");
    console.log("State", this.state);
  }

  componentDidMount() {
    console.log("Mount");
  }

  //   shouldComponentUpdate() {
  //     console.log("Check if component should update");
  //     if (this.state2 !== this.previousState) {
  //       return false;
  //     }
  //     return true;
  //   }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  componentDidCatch() {
    return <> ERROR </>;
  }

  getSnapshotBeforeUpdate() {}

  handleChangeName() {
    this.setState(() => (this.state.name = "Tien Updated"));
  }

  handleChangeAge() {
    this.setState(() => (this.state.age = this.state.age + 1));
  }

  //   handleChangeAge() {
  //     this.setState(() => (this.state.age = this.state.age + 1));
  //   }

  render() {
    return (
      <>
        <div>Hello world from Person</div>
        <div>My name is {this.state.name}</div>
        <div>My age is {this.state.age}</div>
        <button type="button" onClick={this.handleChangeName.bind(this)}>
          Click to change name
        </button>
        <button type="button" onClick={this.handleChangeAge.bind(this)}>
          Click to change age
        </button>
      </>
    );
  }
}

export default Person;

// instance của Person => render => mountDom

// State name trong class component có thể đổi tên không????
// Set state trong class component bằng arrow function () => {} bị duplicate 2 lần
