import Article from '../../components/contents/Article';
import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import Wrapper from '../../components/about/Wrapper';
import Introduction from '../../components/about/Introduction';
import History from '../../components/about/History';

import aboutData from '../../data/about.json';

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
			<Article position='right'>
				<Wrapper>
					<Introduction data={aboutData.introduce} />
					<History data={aboutData.history} />
				</Wrapper>
			</Article>
		</Section>
	);
}
