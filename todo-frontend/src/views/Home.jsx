import { Link } from "react-router-dom";
import "../styles/Project.css";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { Box, Card, Typography } from "@mui/material";
import ExportButton from "../components/ExportButton";

const Home = () => {
	const { projects } = useContext(ProjectContext);

	const formatCreatedDate = (ds) => {
		const date = new Date(ds);
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}

	return (
		<div className="project-container">
			{ projects?.map(project => {
				return (
					<Card variant="outlined" key={project.id} className="projectile">
						<span>
							<Box sx={{color: 'text.secondary', fontSize: 14}}>{formatCreatedDate(project.createdDate)}</Box>
							<Link to={`/project/${project.id}`} className="link-style">
								<Typography variant="h6" style={{fontFamily: 'Poppins'}}>{project.title}</Typography>
							</Link>
							<Box sx={{color: 'text.secondary'}}>Todos: {project.todoList.length}</Box>
						</span>

						<div className="export-icon">
							<ExportButton project={project} />
						</div>
					</Card>
				)
			}) }
		</div>
	)
}

export default Home;
