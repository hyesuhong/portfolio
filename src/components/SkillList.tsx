import styled from 'styled-components';
import { dataValArr } from '../data/skills';

const List = styled.dl`
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

interface ISkillListProps {
	data: dataValArr;
}

function SkillList({ data }: ISkillListProps) {
	const { name, details } = data;

	return (
		<List>
			<dt>{name}</dt>
			<dd>
				{details.map((detail, i) => (
					<p key={i}>{detail}</p>
				))}
			</dd>
		</List>
	);
}

export default SkillList;
