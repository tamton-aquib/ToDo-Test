
const Todo = ({ projectId }) => {
	return (
		<>
			<div>
				Todo Description for projectId: {projectId}.
			</div>

			<button style={{backgroundColor: 'orange', width: '40px'}}>E</button>
			<button style={{backgroundColor: 'red', width: '40px'}}>D</button>
		</>
	)
}

export default Todo;
