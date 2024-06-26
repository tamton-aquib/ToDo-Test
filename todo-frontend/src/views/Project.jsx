import { useParams } from 'react-router-dom';
import "../styles/Project.css";
import Todo from './Todo';
import { Button, IconButton, Input } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';
import { Create } from '@mui/icons-material';

const Project = () => {
	// PERF: The whole component gets re-rendered when changing input somehow.
	const { projectId } = useParams();
	const { projects, setTriggerRefetch } = useContext(ProjectContext);

	const [insertTodo, setInsertTodo] = useState(false);
	const [input, setInput] = useState('');
	const [currentProject, setCurrentProject] = useState();
	const [projectTitle, setProjectTitle] = useState();
	const [changeProjectTitle, setChangeProjectTitle] = useState(false);

	useEffect(() => {
		const p = projects.find(p => p.id == projectId);
		setCurrentProject(p);
		setProjectTitle(p?.title);
	}, [projects])

	useEffect(() => {
		setTriggerRefetch(p => !p);
	}, [])

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

		setCurrentProject(p => ({...p, todoList: [...p.todoList, dataToUpdate]}))

		toggleTodoButton();
	}

	const handleProjectTitleChange = (e) => {
		setProjectTitle(e.target.value);
	}

	const submitProjectTitle = () => {
		const dataToUpdate = {
			...currentProject,
			title: projectTitle
		}

		fetch('http://localhost:8080/project/update', {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToUpdate)
			}).finally(() => console.log("After put"))

		setChangeProjectTitle(p => !p);
		setInput('');
	}

	return (
		<>
			<div className='project-page-top-elements'>
				{
					changeProjectTitle ?
						<>
							<Input autoFocus value={projectTitle} onChange={handleProjectTitleChange} />
							<Button onClick={submitProjectTitle}>Submit</Button>
						</>
						:
						<span>
							<span>{projectTitle}</span>
							<span onClick={() => setChangeProjectTitle(p => !p)}>
								<IconButton>
									<Create fontSize='10' />
								</IconButton>
							</span>
						</span>
				}

				<div>
					{
						insertTodo ?
							(
								<span>
									<Input autoFocus value={input} onChange={handleInputChange} />
									<Button color='primary' onClick={addTodo}>SUMBIT</Button>
									<Button color='secondary' onClick={toggleTodoButton}>CANCEL</Button>
								</span>
							)
							:
							<Button onClick={() => {
								toggleTodoButton()
								setInput('');
						}}>Add</Button>
					}
				</div>
			</div>

			{currentProject?.todoList?.map(todo => <Todo key={todo.id} project={currentProject} todoId={todo.id} />)}
		</>
	)
}

export default Project;
