import { headerNav, headerNavItem } from './header.css';

const navList = ['about', 'projects', 'skills'];

export default function Nav() {
	return (
		<nav>
			<ul className={headerNav}>
				{navList.map((list, index) => {
					// const name =
					return (
						<li
							key={index}
							data-text={list}
							className={headerNavItem}
							// className={
							// 	index === position ? headerNavListCurrent : headerNavList
							// }
						>
							{list}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
