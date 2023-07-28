import { useRef, useState } from 'react';
import { checkClosedSyllable } from '../../utils/checkSyllable';
import {
	dropdownWrap,
	dropdownInput,
	dropdownList,
	dropdownItem,
} from './about.css';

interface IDropdown {
	keywords: string[];
	currentKey: string;
	setCurrentKey: React.Dispatch<React.SetStateAction<string>>;
}

export default function Dropdown({
	keywords,
	currentKey,
	setCurrentKey,
}: IDropdown) {
	const wrapRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const onClick = (ev: React.MouseEvent<HTMLLIElement>) => {
		const { target } = ev;
		const t = target as HTMLElement;
		const word = t.textContent;

		if (!word) {
			return;
		}

		setCurrentKey(word);

		if (wrapRef.current) {
			const isClosed = checkClosedSyllable(currentKey.slice(-1));
			wrapRef.current.dataset.post = isClosed ? '를' : '을';
		}

		if (inputRef.current) {
			inputRef.current.focus();
			inputRef.current.blur();
		}
	};

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(ev.target.value);
	};

	return (
		<div className={dropdownWrap} data-post='을' ref={wrapRef}>
			<input
				type='text'
				className={dropdownInput}
				readOnly
				value={currentKey}
				onChange={onChange}
				ref={inputRef}
			/>
			<ul className={dropdownList} tabIndex={-1}>
				{keywords.map((keyword, index) => {
					return (
						<li
							key={index}
							data-value={keyword}
							className={dropdownItem}
							onClick={onClick}
						>
							{keyword}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
