import styled from 'styled-components';
import Section from '../components/Section';
import { dataValArr, skillData } from '../data/skills';

const SkillList = styled.dl`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px 10px;

	&:not(:last-child) {
		border-bottom: 1px solid ${(props) => props.theme.textColor};
	}

	dt {
		flex: 1;
		font-size: 32px;
		font-weight: 700;
	}

	dd {
		flex: 1;
		padding-left: 20px;
		padding-right: 10px;

		p {
			font-size: 16px;
			font-weight: 300;
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

const listFormat = (data: dataValArr, key: number) => {
	const { name, details } = data;

	return (
		<SkillList key={key}>
			<dt>{name}</dt>
			<dd>
				{details.map((detail, i) => (
					<p key={i}>{detail}</p>
				))}
			</dd>
		</SkillList>
	);
};

export default function Skills() {
	const dataKeys = Object.keys(skillData);
	const skill = dataKeys[0];

	return (
		<Section
			id='skills'
			title={
				<>
					My&nbsp;<strong>skills</strong>&nbsp;are
				</>
			}
			rightChild={skillData[skill].map((data, key) => listFormat(data, key))}
		/>
	);
}
