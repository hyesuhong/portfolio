import NavRadio from './NavRadio';
import { navItem, navList } from './projects.css';

interface IProjectNav {
	keys: string[];
	currentKey: string;
	setCurrentKey: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProjectNav({
	keys,
	currentKey,
	setCurrentKey,
}: IProjectNav) {
	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;
		setCurrentKey(value);
	};

	return (
		<ul className={navList}>
			{keys.map((key, index) => {
				const isChecked = key === currentKey;
				return (
					<li className={navItem} key={index}>
						<NavRadio word={key} checked={isChecked} onChange={onChange} />
					</li>
				);
			})}
		</ul>
	);
}
