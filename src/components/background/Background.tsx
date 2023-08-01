import { useEffect, useState } from 'react';
import { circle, wrapper } from './background.css';

interface IBackground {
	isMobile: boolean;
}

export default function Background({ isMobile }: IBackground) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		function handleMove(e: PointerEvent) {
			const { pageX, pageY } = e;
			const { innerWidth, innerHeight } = window;

			const centerX = pageX - innerWidth / 2;
			const centerY = pageY - innerHeight / 2;
			const percentX = (centerX / innerWidth) * 10;
			const percentY = (centerY / innerHeight) * 2;

			setPosition({ x: percentX, y: percentY });
		}

		if (isMobile) {
			window.removeEventListener('pointermove', handleMove);
		} else {
			window.addEventListener('pointermove', handleMove);
		}

		return () => {
			window.removeEventListener('pointermove', handleMove);
		};
	}, [isMobile]);

	return (
		<div className={wrapper}>
			<span
				className={circle['blue']}
				style={{
					transform: `translate(${position.x}%, ${position.y}%)`,
				}}
			></span>
			<span
				className={circle['purple']}
				style={{
					transform: `translate(${position.x}%, ${position.y}%)`,
				}}
			></span>
		</div>
	);
}
