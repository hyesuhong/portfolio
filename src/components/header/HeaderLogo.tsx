import Logo from '../icon/Logo';
import { logoWrap } from './header.css';

export default function HeaderLogo() {
	return (
		<h1 className={logoWrap}>
			<Logo />
		</h1>
	);
}
