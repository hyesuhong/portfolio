import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';
import { responsiveStyle } from '../../utils/responsiveStyle';

export const wrapper = style([
	{
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: -1,
		pointerEvents: 'none',
	},
	responsiveStyle({
		mobile: {
			position: 'absolute',
		},
	}),
]);

const circleBase = style([
	{
		position: 'absolute',
		borderRadius: '50%',
		opacity: 0.8,
		filter: 'blur(10rem)',
	},
	responsiveStyle({ mobile: { filter: 'blur(6rem)' } }),
]);

export const circle = styleVariants({
	purple: [
		circleBase,
		{
			top: 'calc(50% - 20vw)',
			left: '10%',
			width: '40vw',
			height: '40vw',
			background: `radial-gradient(${themeVars.color.purple.light} 50%, rgba(0,0,0,0) 60%)`,
		},
		responsiveStyle({
			mobile: {
				top: 'auto',
				width: '60vw',
				height: '60vw',
				bottom: '40vw',
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
			background: `radial-gradient(${themeVars.color.blue.sky} 50%, rgba(0,0,0,0) 60%)`,
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
