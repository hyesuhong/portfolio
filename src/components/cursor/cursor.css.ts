import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const circleBase = style([
	{
		position: 'fixed',
		translate: '-50% -50%',
		width: '4rem',
		height: '4rem',
		borderRadius: '50%',
		opacity: 0.7,
		filter: 'blur(1rem)',
		willChange: 'left, top',
		zIndex: -1,
		pointerEvents: 'none',
	},
]);

export const circle = styleVariants({
	basic: [
		circleBase,
		{
			backgroundColor: themeVars.color.purple.light,
		},
	],
	active: [
		circleBase,
		{
			backgroundColor: themeVars.color.blue.sky,
		},
	],
});
