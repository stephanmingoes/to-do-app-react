import React, { useState } from "react";

function InputAndSubmit(props) {
  const [item, setItem] = useState("");


  // Updates value of input field
  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  return (
    <div>
      <input
        className="task_input"
        autoComplete="off"
        onChange={handleChange}
        type="text"
        value={item}
      ></input>
      <button
        className="submit"
        name={item}
        type="submit"
        onClick={(event) => {
          props.handleClick(event,item);
          setItem("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default InputAndSubmit;
