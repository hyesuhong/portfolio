import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';

export default function Skills() {
	return (
		<Section>
			<Article position='left'>
				<Title
					title={
						<>
							My <strong>skills</strong> are
						</>
					}
				/>
			</Article>
			<Article position='right'></Article>
		</Section>
	);
}
