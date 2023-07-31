import { useEffect, useRef, useState } from 'react';
import { projectURL } from './DataList';
import {
	slideContainer,
	slideImage,
	slideSlide,
	slideWrapper,
} from './projects.css';

interface ISlide {
	images: projectURL[];
}

export default function Slide({ images }: ISlide) {
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

		const curIndex = index % images.length;

		slideEl.current.style.transform = `translateX(-${
			(100 / images.length) * curIndex
		}%)`;
	}, [index]);

	return (
		<>
			<div className={slideContainer}>
				<div
					className={slideWrapper}
					style={{ width: `${100 * images.length}%` }}
					ref={slideEl}
				>
					{images.map((img, index) => {
						const imgUrl = new URL(
							`../../assets/projects/${img.url}`,
							import.meta.url
						).href;
						return (
							<div className={slideSlide} key={index}>
								<img src={imgUrl} alt={img.title} className={slideImage} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
