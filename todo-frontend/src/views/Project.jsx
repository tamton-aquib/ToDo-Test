import { useParams } from 'react-router-dom';
import "../styles/Project.css";

const Project = () => {
	const { projectId } = useParams();
	console.log("Id: ", projectId)

	return (
		<div className="project">
			Echo: {projectId}
		</div>
	)
}

export default Project;
