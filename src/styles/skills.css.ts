import { style } from '@vanilla-extract/css';
import { themeVars } from './theme.css';
import { responsiveStyle } from '../utils/responsiveStyle';

export const skillWrap = style([
	{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '4rem 1rem',
		borderBottom: `1px solid ${themeVars.color.text}`,
	},
	responsiveStyle({
		mobile: {
			flexDirection: 'column',
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			padding: '1rem 0',
			margin: '0 1rem',

			':last-child': {
				borderBottom: 'none',
				marginBottom: '5rem',
			},
		},
	}),
]);

export const listTitleWrap = style([
	{
		flex: '0 0 15rem',
	},
	responsiveStyle({
		mobile: {
			flex: '1',
			marginBottom: '3rem',
		},
	}),
]);

export const listTitle = style([
	{
		fontSize: '3.2rem',
		fontWeight: 700,
		textTransform: 'capitalize',
	},
	responsiveStyle({
		mobile: {
			fontSize: '2.4rem',
		},
	}),
]);

export const skillListWrap = style([
	{
		flex: 1,
		paddingLeft: '2rem',
		paddingRight: '1rem',
	},
	responsiveStyle({
		mobile: {
			padding: 0,
		},
	}),
]);

export const skillList = style({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2rem',
});

export const skillItem = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	overflow: 'hidden',
});

export const skillIcon = style([
	{
		width: '3rem',
		height: '3rem',
		fill: themeVars.color.text,
		transform: 'translateY(1em)',
		transition: 'fill 0.3s, transform 0.3s',

		selectors: {
			[`${skillItem}:hover &`]: {
				fill: 'var(--hover-color)',
				transform: 'translateY(0)',
			},
		},
	},
	responsiveStyle({
		mobile: {
			transform: 'translateY(0)',
		},
	}),
]);

export const skillTitle = style([
	{
		marginTop: '1rem',
		transform: 'translateY(100%)',
		opacity: 0,
		transition: 'transform 0.3s, opacity 0.5s',

		selectors: {
			[`${skillItem}:hover &`]: {
				transform: 'translateY(0)',
				opacity: 1,
			},
		},
	},
	responsiveStyle({
		mobile: {
			transform: 'translateY(0)',
			opacity: 1,
		},
	}),
]);
