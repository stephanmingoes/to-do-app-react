function DeleteButton(props) {
  return (
    <button className="delete" onClick={props.handleDelete} type="submit">
      <i className="far fa-trash-alt"></i>
    </button>
  );
}

export default DeleteButton;
