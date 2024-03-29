import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Text from '../../basic/Text';
import * as S from '../../../styles/about.css';

type IntroObj = {
	keyword: string;
	description: string;
};

interface IIntroduction {
	data: IntroObj[];
}

export default function Introduction({ data }: IIntroduction) {
	const [currentKeyword, setCurrentKeyword] = useState('');

	const [desc, setDesc] = useState('');

	useEffect(() => {
		setCurrentKeyword(data[0].keyword);
	}, [data]);

	useEffect(() => {
		const target = data.find((el) => el.keyword === currentKeyword);
		if (!target) return;
		setDesc(target.description);
	}, [currentKeyword]);

	return (
		<div className={S.introWrap}>
			<div className={S.introTitleWrap}>
				<Dropdown
					keywords={Object.values(data).map(({ keyword }) => keyword)}
					currentKey={currentKeyword}
					setCurrentKey={setCurrentKeyword}
				/>
				<Text typography='h3' className={S.introTitle}>
					고민하는 개발자입니다.
				</Text>
			</div>
			{desc && (
				<Text typography='p' className={S.para}>
					{desc}
				</Text>
			)}
		</div>
	);
}
