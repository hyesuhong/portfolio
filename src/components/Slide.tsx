import { useEffect, useRef, useState } from 'react';
import { projectURL } from '../data/projects';

interface ISlideProps {
	images: projectURL[];
}

export default function Slide({ images }: ISlideProps) {
	const [index, setIndex] = useState(0);
	const slideEl = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (images.length === 1) return;
		const timer = setInterval(() => {
			setIndex((prev) => prev + 1);
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (!slideEl.current) return;
		if (!slideEl.current.children) return;

		const curIndex = index % images.length;
		Array.from(slideEl.current.children).forEach((el, order) => {
			const element = el as HTMLElement;
			element.style.opacity = order === curIndex ? '1' : '0';
		});
	}, [index]);
	return (
		<div className='project__images'>
			<div className='project__images-wrapper'>
				<div
					className='project__images-slide'
					// style={{ width: `${100 * images.length}%` }}
					ref={slideEl}
				>
					{images.map((img, index) => (
						<div className='project__images-img' key={index}>
							<img
								src={require(`../assets/images/projects/${img.url}`)}
								alt={img.title}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
