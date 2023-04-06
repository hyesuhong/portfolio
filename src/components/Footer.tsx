import IcoThemeLight from '../assets/images/ico-theme-light.svg';
import IcoThemeDark from '../assets/images/ico-theme-dark.svg';
import IcoGithub from '../assets/images/ico-github.svg';
import IcoMail from '../assets/images/ico-mail.svg';
import styled from 'styled-components';
import MaskItem from './MaskItem';
import useScroll from '../useScroll';

interface IFooterWrapProps {
	scrollY: number;
	scrollDirection: string;
}

const FooterWrap = styled.footer<IFooterWrapProps>`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 5px 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	transform: translateY(
		${(props) =>
			props.scrollY === 0 || props.scrollDirection === 'down' ? 0 : '100%'}
	);
	transition: transform 0.3s;
`;

const FooterLinkList = styled.ul`
	display: flex;
`;

const FooterLinkItem = styled.li`
	&:not(:first-child) {
		margin-left: 10px;
	}
`;

interface IFooterProps {
	isDark: boolean;
	themeToggle: (event: React.MouseEvent) => void;
}

function Footer({ isDark, themeToggle }: IFooterProps) {
	const { scrollY, scrollDirection } = useScroll();

	return (
		<FooterWrap scrollY={scrollY} scrollDirection={scrollDirection}>
			<MaskItem
				type='button'
				maskUrl={isDark ? IcoThemeLight : IcoThemeDark}
				onClick={themeToggle}
			/>
			<FooterLinkList>
				<FooterLinkItem>
					<MaskItem
						type='link'
						maskUrl={IcoGithub}
						link={{ href: 'https://github.com/hyesuhong', target: '_blank' }}
					/>
				</FooterLinkItem>
				<FooterLinkItem>
					<MaskItem
						type='link'
						maskUrl={IcoMail}
						link={{ href: 'mailto:honghs95@gmail.com' }}
					/>
				</FooterLinkItem>
			</FooterLinkList>
		</FooterWrap>
	);
}

export default Footer;
