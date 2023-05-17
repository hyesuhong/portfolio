import { useEffect, useRef } from 'react';

interface IHeaderProps {
	position: number;
}

function Header({ position }: IHeaderProps) {
	const navRef = useRef<HTMLUListElement>(null);
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

	useEffect(() => {
		if (!navRef.current) return;
		const currentClass = 'header__nav-item-current';

		Array.from(navRef.current.children).forEach((el, index) => {
			if (index === position) {
				el.classList.add(currentClass);
			} else {
				el.classList.remove(currentClass);
			}
		});
	}, [position]);

	return (
		<header className='header'>
			<h1 className='header__logo'></h1>
			<nav className='header__nav'>
				<ul className='header__nav-list' onClick={onClick} ref={navRef}>
					<li className='header__nav-item' data-text='About'>
						About
					</li>
					<li className='header__nav-item' data-text='Projects'>
						Projects
					</li>
					<li className='header__nav-item' data-text='Skills'>
						Skills
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
