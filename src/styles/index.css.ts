import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css.ts';

type StyleObject = { [key: string]: string };

interface IResponsiveStyle {
	laptop?: StyleObject;
	tablet?: StyleObject;
	mobile?: StyleObject;
}

const responsiveStyle = ({ laptop, tablet, mobile }: IResponsiveStyle) => ({
	'@media': {
		'screen and (max-width: 1200px)': laptop,
		'screen and (max-width: 992px)': tablet,
		'screen and (max-width: 768px)': mobile,
	},
});

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
});

globalStyle(':root', {
	fontFamily:
		'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;',
	fontSize: 10,
});

globalStyle('body', {
	background: themeVars.color.background,
	color: themeVars.color.text,
	transition: 'background 0.3s, color 0.3s',
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit',
});

globalStyle('ul li, ol li', {
	listStyle: 'none',
});

globalStyle('img', {
	verticalAlign: 'middle',
});

globalStyle('button', {
	cursor: 'pointer',
});
