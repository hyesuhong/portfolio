import { dataObj } from '../../../typeSet';
import { project } from './DataList';
import NavRadio from './NavRadio';
import { navItem, navList } from './projects.css';

interface IProjectNav {
	keys: string[];
	currentKey: string;
	totalData: dataObj<project[]>;
	setCurrentKey: React.Dispatch<React.SetStateAction<string>>;
	setPassData: React.Dispatch<React.SetStateAction<project[]>>;
}

export default function ProjectNav({
	keys,
	currentKey,
	totalData,
	setCurrentKey,
	setPassData,
}: IProjectNav) {
	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { value },
		} = ev;
		setCurrentKey(value);
		setPassData([...totalData[value]]);
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
