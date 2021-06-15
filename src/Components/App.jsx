import React, { useState } from "react";
import data from "../data";

function App() {
  const [items, setItems] = useState(data);
  const [item, setItem] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick(event) {
    const validity = items.includes(event.target.name); // true or false
    validity
      ? alert("This Item is already present in list")
      : setItems((preVal) => [...preVal, item]);
    setItem("");
  }

  function handleCheck(event) {
    const newItems = items.filter((item) => item !== event.target.name);
    setItems(newItems);
    console.log(event.target);

    // Remove unwanted items from list
  }
  return (
    <div className="container">
      <h1 className="heading">TODO LIST</h1>
      <div className="form">
        <input
          className="task_input"
          autoComplete="off"
          onChange={handleChange}
          type="text"
          name="task"
          value={item}
        ></input>
        <button name={item} type="submit" onClick={handleClick}>
          +
        </button>

        <div className="task">
          {items.map((data) => (
            <div key={data}>
              <input onClick={handleCheck} name={data} type="checkbox" />
              <li>{data}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
