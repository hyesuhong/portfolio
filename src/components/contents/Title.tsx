import { ReactNode } from 'react';
import { title as h2Title } from './contents.css';

interface ITitle {
	title: ReactNode;
}

export default function Title({ title }: ITitle) {
	return (
		<>
			<h2 className={h2Title}>{title}</h2>
		</>
	);
}
