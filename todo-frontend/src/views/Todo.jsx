import { Button } from "@mui/material";

const Todo = ({ project }) => {
	console.log("Project: ", project);

	return (
		<>
			{project?.todoList?.map(todo => {
				return (
					<div key={todo.id} style={{backgroundColor: 'black', color:  'white'}}>
						<div> {todo.description} </div>

						<Button color="warning">Edit</Button>
						<Button color="error">Delete</Button>
					</div>
				);

			})}
		</>
	)
}

export default Todo;
