import { Button } from "@mui/material";
import "../styles/Todo.css";

const Todo = ({ todo }) => {

	return (
		<div className="todo-tile">
			<div> {todo.description} </div>

			<Button color="warning">Edit</Button>
			<Button color="error">Delete</Button>
		</div>
	);
}

export default Todo;
