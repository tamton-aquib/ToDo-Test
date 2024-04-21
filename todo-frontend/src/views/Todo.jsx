import { Button } from "@mui/material";
import "../styles/Todo.css";

const Todo = ({ todo }) => {

	const deleteTodo = () => {
		if (todo.id) {
			// TODO: not working for some reason.
			const url = `http://localhost:8080/todo/deleteTodo/${todo.id}`
			fetch(url, { method: 'DELETE' }).finally(() => console.log("After DELETE"))
		} else {
			console.error("Did not find the Id.")
		}
	}

	return (
		<div className="todo-tile">
			<div> {todo.description} </div>

			<Button color="warning">Edit</Button>
			<Button color="error" onClick={deleteTodo}>Delete</Button>
		</div>
	);
}

export default Todo;
