import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const footerWrap = style({
	position: 'fixed',
	bottom: 0,
	left: 0,
	width: '100%',
	padding: '0.5rem 2rem',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	transition: 'all 0.3s',
	zIndex: 100,
});

export const footerIcon = style({
	width: '100%',
	height: '100%',
	fill: themeVars.color.text,
});

export const footerUrlList = style({
	display: 'flex',
});

export const footerUrlItem = style({
	marginLeft: '1rem',
	':first-child': {
		marginLeft: 0,
	},
});

const footerIconWrapBase = style({
	width: '3rem',
	height: '3rem',
});

export const footerIconWrap = styleVariants({
	button: [
		footerIconWrapBase,
		{
			background: 'transparent',
			border: 'none',
			outline: 'none',
		},
	],
	link: [footerIconWrapBase, { display: 'block' }],
});
