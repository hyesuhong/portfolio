import { ReactNode } from 'react';
import * as S from '../../styles/footer.css';

interface IWrapper {
	children: ReactNode;
}

export default function Wrapper({ children }: IWrapper) {
	return <footer className={S.footerWrap}>{children}</footer>;
}
