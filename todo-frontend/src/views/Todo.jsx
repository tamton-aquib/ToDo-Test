import { Button, Checkbox, Input } from "@mui/material";
import "../styles/Todo.css";
import { useState } from "react";

const Todo = ({ todo, project }) => {
	const [toggleEditTodo, setToggleEditTodo] = useState(false);
	const [todoDescription, setTodoDescription] = useState(todo.description);
	const [checked, setChecked] = useState(todo.status === "COMPLETED");

	const deleteTodo = () => {
		if (todo.id) {
			// TODO: not working for some reason.
			const url = `http://localhost:8080/todo/deleteTodo/${todo.id}`
			fetch(url, { method: 'DELETE' }).finally(() => console.log("After DELETE"))
		} else {
			console.error("Did not find the Id.")
		}
	}

	const submitUpdatedTodo = () => {
		const dataToUpdate = {
			...todo,
			id: todo.id,
			description: todoDescription,
			updatedDate: Date.now(),
			project: { id: project.id }
		}

		fetch('http://localhost:8080/todo/update', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToUpdate)
			}).finally(() => console.log("After Todo put"))

		setToggleEditTodo(p => !p);
	}

	const handleOnChange = (e) => {
		setChecked(e.target.checked);

		const dataToUpdate = {
			...todo,
			status: e.target.checked ? "COMPLETED" : "PENDING",
			updatedDate: Date.now(),
			project: { id: project.id }
		}
		fetch('http://localhost:8080/todo/update', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToUpdate)
			}).finally(() => console.log("After Todo put"))
	}

	return (
		<div className="todo-tile">
			<div className="todo-description">
				<Checkbox onChange={handleOnChange} checked={checked} />

				{
					toggleEditTodo ?
						<div>
							<Input autoFocus value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
						</div>
						:
						<div style={{textDecoration: checked ? 'line-through' : 'none'}}>{todoDescription}</div>
				}
			</div>

			<div className="todo-edit-save-cancel">
				{

					toggleEditTodo ?
						<Button onClick={submitUpdatedTodo} color="warning">Save</Button>
						:
						<Button onClick={() => setToggleEditTodo(p => !p)} color="warning">Edit</Button>
				}
				<Button color="error" onClick={deleteTodo}>Delete</Button>
			</div>
		</div>
	);
}

export default Todo;
