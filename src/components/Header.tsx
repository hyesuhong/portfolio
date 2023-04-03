import Logo from '../assets/images/logo.svg';

function Header() {
	return (
		<header className='header'>
			<img src={Logo} alt='' className='header__logo' />
			<nav className='header__nav'>
				<ul className='header__nav-list'>
					<li className='header__nav-item' data-text='About'>
						About
					</li>
					<li className='header__nav-item' data-text='Skills'>
						Skills
					</li>
					<li className='header__nav-item' data-text='Projects'>
						Projects
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
