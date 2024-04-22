import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material"

const ExportButton = ({ project }) => {

	const generateSummary = () => {
		let summary = ""
		const pending = project.todoList
			.filter(t => t.status === "PENDING" && t.description.length)
			.map(t => "- [ ] " + t.description)
			.join('\n');
		const completed = project.todoList.
			filter(t => t.status === "COMPLETED" && t.description.length)
			.map(t => "- [x] " + t.description)
			.join('\n');

		summary += `# ${project.title}\n`
		summary += `\nSummary: ${completed.length} / ${project.todoList.length} todos completed\n`
		if (pending.length)
			summary += `\n## Pending\n${pending}\n`
		if (completed.length)
			summary += `\n## Compeleted\n${completed}\n`

		return summary;
	}

	const cleanFileName = project?.title.replace(/[^\w\s.-]/g, '');

	const downloadGist = () => {
		const summary = generateSummary();
		const element = document.createElement('a');
		const file = new Blob([summary], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = `${cleanFileName}.md`;
		document.body.appendChild(element);
		element.click();
	};

	return (
		<>
			<IconButton onClick={downloadGist} style={{height: '50%'}} aria-label="Export as Gist">
				<Download />
			</IconButton>
		</>
	);

}

export default ExportButton;
