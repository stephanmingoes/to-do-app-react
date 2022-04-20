import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="tasks">
      {props?.items?.map((data) => (
        <TodoItem
          handleCheck={props.handleToggle}
          name={data.name}
          completed={data.completed}
          key={data.name}
        />
      ))}
    </div>
  );
}

export default TodoList;
