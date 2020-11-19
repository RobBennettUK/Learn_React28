import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    //   const newValue = event.target.value;
    //   const inputName = event.target.name;

    //   setFullName((prevValue) => {
    //     if (inputName === "fName") {
    //       return {
    //         fName: newValue,
    //         lName: prevValue.lName
    //       };
    //     } else if (inputName === "lName") {
    //       return {
    //         fName: prevValue.fName,
    //         lName: newValue
    //       };
    //     }
    //   });
    // }

    // An Alternative
    const { value, name } = event.target;

    // Make sure you do not try to access the event within a stateful set up
    // If you tried to access it within the setFullName, what will happen is an error
    // This will warn you about using synthetic event

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
