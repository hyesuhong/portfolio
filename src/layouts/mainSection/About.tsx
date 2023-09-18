import { useEffect, useId } from 'react';
import { useIntersection } from '@su-hooks/use-intersection/dist/useIntersection';
import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import Wrapper from '../../components/contents/about/Wrapper';
import History from '../../components/contents/about/History';

import aboutData from '../../data/about.json';
import { useNavDispatch } from '../../contexts/NavContext';

export default function About() {
	const id = useId();
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
					dispatch({ type: 'change', index: 0 });
				} else {
					if (entry.boundingClientRect.top > 0) {
						// 위로
						dispatch({ type: 'change', index: -1 });
					}
				}
			});
		},
	});

	useEffect(() => {
		if (dispatch) dispatch({ type: 'addMenu', menu: { name: 'about', id } });

		return () => observer.disconnect();
	}, []);

	return (
		<Section id={id} sectionRef={ref}>
			<Article position='left'>
				<Title title='Who am <strong>I</strong>' />
			</Article>
			<Article position='right'>
				<Wrapper>
					<History data={aboutData.history} />
				</Wrapper>
			</Article>
		</Section>
	);
}
