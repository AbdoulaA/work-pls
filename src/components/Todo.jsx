import './Todo.css'

function Todo({ title, onTodoDelete}) {
  function deleteTodo() {
    console.log("deleteTodo", title)
  }
  return (
    <div className='todo'>
      <h2>{ title }</h2>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
