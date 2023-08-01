import { useEffect, useId } from 'react';
import { useIntersection } from '@su-hooks/use-intersection/dist/useIntersection';
import Article from '../../components/contents/Article';
import { dataObj } from '../../typeSet';

import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import Wrapper from '../../components/skills/Wrapper';
import { ISkillItem } from '../../components/skills/SkillItem';

import skillsData from '../../data/skills.json';
import { useNavDispatch } from '../../contexts/NavContext';

export default function Skills() {
	const id = useId();
	const data = skillsData as dataObj<ISkillItem[]>;
	const keys = Object.keys(skillsData);

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
					dispatch({ type: 'change', index: 2 });
				}
			});
		},
	});

	useEffect(() => {
		if (dispatch) dispatch({ type: 'addMenu', menu: { name: 'skills', id } });

		return () => observer.disconnect();
	}, []);

	return (
		<Section id={id} sectionRef={ref}>
			<Article position='left'>
				<Title title='My <strong>skills</strong> are' />
			</Article>
			<Article position='right'>
				{keys.map((skillKey, index) => {
					return <Wrapper key={index} title={skillKey} data={data[skillKey]} />;
				})}
			</Article>
		</Section>
	);
}
