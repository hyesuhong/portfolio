import HeaderLogo from '../components/header/HeaderLogo';
import HeaderWrap from '../components/header/HeaderWrap';
import Nav from '../components/header/Nav';

export default function Header() {
	return (
		<HeaderWrap>
			<HeaderLogo />
			<Nav />
		</HeaderWrap>
	);
}
