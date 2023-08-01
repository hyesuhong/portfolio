import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const wrapperBase = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100vh',
	zIndex: 100,

	background: 'rgba(30,30,30)',
	backdropFilter: 'blur(5px)',

	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	transition: 'all 0.3s',
});

export const loaderWrap = styleVariants({
	show: [wrapperBase, { visibility: 'visible', opacity: 1 }],
	hide: [wrapperBase, { visibility: 'hidden', opacity: 0 }],
});

export const loaderIcon = style({
	width: '100%',
	height: '100%',
	fill: themeVars.color.purple.light,
});
