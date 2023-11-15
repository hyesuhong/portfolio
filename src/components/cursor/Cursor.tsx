import { useEffect, useState } from 'react';
import * as S from './cursor.css';

const Cursor = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [classname, setClassname] = useState(S.circle.basic);

	const handleMove = (e: PointerEvent) => {
		const { x, y, target } = e;

		setPosition({ x, y });

		if (!target) {
			setClassname(S.circle.basic);
			return;
		}
		const style = getComputedStyle(target as Element);

		if (style.cursor !== 'pointer') {
			setClassname(S.circle.basic);
			return;
		}

		setClassname(S.circle.active);
	};

	useEffect(() => {
		window.addEventListener('pointermove', handleMove);

		return () => window.removeEventListener('pointermove', handleMove);
	}, []);

	return (
		<span className={classname} style={{ top: position.y, left: position.x }} />
	);
};

export default Cursor;
