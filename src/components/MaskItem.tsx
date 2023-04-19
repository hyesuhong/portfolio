import styled from 'styled-components';

const Wrapper = styled.div<{ url: string }>`
	width: 30px;
	height: 30px;
	flex: 0 0 30px;

	& > * {
		width: 100%;
		height: 100%;
		/* background: ${(props) => props.theme.textColor}; */

		mask: url('${(props) => props.url}') no-repeat center center;
		-webkit-mask: url('${(props) => props.url}') no-repeat center center;
		mask-size: cover;
		-webkit-mask-size: cover;
	}

	button {
		border: none;
	}

	a {
		display: block;
	}
`;

interface IMaskItemProps {
	type: 'button' | 'link';
	maskUrl: string;
	link?: {
		href: string;
		target?: string;
	};
	onClick?: any;
}

function MaskItem({ type, maskUrl, link, onClick }: IMaskItemProps) {
	// id 필요할 경우 사용
	// const randomNum = getRandomNumbers(256);
	// const randomID = 'input' + randomNum;

	return (
		<Wrapper url={maskUrl}>
			{type === 'link' ? (
				<a href={link?.href} target={link?.target}></a>
			) : (
				<button onClick={onClick}></button>
			)}
		</Wrapper>
	);
}

function getRandomNumbers(max: number) {
	return Math.floor(Math.random() * max);
}

export default MaskItem;
