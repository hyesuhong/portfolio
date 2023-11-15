import { NavObj } from '../../contexts/NavContext';
import * as S from '../../styles/header.css';

interface INav {
	list: NavObj[];
	targetIndex: number;
}

export default function Nav({ list, targetIndex }: INav) {
	const onClick = (ev: React.MouseEvent<HTMLLIElement>) => {
		const { target } = ev;
		const t = target as HTMLElement;

		const targetID = t.dataset.id;
		const targetEl = document.getElementById(`${targetID}`);

		if (!targetEl) return;

		targetEl.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<nav>
			<ul className={S.headerNav}>
				{list.map(({ name, id }, index) => {
					const text = name.slice(0, 1).toUpperCase() + name.slice(1);
					return (
						<li
							key={index}
							data-text={text}
							data-id={id}
							className={
								index === targetIndex ? S.headerNavItemCurrent : S.headerNavItem
							}
							onClick={onClick}
						>
							{text}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
