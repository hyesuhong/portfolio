import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from './theme.css';
import { responsiveStyle } from '../utils/responsiveStyle';

export const wrapper = style([
	{
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: -1,
		pointerEvents: 'none',
		overflow: 'hidden',
	},
	responsiveStyle({
		mobile: {
			top: 'auto',
			bottom: 0,
		},
	}),
]);

const circleBase = style([
	{
		position: 'absolute',
		borderRadius: '50%',
		opacity: 0.7,
		filter: 'blur(12rem)',
		willChange: 'transform',
	},
	responsiveStyle({ mobile: { filter: 'blur(6rem)' } }),
]);

export const circle = styleVariants({
	purple: [
		circleBase,
		{
			top: 'calc(50% - 15vw)',
			left: '10%',
			width: '30vw',
			height: '30vw',
			background: themeVars.color.purple.light,
		},
		responsiveStyle({
			mobile: {
				top: 'auto',
				bottom: '40vw',
				width: '60vw',
				height: '60vw',
			},
		}),
	],
	blue: [
		circleBase,
		{
			top: 'calc(50%)',
			left: 0,
			width: '20vw',
			height: '20vw',
			background: themeVars.color.blue.sky,
		},
		responsiveStyle({
			mobile: {
				top: 'auto',
				bottom: '20vw',
				left: '5%',
				width: '30vw',
				height: '30vw',
			},
		}),
	],
});
