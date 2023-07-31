import {
	createGlobalTheme,
	createGlobalThemeContract,
} from '@vanilla-extract/css';

export const colorVars = {
	black: '#1e1e1e',
	lightPurple: '#d4caff',
	accentPurple: '#9747ff',
	white: '#F2F2F2',
	skyBlue: '#21B2E4',
};

export const themeVars = createGlobalThemeContract({
	color: {
		background: 'bgColor',
		text: 'textColor',
		purple: {
			accent: 'accentColor',
			light: 'lightColor',
		},
	},
});

createGlobalTheme(':root.light', themeVars, {
	color: {
		background: colorVars.white,
		text: colorVars.black,
		purple: {
			accent: colorVars.accentPurple,
			light: colorVars.lightPurple,
		},
	},
});

createGlobalTheme(':root.dark', themeVars, {
	color: {
		background: colorVars.black,
		text: colorVars.white,
		purple: {
			accent: colorVars.accentPurple,
			light: colorVars.lightPurple,
		},
	},
});
