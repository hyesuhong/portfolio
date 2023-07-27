import { ReactNode } from 'react';
import { footerWrap } from './footer.css';

interface IWrapper {
	children: ReactNode;
}

export default function Wrapper({ children }: IWrapper) {
	return <footer className={footerWrap}>{children}</footer>;
}
