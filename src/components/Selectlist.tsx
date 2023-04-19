type dataObj = {
	[key: string]: string;
};

interface ISelectProps {
	kindName: string;
	kinds: dataObj;
	currentKind: string;
	setKind: React.Dispatch<React.SetStateAction<string>>;
}

export default function Selectlist({
	kindName,
	kinds,
	currentKind,
	setKind,
}: ISelectProps) {
	const kindArr = Object.keys(kinds);
	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setKind(ev.target.value);
	};

	return (
		<ul className='selectlist'>
			{kindArr.map((kind, index) => {
				const isChecked = kind === currentKind;
				return (
					<li className='selectlist__item' key={index}>
						<input
							type='radio'
							className='selectlist__input'
							name={kindName}
							value={kind}
							id={kindName + '-' + kind}
							defaultChecked={isChecked}
							onChange={onChange}
						/>
						<label htmlFor={kindName + '-' + kind} data-text={kind}>
							{kind}
						</label>
					</li>
				);
			})}
		</ul>
	);
}
