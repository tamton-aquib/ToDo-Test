import React, { createContext, useState, useEffect } from 'react';

const ProjectContext = createContext([]);

const ContextProvider = ({ children }) => {
	const [projects, setProjects] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [triggerRefetch, setTriggerRefetch] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	}
	const handleModalClose = () => {
		setModalOpen(false);
	}

	useEffect(() => {
		fetch("http://localhost:8080/project/getProjects")
			.then(response => response.json())
			.then(ps => setProjects(ps))
			.catch(error => console.error("Error fetching projects:", error));
	}, [triggerRefetch]);

	return (
		<ProjectContext.Provider value={{ projects, setProjects, modalOpen, handleModalClose, handleModalOpen, setTriggerRefetch }}>
			{ children }
		</ProjectContext.Provider>
	);
};

export { ProjectContext, ContextProvider };
