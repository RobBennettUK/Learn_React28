import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function handleFname(event) {
    setFName(event.target.value);
  }

  function handleLname(event) {
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleFname}
          value={fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleLname}
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
