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
		accent: 'accentColor',
	},
});

createGlobalTheme(':root.light', themeVars, {
	color: {
		background: colorVars.lightPurple,
		text: colorVars.black,
		accent: '#9747ff',
	},
});

createGlobalTheme(':root.dark', themeVars, {
	color: {
		background: colorVars.black,
		text: colorVars.lightPurple,
		accent: colorVars.accentPurple,
	},
});
