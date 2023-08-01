import { useEffect, useId, useState } from 'react';
import { useIntersection } from '@su-hooks/use-intersection/dist/useIntersection';
import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import ProjectNav from '../../components/contents/projects/ProjectNav';
import DataTable from '../../components/contents/projects/DataTable';

import data from '../../data/projects.json';
import { project } from '../../components/contents/projects/DataList';
import { dataObj } from '../../typeSet';
import { useNavDispatch } from '../../contexts/NavContext';

const projectData = data as dataObj<project[]>;

export default function Projects() {
	const id = useId();
	const keys = Object.keys(projectData);
	const [currentKind, setCurrentKind] = useState(keys[0]);
	const [passData, setPassData] = useState<project[]>([]);

	const dispatch = useNavDispatch();

	const { ref, observer } = useIntersection<HTMLElement>({
		rootMargin: {
			top: '-50%',
			bottom: '-50%',
			left: 0,
			right: 0,
		},
		handleIntersection: (entries) => {
			if (!dispatch) return;
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					dispatch({ type: 'change', index: 1 });
				}
			});
		},
	});

	useEffect(() => {
		if (dispatch) dispatch({ type: 'addMenu', menu: { name: 'projects', id } });
		setPassData([...projectData[currentKind]]);

		return () => observer.disconnect();
	}, []);

	return (
		<Section id={id} sectionRef={ref}>
			<Article position='left'>
				<Title title='<strong>Projects</strong> what I did' />
				<ProjectNav
					keys={Array.from(keys)}
					currentKey={currentKind}
					totalData={projectData}
					setCurrentKey={setCurrentKind}
					setPassData={setPassData}
				/>
			</Article>
			<Article position='right'>
				<DataTable dataList={passData} kind={currentKind} />
			</Article>
		</Section>
	);
}
