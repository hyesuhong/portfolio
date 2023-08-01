import { ReactNode } from 'react';
import { title as h2Title } from './contents.css';
import Text from '../basic/Text';

interface ITitle {
	title: ReactNode;
}

export default function Title({ title }: ITitle) {
	return (
		<>
			<Text typography='h2' className={h2Title}>
				{title}
			</Text>
		</>
	);
}
