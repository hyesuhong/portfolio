import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';

export default function About() {
	return (
		<Section>
			<Article position='left'>
				<Title
					title={
						<>
							Who am <strong>I</strong>
						</>
					}
				/>
			</Article>
			<Article position='right'></Article>
		</Section>
	);
}
