import { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.completed);

  return (
    <div>
      <input
        onClick={props.handleCheck}
        name={props.name}
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <li>{props.name}</li>
    </div>
  );
}

export default TodoItem;
