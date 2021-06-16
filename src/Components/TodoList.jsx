import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="tasks">
      {props.items.map((data) => (
        <TodoItem
          handleCheck={props.handleToggle}
          data={data.name}
          key={data.name}
        />
      ))}
    </div>
  );
}

export default TodoList;
