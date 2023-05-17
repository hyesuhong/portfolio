import { useEffect, useRef, useState } from 'react';

const intersectionOpt = {
	thresholds: 0,
	rootMargin: '-50% 0px',
};

export const useIntersection = (
	setPosition: React.Dispatch<React.SetStateAction<number>>,
	navNum: number
) => {
	const [visible, setVisible] = useState(false);
	const ref = useRef<HTMLElement>(null);

	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setPosition(navNum);
			}
			setVisible(entry.isIntersecting);
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			handleIntersection,
			intersectionOpt
		);

		if (!ref.current) return;
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);
	return { ref: ref, visible: visible };
};
