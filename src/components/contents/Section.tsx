import { HTMLAttributes, RefObject } from 'react';
import * as S from '../../styles/contents.css';

interface ISection extends HTMLAttributes<Element> {
	sectionRef?: RefObject<HTMLElement>;
}

export default function Section({ children, sectionRef, id }: ISection) {
	const sectionClass = Array.isArray(children)
		? S.section.default
		: S.section.onlyTitle;

	return (
		<section id={id} className={sectionClass} ref={sectionRef}>
			{children}
		</section>
	);
}
