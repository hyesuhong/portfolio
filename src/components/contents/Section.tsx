import { HTMLAttributes, RefObject } from 'react';
import { section } from './contents.css';

interface ISection extends HTMLAttributes<Element> {
	sectionRef?: RefObject<HTMLElement>;
}

export default function Section({ children, sectionRef, id }: ISection) {
	const sectionClass = Array.isArray(children)
		? section['default']
		: section['onlyTitle'];

	return (
		<section id={id} className={sectionClass} ref={sectionRef}>
			{children}
		</section>
	);
}
