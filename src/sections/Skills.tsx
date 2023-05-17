import Section from '../components/Section';
import SkillList from '../components/SkillList';
import { skillData } from '../data/skills';

interface ISkillsProps {
	isRef: React.RefObject<HTMLElement>;
}

export default function Skills({ isRef }: ISkillsProps) {
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
			isRef={isRef}
		/>
	);
}
