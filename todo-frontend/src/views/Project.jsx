import { useParams } from 'react-router-dom';
import "../styles/Project.css";
import Todo from './Todo';

const Project = () => {
	const { projectId } = useParams();

	return (
		<>

			<button style={{backgroundColor: 'green', width: '40px'}}>A</button>

			<Todo projectId={projectId} />
		</>
	)
}

export default Project;
