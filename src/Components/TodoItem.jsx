function TodoItem(props) {
  return (
    <div>
      <input onClick={props.handleCheck} name={props.data} type="checkbox" />
      <li>{props.data}</li>
    </div>
  );
}

export default TodoItem;
