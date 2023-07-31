import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';
import { responsiveStyle } from '../../utils/responsiveStyle';

export const wrapper = style([
	{
		width: '100%',
		height: '100%',

		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gridAutoRows: 'max-content',
		alignContent: 'end',
		gap: '3rem 2rem',

		padding: '0 2rem 10rem 1rem',
	},
	responsiveStyle({
		mobile: {
			gridTemplateColumns: 'repeat(5, 1fr)',
			gap: '2rem 1rem',
			padding: '10rem 1rem 3rem',
		},
	}),
]);

const title = style({
	fontSize: '1.8rem',
	fontWeight: 500,
});

export const introWrap = style([
	{
		gridColumn: 'span 3',
	},
	responsiveStyle({
		mobile: {
			gridColumn: 'span 5',
			marginBottom: '4rem',
		},
	}),
]);

export const introTitleWrap = style([
	{
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
		marginBottom: '1rem',
	},
	responsiveStyle({
		mobile: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	}),
]);

export const introTitle = style([title]);

export const para = style({
	lineHeight: '160%',
	marginBottom: '1em',
	':last-child': {
		marginBottom: 0,
	},
});

export const historyWrap = style([
	{
		gridColumn: 'span 2',
	},
	responsiveStyle({
		mobile: {
			gridColumn: 'span 5',
		},
	}),
]);

export const historyTitle = style([
	title,
	{
		textTransform: 'capitalize',
	},
]);

export const historyDetail = style({
	marginTop: '1rem',
});

export const historyDetailItem = style({
	display: 'grid',
	gridTemplateColumns: 'max-content 1fr',
	gap: '0.5rem',
	marginBottom: '1rem',
	':last-child': {
		marginBottom: 0,
	},
});

export const historyDetailDur = style({
	opacity: 0.7,
	fontVariantNumeric: 'tabular-nums',
	'::after': {
		content: ' | ',
	},
});

export const historyDetailPara = style([
	para,
	{
		fontSize: '1.2rem',
		gridColumn: '2/3',
	},
]);

export const dropdownWrap = style({
	position: 'relative',
	width: 'max-content',
	height: '3rem',

	display: 'flex',
	alignItems: 'center',
	gap: '0.5rem',

	fontSize: '1.8rem',
	fontWeight: 500,

	'::before': {
		content: '',
		position: 'absolute',
		top: '50%',
		right: '2.5rem',
		width: '0.5rem',
		height: '0.5rem',
		borderBottom: `1px solid ${themeVars.color.text}`,
		borderLeft: `1px solid ${themeVars.color.text}`,
		transform: 'rotate(-45deg)',

		transition: 'transform 0.3s',
	},

	'::after': {
		content: 'attr(data-post)',
		verticalAlign: 'middle',
	},

	selectors: {
		[`&:focus-within::before`]: {
			transform: 'rotate(135deg)',
		},
	},
});

export const dropdownInput = style({
	// width: '100%',

	height: '100%',
	padding: '0.5rem 2rem 0.5rem 0.5rem',

	border: 'none',
	borderBottom: `2px solid ${themeVars.color.purple.light}`,
	outline: 'none',
	background: 'transparent',
	color: themeVars.color.text,

	fontSize: 'inherit',

	selectors: {
		[`${dropdownWrap}:focus-within &`]: {
			borderBottomColor: themeVars.color.purple.accent,
		},
	},
});

export const dropdownList = style({
	position: 'absolute',
	top: '100%',
	left: 0,
	width: 'max-content',

	transform: 'translateY(0.5rem) scaleY(0)',
	transformOrigin: 'top center',

	background: themeVars.color.background,
	border: `1px solid ${themeVars.color.text}`,

	zIndex: 1,

	transition: 'transform 0.3s',

	selectors: {
		[`${dropdownWrap}:focus-within &`]: {
			transform: 'translateY(0.5rem) scaleY(100%)',
		},
	},
});

export const dropdownItem = style({
	fontSize: '1.8rem',
	padding: '0.5rem',
	cursor: 'pointer',
	transition: 'background 0.3s',

	':hover': {
		background: themeVars.color.purple.light,
	},
});
