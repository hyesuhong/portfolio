import * as icons from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { dataObj } from '../../typeSet';
import { skillIcon, skillItem, skillTitle } from './skills.css';

const Icons = icons as dataObj<SimpleIcon>;

export interface ISkillItem {
	name: string;
	slug: string;
}

export default function SkillItem({ slug }: ISkillItem) {
	const iconSlug = `si${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`;
	const { path, title, hex } = Icons[iconSlug];

	const hoverColor = { '--hover-color': `#${hex}` } as React.CSSProperties;

	return (
		<li className={skillItem} style={hoverColor}>
			<svg
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={skillIcon}
			>
				<path d={path} fill='current' />
			</svg>
			<p className={skillTitle}>{title}</p>
		</li>
	);
}
