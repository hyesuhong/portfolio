import { ReactNode } from 'react';

interface ISectionProps {
	id: string;
	title: ReactNode;
	leftChild?: ReactNode;
	rightChild?: ReactNode;
}

export default function Section({
	id,
	title,
	leftChild,
	rightChild,
}: ISectionProps) {
	return leftChild || rightChild ? (
		<section id={id} className='section'>
			<article className='article article-left'>
				<h2 className='section__title section__title-inside'>{title}</h2>
				{leftChild}
			</article>
			<article className='article article-right'>{rightChild}</article>
		</section>
	) : (
		<section id={id} className='section section-noChild'>
			<h2 className='section__title'>{title}</h2>
		</section>
	);
}
