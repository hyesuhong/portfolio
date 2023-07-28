import { useEffect, useState } from 'react';
import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import ProjectNav from '../../components/projects/ProjectNav';
import DataTable from '../../components/projects/DataTable';

import data from '../../data/projects.json';
import { project } from '../../components/projects/DataList';
import { dataObj } from '../../typeSet';

const projectData = data as dataObj<project[]>;

export default function Projects() {
	const keys = Object.keys(projectData);
	const [currentKind, setCurrentKind] = useState(keys[0]);
	const [passData, setPassData] = useState<project[]>([]);

	useEffect(() => {
		setPassData([...projectData[currentKind]]);
	}, [currentKind]);

	return (
		<Section>
			<Article position='left'>
				<Title
					title={
						<>
							<strong>Projects</strong> what I did
						</>
					}
				/>
				<ProjectNav
					keys={Array.from(keys)}
					currentKey={currentKind}
					setCurrentKey={setCurrentKind}
				/>
			</Article>
			<Article position='right'>
				<DataTable dataList={passData} kind={'personal'} />
			</Article>
		</Section>
	);
}
