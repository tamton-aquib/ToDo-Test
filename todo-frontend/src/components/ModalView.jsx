import { Button, TextField, Modal } from "@mui/material";
import { useState, useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import "../styles/ModalView.css";

const ModalView = () => {
	const {modalOpen, handleModalOpen, handleModalClose, setProjects} = useContext(ProjectContext);
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const dataToUpdate = {
			title: inputValue,
			createdDate: Date.now(),
			todoList: []
		}

		fetch('http://localhost:8080/project/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToUpdate)
			}).finally(() => console.log("After post"))

		setProjects((p) => [...p, dataToUpdate])
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

			<Button className="add-project-button" variant="contained" onClick={handleModalOpen}>+</Button>
		</>
	)

}

export default ModalView;
