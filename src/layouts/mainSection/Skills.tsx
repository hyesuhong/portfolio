import Article from '../../components/contents/Article';
import { dataObj } from '../../typeSet';

import Section from '../../components/contents/Section';
import Title from '../../components/contents/Title';
import Wrapper from '../../components/skills/Wrapper';
import { ISkillItem } from '../../components/skills/SkillItem';

import skillsData from '../../data/skills.json';

export default function Skills() {
	const data = skillsData as dataObj<ISkillItem[]>;
	const keys = Object.keys(skillsData);

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
			<Article position='right'>
				{keys.map((skillKey, index) => {
					return <Wrapper key={index} title={skillKey} data={data[skillKey]} />;
				})}
			</Article>
		</Section>
	);
}
