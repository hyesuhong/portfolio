import { style, styleVariants } from '@vanilla-extract/css';
import { colorVars } from './theme.css';

const loaderWrapBase = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100vh',
	zIndex: 100,

	background: 'rgba(30,30,30)',
	backdropFilter: 'blur(5px)',

	display: 'flex',

	transition: 'all 0.3s',
});

export const loaderWrap = styleVariants({
	show: [loaderWrapBase, { visibility: 'visible', opacity: 1 }],
	hide: [loaderWrapBase, { visibility: 'hidden', opacity: 0 }],
});

export const loaderLogo = style({
	margin: 'auto',
	fill: colorVars.lightPurple,
});
