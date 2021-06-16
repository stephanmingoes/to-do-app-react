import React, { useState } from "react";
import data from "../data";
import TodoList from "./TodoList";
import DeleteButton from "./Delete";
import Heading from "./Heading";
import InputAndSubmit from "./InputAndSubmit";

function App() {
  const [items, setItems] = useState(data);


  // Add new items to list
  function handleClick(event, item) {
    const newTask = {
      name: item,
      completed: false,
    };

    const newItems = items.filter((item) => {
      return item.name === event.target.name;
    });

    const validity = newItems.length >= 1;

    // Ensuring there are no duplicates
    validity
      ? alert("This Item is already present in list")
      : setItems((preVal) => [...preVal, newTask]);
  }

  // Toggle true and false
  const handleToggle = (event) => {
    let mapped = items.map((task) =>
      task.name === event.target.name
        ? { ...task, completed: !task.completed }
        : { ...task }
    );
    setItems(mapped);
  };

  // Remove unwanted items from list
  function handleDelete(event) {
    const newItems = items.filter((item) => item.completed === false);
    setItems(newItems);
  }
  return (
    <div className="container">
      <Heading />
      <InputAndSubmit handleClick={handleClick} />
      <TodoList handleToggle={handleToggle} items={items} />
      <DeleteButton handleDelete={handleDelete} />
    </div>
  );
}

export default App;
