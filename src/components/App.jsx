import React from "react";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [heading, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function handleClick(event) {
    setHeading(firstName + " " + lastName);

    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFirstName}
          value={firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleLastName}
          value={lastName}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
