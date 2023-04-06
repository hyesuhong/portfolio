import { useEffect, useState } from 'react';

export default function useScroll() {
	// scroll event
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [bodyOffset, setBodyOffset] = useState(
		document.body.getBoundingClientRect()
	);
	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const [scrollDirection, setScrollDirection] = useState('');

	const handleScroll = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
		setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
		setLastScrollTop(-bodyOffset.top);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return {
		scrollY,
		scrollDirection,
	};
}
