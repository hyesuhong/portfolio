import { useRef, useState } from 'react';
import { checkClosedSyllable } from '../../../utils/checkSyllable';
import * as S from '../../../styles/about.css';

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
	const [post, setPost] = useState<'를' | '을'>('을');
	const inputRef = useRef<HTMLInputElement>(null);

	const onClick = (ev: React.MouseEvent<HTMLLIElement>) => {
		const { target } = ev;
		const t = target as HTMLElement;
		const word = t.textContent;

		if (!word) {
			return;
		}

		setCurrentKey(word);

		const isClosed = checkClosedSyllable(currentKey.slice(-1));
		setPost(isClosed ? '를' : '을');

		if (inputRef.current) {
			inputRef.current.focus();
			inputRef.current.blur();
		}
	};

	return (
		<div className={S.dropdownWrap} data-post={post}>
			<input
				type='text'
				className={S.dropdownInput}
				readOnly
				value={currentKey}
				ref={inputRef}
			/>
			<ul className={S.dropdownList} tabIndex={-1}>
				{keywords.map((keyword, index) => {
					return (
						<li
							key={index}
							data-value={keyword}
							className={S.dropdownItem}
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
