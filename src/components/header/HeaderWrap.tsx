import { ReactNode } from 'react';
import * as S from '../../styles/header.css';

interface IHeaderWrap {
	children: ReactNode;
}

export default function HeaderWrap({ children }: IHeaderWrap) {
	return <header className={S.headerContainer}>{children}</header>;
}
