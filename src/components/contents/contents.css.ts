import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';
import { responsiveStyle } from '../../utils/responsiveStyle';

export const main = style({});

const sectionBase = style([
	{
		display: 'flex',
		minHeight: '100vh',
		borderTop: `1px solid ${themeVars.color.text}`,
		':first-child': {
			borderTop: 'none',
		},
	},
	responsiveStyle({
		mobile: {
			flexDirection: 'column',
			minHeight: 'auto',
		},
	}),
]);

export const section = styleVariants({
	default: [sectionBase],
	onlyTitle: [
		sectionBase,
		{
			height: '100vh',
			alignItems: 'center',
			justifyContent: 'center',
		},
	],
});

const articleBase = style({
	flex: 1,
	minWidth: 0,
	fontSize: '1.4rem',
	fontWeight: 300,
});

export const article = styleVariants({
	left: [
		articleBase,
		{
			position: 'sticky',
			top: 0,
			height: '100vh',

			display: 'flex',
			alignItems: 'flex-end',
			justifyContent: 'space-between',
			padding: '10rem 0',

			borderRight: `1px solid ${themeVars.color.text}`,

			zIndex: 1,
		},
		responsiveStyle({
			mobile: {
				flexWrap: 'wrap',
				height: 'auto',
				borderRight: 'none',
				padding: '5rem 0 0',
			},
		}),
	],
	right: [
		articleBase,
		{
			minHeight: '100vh',
			paddingTop: '10rem',
		},
		responsiveStyle({
			mobile: {
				minHeight: 'auto',
				paddingTop: '4rem',
			},
		}),
	],
});

export const title = style([
	{
		fontSize: '6.4rem',
		fontWeight: 100,
		textAlign: 'center',

		selectors: {
			[`${article['left']} > &`]: {
				alignSelf: 'flex-start',
				paddingLeft: '2rem',
				textAlign: 'left',
			},
		},
	},
	responsiveStyle({
		mobile: {
			fontSize: '3.2rem',
			selectors: {
				[`${article['left']} > &`]: {
					width: '100%',
					fontSize: '1.8rem',
					padding: '1rem',
					borderBottom: `1px solid ${themeVars.color.text}`,
					background: themeVars.color.background.blur,
					backdropFilter: 'blur(1rem)',
				},
			},
		},
	}),
]);
