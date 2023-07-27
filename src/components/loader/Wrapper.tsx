import { ReactNode } from 'react';
import { loaderWrap } from './loader.css';

interface IWrapper {
	visible: boolean;
	children: ReactNode;
}

export default function Wrapper({ visible, children }: IWrapper) {
	return (
		<div className={loaderWrap[visible ? 'show' : 'hide']}>{children}</div>
	);
}
