import { dataValArr } from '../data/skills';

interface ISkillListProps {
	data: dataValArr;
}

function SkillList({ data }: ISkillListProps) {
	const { name, details } = data;

	return (
		<dl className='skill__list'>
			<dt className='skill__title'>{name}</dt>
			<dd className='skill__detail'>
				{details.map((detail, i) => (
					<p className='skill__desc' key={i}>
						{detail}
					</p>
				))}
			</dd>
		</dl>
	);
}

export default SkillList;
