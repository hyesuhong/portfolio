import { ReactNode } from 'react';
import { wrapper } from './about.css';

interface IWrapper {
	children: ReactNode;
}

export default function Wrapper({ children }: IWrapper) {
	return <div className={wrapper}>{children}</div>;
}
