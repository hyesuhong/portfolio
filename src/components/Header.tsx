import styled from 'styled-components';
import Logo from '../assets/images/logo.svg';
import MaskItem from './MaskItem';
import useScroll from '../useScroll';

interface IHeaderWrapProps {
	scrollY: number;
	scrollDirection: string;
}

const HeaderWrap = styled.header<IHeaderWrapProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 10px 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background: ${(props) => props.theme.bgColor};
	border-bottom: 1px solid ${(props) => props.theme.textColor};
	color: ${(props) => props.theme.textColor};

	transform: translateY(
		${(props) =>
			props.scrollY === 0 || props.scrollDirection === 'down' ? 0 : '-100%'}
	);
	transition: transform 0.3s;
	z-index: 100;
`;

const HeaderLinkList = styled.ul`
	display: flex;
`;

const HeaderLinkItem = styled.li<{ text: string }>`
	position: relative;
	font-size: 16px;
	font-weight: 300;
	cursor: pointer;
	color: transparent;
	overflow: hidden;

	&:not(:first-child) {
		margin-left: 24px;
	}

	&::before,
	&::after {
		content: '${(props) => props.text}';
		position: absolute;
		left: 0;
		color: ${(props) => props.theme.textColor};
		transition: transform 0.3s;
	}

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
`;

function Header() {
	const { scrollY, scrollDirection } = useScroll();

	const onClick = (ev: React.MouseEvent<HTMLUListElement>) => {
		const { target, currentTarget } = ev;
		const targetEl = target as Element;

		if (target === currentTarget) return;

		const targetID = targetEl.textContent!.toLowerCase();
		const to = document.querySelector(`#${targetID}`);
		if (!to) return;
		to.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<HeaderWrap scrollY={scrollY} scrollDirection={scrollDirection}>
			<MaskItem type='link' maskUrl={Logo} />
			<nav>
				<HeaderLinkList onClick={onClick}>
					<HeaderLinkItem text='About'>About</HeaderLinkItem>
					<HeaderLinkItem text='Skills'>Skills</HeaderLinkItem>
					<HeaderLinkItem text='Projects'>Projects</HeaderLinkItem>
				</HeaderLinkList>
			</nav>
		</HeaderWrap>
	);
}

export default Header;
