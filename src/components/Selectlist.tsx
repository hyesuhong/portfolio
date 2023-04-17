import styled from 'styled-components';

const List = styled.ul`
	text-align: right;
	padding-right: 10px;

	& > li {
		text-transform: uppercase;
		font-size: 20px;
		margin-bottom: 20px;
	}

	& > li:last-child {
		margin-bottom: 0;
	}
`;

const SelectInput = styled.input`
	display: none;

	& + label {
		display: inline-block;
		position: relative;
		color: transparent;
		cursor: pointer;
		overflow: hidden;
	}

	& + label::before,
	& + label::after {
		content: '${(props) => props.value}';
		position: absolute;
		left: 0;
		color: ${(props) => props.theme.textColor};
		opacity: 0.2;
		transition: all 0.3s;
	}

	&:not(:checked) + label {
		&::before {
			top: 0;
		}

		&::after {
			top: 100%;
		}

		&:hover::before,
		&:hover::after {
			transform: translateY(-100%);
		}
	}

	&:checked + label {
		cursor: default;

		&::before,
		&::after {
			color: ${(props) => props.theme.accentColor};
			opacity: 1;
		}
	}
`;

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
		<List>
			{kindArr.map((kind, index) => {
				const isChecked = kind === currentKind;
				return (
					<li key={index}>
						<SelectInput
							type='radio'
							name={kindName}
							value={kind}
							id={kindName + '-' + kind}
							defaultChecked={isChecked}
							onChange={onChange}
						/>
						<label htmlFor={kindName + '-' + kind}>{kind}</label>
					</li>
				);
			})}
		</List>
	);
}
