import { Link } from "react-router-dom";
import "../styles/Project.css";

const Home = () => {

	return (
		<div className="project-container">
			<Link to={`/project/1`}>
				<div className="projectile">1</div>
			</Link>
			<Link to={`/project/2`}>
				<div className="projectile">2</div>
			</Link>
			<Link to={`/project/3`}>
				<div className="projectile">3</div>
			</Link>
			<Link to={`/project/4`}>
				<div className="projectile">4</div>
			</Link>
			<Link to={`/project/5`}>
				<div className="projectile">5</div>
			</Link>
		</div>
	)
}

export default Home;
