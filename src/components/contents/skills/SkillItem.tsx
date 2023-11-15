import * as icons from 'simple-icons';
import { dataObj } from '../../../typeSet';
import Text from '../../basic/Text';
import Icon from '../../basic/Icon';
import * as S from '../../../styles/skills.css';

const Icons = icons as dataObj<icons.SimpleIcon>;

export interface ISkillItem {
	name: string;
	slug: string;
}

export default function SkillItem({ slug }: ISkillItem) {
	const iconSlug = `si${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`;
	const { title, hex, svg } = Icons[iconSlug];

	const hoverColor = { '--hover-color': `#${hex}` } as React.CSSProperties;

	return (
		<li className={S.skillItem} style={hoverColor}>
			<Icon
				className={S.skillIcon}
				dangerouslySetInnerHTML={{ __html: svg }}
			></Icon>
			<Text typography='p' className={S.skillTitle}>
				{title}
			</Text>
		</li>
	);
}
