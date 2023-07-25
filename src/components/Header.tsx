import { useEffect, useRef } from 'react';
import {
	headerContainer,
	headerLogo,
	headerLogoIcon,
	headerNav,
	headerNavList,
	headerNavListCurrent,
} from '../styles/header.css';
import { ReactComponent as IcoLogo } from '../assets/icons/logo.svg';

const navList = ['about', 'projects', 'skills'];

interface IHeaderProps {
	position: number;
}

export default function Header({ position }: IHeaderProps) {
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

	// useEffect(() => {
	// 	if (!navRef.current) return;
	// 	const currentClass = headerNavListCurrent;

	// 	Array.from(navRef.current.children).forEach((el, index) => {
	// 		if (index === position) {
	// 			el.classList.add(currentClass);
	// 		} else {
	// 			el.classList.remove(currentClass);
	// 		}
	// 	});
	// }, [position]);

	return (
		<header className={headerContainer}>
			<h1 className={headerLogo}>
				<IcoLogo className={headerLogoIcon} />
			</h1>
			<nav>
				<ul className={headerNav}>
					{navList.map((list, index) => {
						// const name =
						return (
							<li
								key={index}
								data-text={list}
								className={
									index === position ? headerNavListCurrent : headerNavList
								}
							>
								{list}
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
