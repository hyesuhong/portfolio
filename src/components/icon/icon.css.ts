import { style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

const svgFill = style({
	fill: themeVars.color.text,
});

export const svg = styleVariants({
	variable: [svgFill, { width: '100%', height: '100%' }],
	fixed: [svgFill, {}],
});
