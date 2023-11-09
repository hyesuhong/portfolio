import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css.ts';

globalStyle('*', {
	margin: 0,
	padding: 0,
	boxSizing: 'border-box',
});

globalStyle(':root', {
	fontFamily:
		'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;',
	fontSize: 10,
});

globalStyle('body', {
	background: themeVars.color.background.solid,
	color: themeVars.color.text,
	transition: 'background 0.3s, color 0.3s',
});

globalStyle('a', {
	textDecoration: 'none',
	color: 'inherit',
});

globalStyle('ul li, ol li', {
	listStyle: 'none',
});

globalStyle('img', {
	verticalAlign: 'middle',
});

globalStyle('button', {
	cursor: 'pointer',
});

/* @media (max-width: 1200px) {
	:root {
		font-size: 9px;
	}
}

@media (max-width: 992px) {
	:root {
		font-size: 8px;
	}
}

@media (max-width: 768px) {
	:root {
		font-size: 7px;
	}
} */
