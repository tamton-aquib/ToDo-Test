import { Button, TextField, Modal } from "@mui/material";
import { useState, useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const ModalView = () => {
	const { modalOpen, handleModalOpen, handleModalClose } = useContext(ProjectContext);
	const [inputValue, setInputValue] = useState('');

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

		handleModalClose();
	}

	return (
		<>
		<Modal
			open={modalOpen}
			onClose={handleModalClose}
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
			<Button onClick={handleModalOpen}>+</Button>
		</div>
		</>

	)

}

export default ModalView;
