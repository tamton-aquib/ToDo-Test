import { Link } from "react-router-dom";
import "../styles/Project.css";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const Home = () => {
	const { projects } = useContext(ProjectContext);

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
