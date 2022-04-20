import React, { useEffect, useState } from "react";

import TodoList from "./TodoList";
import DeleteButton from "./Delete";
import Heading from "./Heading";
import InputAndSubmit from "./InputAndSubmit";

function App() {
  const [items, setItems] = useState([]); //items = []

  useEffect(() => {
    const data = localStorage.getItem("data"); // [{}, {}, {}] or []

    if (data) {
      setItems(JSON.parse(data)); // items = [{}, {}, {}]
    }
  }, []);

  // Add new items to list
  function handleClick(event, item) {
    const newTask = {
      name: item,
      completed: false,
    };

    const newItems = items?.filter((item) => {
      return item.name === event.target.name;
    });

    const validity = newItems?.length >= 1;

    // Ensuring there are no duplicates
    if (validity) {
      alert("This Item is already present in list");
    } else {
      setItems((preval) => [...preval, newTask]);
      const data = JSON.parse(localStorage.getItem("data"));
      data.push(newTask);
      localStorage.setItem("data", JSON.stringify(data));
    }
  }

  // Toggle true and false
  const handleToggle = (event) => {
    console.log(event.target);
    console.log(items);
    let mapped = items.map((task) =>
      task.name === event.target.name
        ? { ...task, completed: !task.completed }
        : { ...task }
    );
    setItems(mapped);
    console.log(mapped);
    localStorage.setItem("data", JSON.stringify(mapped));
  };

  // Remove unwanted items from list
  function handleDelete(event) {
    const newItems = items.filter((item) => item.completed === false);
    setItems(newItems);
    localStorage.setItem("data", JSON.stringify(newItems));
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
