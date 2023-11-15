import { useId } from 'react';
import * as S from '../../../styles/projects.css';

interface INavRadio {
	word: string;
	checked?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function NavRadio({ word, checked, onChange }: INavRadio) {
	const elID = useId();
	return (
		<>
			<input
				type='radio'
				name='projectKind'
				value={word}
				id={elID}
				className={S.navInput}
				defaultChecked={checked}
				onChange={onChange}
			/>
			<label htmlFor={elID} data-text={word} className={S.navLabel}>
				{word}
			</label>
		</>
	);
}
