import React, { useEffect, useState } from "react";

const Person2 = () => {
  //   const [name, setName] = useState("Nam");
  //   const [age, setAge] = useState(10);

  const [state, setState] = useState({
    name: "Nam",
    age: 10,
  });
  useEffect(() => {
    console.log("Re-Render");
  }); // Run on each re-render + mount
  useEffect(() => {
    console.log("Mount");
  }, []); // Run on first time mount
  useEffect(() => {
    console.log("Check if component should update");
  }, [state]); // Run on each re-render(if state changed) + mount
  useEffect(
    () => () => {
      console.log("Component will unmount");
    },
    [state]
  ); // Run on each component unmount

  const handleChangeName = () => {
    setState({ ...state, name: "Nam Updated" });
  };

  const handleChangeAge = () => {
    setState({ ...state, age: state.age + 1 });
  };

  return (
    <>
      <div>Hello world from Person 2</div>
      <div>My name is {state.name}</div>
      <div>My age is {state.age}</div>
      <button type="button" onClick={handleChangeName}>
        Click to change name
      </button>
      <button type="button" onClick={handleChangeAge}>
        Click to change age
      </button>
    </>
  );
};

export default Person2;
