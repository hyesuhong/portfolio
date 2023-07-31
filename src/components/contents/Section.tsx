import { ReactNode, RefObject } from 'react';
import { section } from './contents.css';

interface ISection {
	children: ReactNode;
	sectionRef: RefObject<HTMLElement>;
	sectionId: string;
}

export default function Section({ children, sectionRef, sectionId }: ISection) {
	const sectionClass = Array.isArray(children)
		? section['default']
		: section['onlyTitle'];

	return (
		<section id={sectionId} className={sectionClass} ref={sectionRef}>
			{children}
		</section>
	);
}
