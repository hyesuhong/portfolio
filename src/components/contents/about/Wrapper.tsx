import { ReactNode } from 'react';
import * as S from '../../../styles/about.css';

interface IWrapper {
	children: ReactNode;
}

export default function Wrapper({ children }: IWrapper) {
	return <div className={S.wrapper}>{children}</div>;
}
