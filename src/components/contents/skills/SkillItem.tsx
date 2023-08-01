import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { dataObj } from '../../../typeSet';
import { skillIcon, skillItem, skillTitle } from './skills.css';
import Text from '../../basic/Text';
import Icon from '../../basic/Icon';

const Icons = icons as dataObj<SimpleIcon>;

export interface ISkillItem {
	name: string;
	slug: string;
}

export default function SkillItem({ slug }: ISkillItem) {
	const iconSlug = `si${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`;
	const { title, hex, svg } = Icons[iconSlug];

	const hoverColor = { '--hover-color': `#${hex}` } as React.CSSProperties;

	return (
		<li className={skillItem} style={hoverColor}>
			<Icon
				className={skillIcon}
				dangerouslySetInnerHTML={{ __html: svg }}
			></Icon>
			<Text typography='p' className={skillTitle}>
				{title}
			</Text>
		</li>
	);
}
