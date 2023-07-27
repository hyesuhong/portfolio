import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';

export default function Projects() {
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
			</Article>
			<Article position='right'></Article>
		</Section>
	);
}
