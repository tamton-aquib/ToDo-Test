import { useParams } from 'react-router-dom';
import "../styles/Project.css";
import Todo from './Todo';
import { Button, Input } from '@mui/material';
import { useCallback, useContext, useState } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const Project = () => {
	/// PERF: The whole component gets re-rendered when changing input somehow.
	const { projectId } = useParams();
	const { projects } = useContext(ProjectContext);
	const [insertTodo, setInsertTodo] = useState(false);
	const [input, setInput] = useState('');
	const currentProject = projects.find(p => p.id == projectId);

	const toggleTodoButton = () => setInsertTodo(p => !p);

	const handleInputChange = useCallback((e) => {
		setInput(e.target.value);
	}, [])

	const addTodo = (e) => {
		e.preventDefault();

		const dataToUpdate = {
			createdDate: Date.now(),
			updatedDate: Date.now(),
			description: input,
			status: "PENDING",
			project: {
				id: parseInt(projectId)
			}
		}

		fetch('http://localhost:8080/todo/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataToUpdate)
		}).finally(() => console.log("After post"))

		toggleTodoButton();
	}

	return (
		<>
			{
				insertTodo ?
					(
						<span>
							<Input value={input} onChange={handleInputChange} />
							<Button color='primary' onClick={addTodo}>SUMBIT</Button>
							<Button color='secondary' onClick={toggleTodoButton}>CANCEL</Button>
						</span>
					)
					:
					<Button onClick={toggleTodoButton}>Add</Button>
			}

			<Todo project={currentProject} />
		</>
	)
}

export default Project;
