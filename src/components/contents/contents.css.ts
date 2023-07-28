import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const main = style({});

const sectionBase = style({
	display: 'flex',
	minHeight: '100vh',
	borderBottom: `1px solid ${themeVars.color.text}`,
	':last-child': {
		borderBottom: 'none',
	},
});

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
	],
	right: [
		articleBase,
		{
			minHeight: '100vh',
			paddingTop: '10rem',
		},
	],
});

export const title = style({
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
});
