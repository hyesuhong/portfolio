import { useEffect, useId, useState } from 'react';
import { useIntersection } from '@su-hooks/use-intersection/dist/useIntersection';
import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import ProjectNav from '../../components/projects/ProjectNav';
import DataTable from '../../components/projects/DataTable';

import data from '../../data/projects.json';
import { project } from '../../components/projects/DataList';
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

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		setPassData([...projectData[currentKind]]);
	}, [currentKind]);

	return (
		<Section id={id} sectionRef={ref}>
			<Article position='left'>
				<Title title='<strong>Projects</strong> what I did' />
				<ProjectNav
					keys={Array.from(keys)}
					currentKey={currentKind}
					setCurrentKey={setCurrentKind}
				/>
			</Article>
			<Article position='right'>
				<DataTable dataList={passData} kind={currentKind} />
			</Article>
		</Section>
	);
}
