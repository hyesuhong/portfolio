import useScroll from '../useScroll';
import { useEffect } from 'react';

function Header() {
	const { scrollY, scrollDirection } = useScroll();
	const headerEl = document.querySelector('.header');

	useEffect(() => {
		if (scrollY === 0 || scrollDirection === 'down') {
			headerEl?.classList.remove('slideUp');
			return;
		} else {
			if (headerEl?.classList.contains('slideUp')) return;
			headerEl?.classList.add('slideUp');
		}
	}, [headerEl, scrollY, scrollDirection]);

	const onClick = (ev: React.MouseEvent<HTMLUListElement>) => {
		const { target, currentTarget } = ev;
		const targetEl = target as Element;

		if (target === currentTarget) return;

		const targetID = targetEl.textContent!.toLowerCase();
		const to = document.querySelector(`#${targetID}`);
		if (!to) return;
		to.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<header className='header'>
			<h1 className='header__logo'></h1>
			<nav className='header__nav'>
				<ul className='header__nav-list' onClick={onClick}>
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
