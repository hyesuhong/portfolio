import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';
import { svg } from '../icon/icon.css';

export const skillWrap = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '4rem 1rem',
	borderBottom: `1px solid ${themeVars.color.text}`,
	':first-child': {
		paddingTop: '10rem',
	},
});

export const listTitleWrap = style({
	flex: '0 0 15rem',
});

export const listTitle = style({
	fontSize: '3.2rem',
	fontWeight: 700,
	textTransform: 'capitalize',
});

export const skillListWrap = style({
	flex: 1,
	paddingLeft: '2rem',
	paddingRight: '1rem',
});

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
	svg['fixed'],
	{
		width: '3rem',
		height: '3rem',
		transform: 'translateY(1em)',
		transition: 'fill 0.3s, transform 0.3s',

		selectors: {
			[`${skillItem}:hover &`]: {
				fill: 'var(--hover-color)',
				transform: 'translateY(0)',
			},
		},
	},
]);

export const skillTitle = style({
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
});
