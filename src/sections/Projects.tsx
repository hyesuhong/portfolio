import { useMemo, useState } from 'react';
import Section from '../components/Section';
import { projectData, projectKind } from '../data/projects';
import ProjectTable from '../components/ProjectTable';
import Selectlist from '../components/Selectlist';

function Projects() {
	const projectKinds = Object.keys(projectKind);
	const [pKind, setPKind] = useState(projectKinds[0]);

	const data = useMemo(() => {
		return pKind === 'all'
			? projectData
			: projectData.filter((d) => d.kind === pKind);
	}, [pKind]);

	return (
		<Section
			id='projects'
			title={
				<>
					<strong>Projects</strong> what I did
				</>
			}
			leftChild={
				<Selectlist
					kindName='pKind'
					kinds={projectKind}
					currentKind={pKind}
					setKind={setPKind}
				/>
			}
			rightChild={<ProjectTable data={data} />}
		></Section>
	);
}

export default Projects;
