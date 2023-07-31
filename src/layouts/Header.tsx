import HeaderLogo from '../components/header/HeaderLogo';
import HeaderWrap from '../components/header/HeaderWrap';
import Nav from '../components/header/Nav';
import { useNav } from '../contexts/NavContext';

export default function Header() {
	const navState = useNav();

	return (
		<HeaderWrap>
			<HeaderLogo />
			<Nav list={navState.menu} targetIndex={navState.current} />
		</HeaderWrap>
	);
}
