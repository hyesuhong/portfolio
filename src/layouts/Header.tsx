import HeaderLogo from '../components/header/HeaderLogo';
import HeaderWrap from '../components/header/HeaderWrap';
import Nav from '../components/header/Nav';
import { useNav } from '../contexts/NavContext';

export default function Header() {
	const navState = useNav();

	const scrollToTop = () => {
		scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<HeaderWrap>
			<HeaderLogo onClick={scrollToTop} />
			<Nav list={navState.menu} targetIndex={navState.current} />
		</HeaderWrap>
	);
}
