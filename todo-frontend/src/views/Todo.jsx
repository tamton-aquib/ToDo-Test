import { Button } from "@mui/material";

const Todo = ({ project }) => {
	console.log("Project: ", project);

	return (
		<>
			{project.todoList.map(todo => {
				return (
					<div key={todo} style={{backgroundColor: 'black', color:  'white'}}>
						<div> {todo} </div>

						<Button color="warning">Edit</Button>
						<Button color="error">Delete</Button>
					</div>
				);

			})}
		</>
	)
}

export default Todo;
