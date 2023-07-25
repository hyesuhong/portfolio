import {
	createGlobalTheme,
	createGlobalThemeContract,
} from '@vanilla-extract/css';

export const themeVars = createGlobalThemeContract({
	color: {
		background: 'bgColor',
		text: 'textColor',
		accent: 'accentColor',
	},
});

createGlobalTheme(':root.light', themeVars, {
	color: {
		background: '#d4caff',
		text: '#1e1e1e',
		accent: '#9747ff',
	},
});

createGlobalTheme(':root.dark', themeVars, {
	color: {
		background: '#1e1e1e',
		text: '#d4caff',
		accent: '#9747ff',
	},
});
