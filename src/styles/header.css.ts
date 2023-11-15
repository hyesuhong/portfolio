import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

export const headerContainer = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	padding: '1rem 2rem',

	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	background: themeVars.color.background.blur,
	backdropFilter: 'blur(1rem)',
	borderBottom: `1px solid ${themeVars.color.text}`,

	transition: 'all 0.3s',
	zIndex: 100,

	selectors: {
		'&.slideUp': {
			transform: 'translateY(-100%)',
		},
	},
});

export const headerSlideUp = style([
	headerContainer,
	{
		transform: 'translateY(-100%)',
	},
]);

export const logoWrap = style({
	height: '3rem',
	flex: '0 0 3rem',
	cursor: 'pointer',
});

export const headerLogo = style({
	width: '100%',
	height: '100%',
	fill: themeVars.color.text,
});

export const headerNav = style({
	display: 'flex',
});

export const headerNavItem = style({
	position: 'relative',
	fontSize: '1.6rem',
	fontWeight: 300,
	cursor: 'pointer',
	color: 'transparent',
	overflow: 'hidden',
	marginLeft: '2.4rem',
	textTransform: 'capitalize',

	vars: {
		'--peseudoColor': themeVars.color.text,
	},

	':first-child': {
		marginLeft: 0,
	},

	'::before': {
		content: 'attr(data-text)',
		position: 'absolute',
		left: 0,
		color: 'var(--peseudoColor)',
		transition: 'transform 0.3s',

		top: 0,
	},

	'::after': {
		content: 'attr(data-text)',
		position: 'absolute',
		left: 0,
		color: 'var(--peseudoColor)',
		transition: 'transform 0.3s',

		top: '100%',
	},

	selectors: {
		'&:hover::before': {
			transform: 'translateY(-100%)',
		},
		'&:hover::after': {
			transform: 'translateY(-100%)',
		},
	},
});

export const headerNavItemCurrent = style([
	headerNavItem,
	{
		vars: {
			'--peseudoColor': themeVars.color.purple.accent,
		},
	},
]);
