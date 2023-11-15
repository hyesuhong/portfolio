import { ReactNode } from 'react';
import * as S from '../../styles/loader.css';

interface IWrapper {
	visible: boolean;
	children: ReactNode;
}

export default function Wrapper({ visible, children }: IWrapper) {
	return (
		<div className={S.loaderWrap[visible ? 'show' : 'hide']}>{children}</div>
	);
}
