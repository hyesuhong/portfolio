import Text from '../../basic/Text';
import SkillItem, { ISkillItem } from './SkillItem';
import * as S from '../../../styles/skills.css';

interface IWrapper {
	title: string;
	data: ISkillItem[];
}

export default function Wrapper({ title, data }: IWrapper) {
	return (
		<dl className={S.skillWrap}>
			<dt className={S.listTitleWrap}>
				<Text typography='h4' className={S.listTitle}>
					{title}
				</Text>
			</dt>
			<dd className={S.skillListWrap}>
				<ul className={S.skillList}>
					{data.map((skill, index) => (
						<SkillItem key={index} {...skill} />
					))}
				</ul>
			</dd>
		</dl>
	);
}
