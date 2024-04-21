import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Project from './views/Project';
import { ContextProvider } from './contexts/ProjectContext';
import ModalView from './components/ModalView';

function App() {
	return (
		<ContextProvider>
			<Router>
				<div className='app-container'>
					<h2 className="app-heading">Todo App</h2>

					<div id='divider'></div>

					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='project/:projectId' element={<Project />} />
					</Routes>

					<ModalView />
				</div>
			</Router>
		</ContextProvider>
	)
}

export default App;
