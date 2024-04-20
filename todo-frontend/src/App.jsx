import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Project from './views/Project';
import { Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { ContextProvider } from './contexts/ProjectContext';

function App() {
	const [open, setOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleOpen = () => {
		setOpen(true);
	}
	const handleClose = () => {
		setOpen(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('http://localhost:8080/project/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(
				{
					title: inputValue,
					createdDate: Date.now(),
					todoList: []
				}
			)
		}).finally(() => console.log("After post"))

		handleClose();
	}

	return (
		<ContextProvider>
			<Router>
				<div className='app-container'>
					<h2 className="app-heading">Todo App</h2>

					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='project/:projectId' element={<Project />} />
					</Routes>

					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
						className='add-project-modal'
						>

						<form>
							<TextField
								required
								id="project-title"
								label="Project Title"
								variant="outlined"
								margin="normal"
								fullWidth
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>

							<Button
								variant="contained" type="submit" sx={{ mt: 2, width: '100%' }}
								onClick={handleSubmit}
								>
								Submit
							</Button>
						</form>

					</Modal>

					<div className="add-project-button">
						<Button onClick={handleOpen}>+</Button>
					</div>

				</div>
			</Router>
		</ContextProvider>
	)
}

export default App;
