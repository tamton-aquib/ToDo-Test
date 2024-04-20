import { Link } from "react-router-dom";
import "../styles/Project.css";
import { useEffect, useState } from "react";

const Home = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8080/project/getProjects")
			.then(response => response.json())
			.then(setProjects)
			.catch(error => console.error("Error fetching projects:", error));
	}, []);

	return (
		<div className="project-container">
			{ projects.map(project => {
				return (
					<div key={project.id} className="projectile">
						<Link to={`/project/${project.id}`}>
							{project.id}
						</Link>
					</div>
				)
			}) }
		</div>
	)
}

export default Home;
