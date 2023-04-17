import Section from '../components/Section';
import SkillList from '../components/SkillList';
import { skillData } from '../data/skills';

export default function Skills() {
	const dataKeys = Object.keys(skillData);
	const skill = dataKeys[0];

	return (
		<Section
			id='skills'
			title={
				<>
					My <strong>skills</strong> are
				</>
			}
			rightChild={skillData[skill].map((data, key) => (
				<SkillList data={data} key={key} />
			))}
		/>
	);
}
