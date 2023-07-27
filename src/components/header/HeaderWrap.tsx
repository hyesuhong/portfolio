import { ReactNode } from 'react';
import { headerContainer } from './header.css';

interface IHeaderWrap {
	children: ReactNode;
}

export default function HeaderWrap({ children }: IHeaderWrap) {
	return <header className={headerContainer}>{children}</header>;
}
