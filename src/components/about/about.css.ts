import { style } from '@vanilla-extract/css';

export const wrapper = style({
	width: '100%',
	height: '100%',

	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridAutoRows: 'max-content',
	alignContent: 'end',
	gap: '3rem 2rem',

	padding: '10rem 2rem 10rem 1rem',
});

export const introWrap = style({
	gridColumn: 'span 3',
});

export const para = style({
	lineHeight: '160%',
	marginBottom: '1em',
	':last-child': {
		marginBottom: 0,
	},
});

export const historyWrap = style({
	gridColumn: 'span 2',
});

export const historyTitle = style({
	fontSize: '1.8rem',
	fontWeight: 500,
	textTransform: 'capitalize',
});

export const historyDetail = style({
	marginTop: '1rem',
});

export const historyDetailItem = style({
	display: 'grid',
	gridTemplateColumns: 'max-content 1fr',
	gap: '0.5rem',
	marginBottom: '1rem',
	':last-child': {
		marginBottom: 0,
	},
});

export const historyDetailDur = style({
	opacity: 0.7,
	fontVariantNumeric: 'tabular-nums',
	'::after': {
		content: ' | ',
	},
});

export const historyDetailPara = style([
	para,
	{
		fontSize: '1.2rem',
		gridColumn: '2/3',
	},
]);
