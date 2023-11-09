import {
	createGlobalTheme,
	createGlobalThemeContract,
} from '@vanilla-extract/css';
import { hexToCssRgb } from '../utils/color';

export const colorVars = {
	black: '#1e1e1e',
	lightPurple: '#d4caff',
	accentPurple: '#9747ff',
	white: '#F2F2F2',
	skyBlue: '#21B2E4',
};

export const themeVars = createGlobalThemeContract({
	color: {
		background: {
			solid: 'bgColor_solid',
			blur: 'bgColor_blur',
		},
		text: 'textColor',
		purple: {
			accent: 'accentColor',
			light: 'lightColor',
		},
		blue: {
			sky: 'skyBlueColor',
		},
	},
});

createGlobalTheme(':root.light', themeVars, {
	color: {
		background: {
			solid: colorVars.white,
			blur: hexToCssRgb(colorVars.white, 0.5),
		},
		text: colorVars.black,
		purple: {
			accent: colorVars.accentPurple,
			light: colorVars.lightPurple,
		},
		blue: {
			sky: colorVars.skyBlue,
		},
	},
});

createGlobalTheme(':root.dark', themeVars, {
	color: {
		background: {
			solid: colorVars.black,
			blur: hexToCssRgb(colorVars.black, 0.5),
		},
		text: colorVars.white,
		purple: {
			accent: colorVars.accentPurple,
			light: colorVars.lightPurple,
		},
		blue: {
			sky: colorVars.skyBlue,
		},
	},
});
