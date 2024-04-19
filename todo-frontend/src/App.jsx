import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Project from './views/Project';

function App() {

	return (
		<Router>
			<div className='app-container'>
				<h2 className="app-heading">Todo App</h2>
				<Routes>

					<Route exact path='/' element={<Home />} />
					<Route path='project/:projectId' element={<Project />} />

					{/* <div className="add-project-button"> + </div> */}
				</Routes>
			</div>
		</Router>
	)
}

export default App;
