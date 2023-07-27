import { ReactNode } from 'react';
import { section } from './contents.css';

interface ISection {
	children: ReactNode;
}

export default function Section({ children }: ISection) {
	const sectionClass = Array.isArray(children)
		? section['default']
		: section['onlyTitle'];

	return <section className={sectionClass}>{children}</section>;
}
