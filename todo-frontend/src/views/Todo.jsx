import { Button, Checkbox, Input } from "@mui/material";
import "../styles/Todo.css";
import { useContext, useState } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const Todo = ({ todoId, project }) => {
	const todo = project.todoList.find(t => t.id == todoId);
	console.log("Nice: ", todo);
	const { setTriggerRefetch } = useContext(ProjectContext);
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
		console.log("Todo Id on submit: ", todo.id)
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
		setTriggerRefetch(p => !p);
	}

	const handleCheckBoxChange = (e) => {
		setChecked(e.target.checked);

		const dataToUpdate = {
			...todo,
			id: todo.id,
			status: e.target.checked ? "COMPLETED" : "PENDING",
			updatedDate: Date.now(),
			project: { id: project.id }
		}
		fetch('http://localhost:8080/todo/update', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToUpdate)
			}).finally(() => console.log("After Todo put"))

		console.log("Todo id on checkboxchange: ", todo.id)
	}

	return (
		<div className="todo-tile">
			<div className="todo-description">
				<Checkbox onChange={handleCheckBoxChange} checked={checked} />

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
