import SkillItem, { ISkillItem } from './SkillItem';
import {
	skillList,
	skillListWrap,
	listTitle,
	listTitleWrap,
	skillWrap,
} from './skills.css';

interface IWrapper {
	title: string;
	data: ISkillItem[];
}

export default function Wrapper({ title, data }: IWrapper) {
	return (
		<dl className={skillWrap}>
			<dt className={listTitleWrap}>
				<h4 className={listTitle}>{title}</h4>
			</dt>
			<dd className={skillListWrap}>
				<ul className={skillList}>
					{data.map((skill, index) => (
						<SkillItem key={index} {...skill} />
					))}
				</ul>
			</dd>
		</dl>
	);
}
