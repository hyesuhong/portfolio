import { CSSProperties, style, styleVariants } from '@vanilla-extract/css';
import { themeVars } from '../../../styles/theme.css';
import IcoLink from '../../../assets/icons/ico-link.svg';
import { responsiveStyle } from '../../../utils/responsiveStyle';

export const navList = style([
	{
		width: 'max-content',
		paddingRight: '1rem',
	},
	responsiveStyle({
		mobile: {
			width: '100%',
			display: 'flex',
			justifyContent: 'flex-end',
			padding: '2rem 1rem',
		},
	}),
]);

export const navItem = style([
	{
		textTransform: 'uppercase',
		fontSize: '2rem',
		marginBottom: '2rem',
		textAlign: 'right',

		':last-child': {
			marginBottom: 0,
		},
	},
	responsiveStyle({
		mobile: {
			fontSize: '1.6rem',
			marginBottom: 0,
			marginRight: '2rem',
			':last-child': {
				marginRight: 0,
			},
		},
	}),
]);

export const navInput = style({
	display: 'none',
});

const navLabelPeseudoBase = {
	content: 'attr(data-text)',
	position: 'absolute',
	left: 0,
	color: themeVars.color.text,
	opacity: 0.2,
	transition: 'all 0.3s',
} as CSSProperties;

export const navLabel = style({
	display: 'inline-block',
	position: 'relative',
	color: 'transparent',
	cursor: 'pointer',
	overflow: 'hidden',

	'::before': { ...navLabelPeseudoBase, top: 0 },
	'::after': { ...navLabelPeseudoBase, top: '100%' },

	selectors: {
		[`${navInput}:not(:checked) + &:hover::before, ${navInput}:not(:checked) + &:hover::after`]:
			{
				transform: 'translateY(-100%)',
			},
		[`${navInput}:checked + &`]: { cursor: 'default' },
		[`${navInput}:checked + &::before, ${navInput}:checked + &::after`]: {
			color: themeVars.color.purple.accent,
			opacity: 1,
		},
	},
});

export const projectTable = style([
	responsiveStyle({
		mobile: {
			minHeight: 'calc(100vh - 10.6rem)',
		},
	}),
]);

const projectListBase = style([
	{
		position: 'relative',
		display: 'grid',
		gridTemplate: '4rem max-content / repeat(2, 2fr) 1fr',
		gridTemplateAreas: `'title overview duration' 'images details empty'`,
		alignItems: 'center',

		maxHeight: '4rem',
		overflow: 'hidden',

		transition: 'all 0.5s',
		zIndex: 0,

		'::before': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '4rem',
			background: themeVars.color.text,
			opacity: 0.3,
			transform: 'scaleY(0)',
			transformOrigin: 'bottom center',
			transition: 'transform 0.3s, opacity 0.3s',
			zIndex: -1,
		},

		'::after': {
			content: '',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '4rem',
			cursor: 'pointer',
		},

		selectors: {
			['&:hover::before']: {
				transform: 'scaleY(1)',
			},
		},
	},
	responsiveStyle({
		mobile: {
			gridTemplateColumns: '1fr',
			gridAutoRows: 'max-content',
			gridTemplateAreas: `'title' 'overview' 'duration' 'details' 'images'`,

			'::after': {
				display: 'none',
			},
		},
	}),
]);

export const projectList = styleVariants({
	default: [projectListBase],
	clicked: [
		projectListBase,
		{
			maxHeight: '100vh',
			selectors: {
				['&::before']: {
					opacity: 1,
					transform: 'scaleY(1)',
				},
			},
		},
	],
});

const projectValueBase = style([
	{
		paddingLeft: '1rem',

		selectors: {
			[`${projectList['clicked']} &:nth-child(-n + 3)`]: {
				color: themeVars.color.background,
			},
			[`${projectList['clicked']} &:nth-child(-n + 3)::before`]: {
				background: themeVars.color.background,
				color: themeVars.color.text,
			},
		},
	},
	responsiveStyle({
		mobile: {
			padding: '1rem',
			selectors: {
				[`${projectList['clicked']} &:nth-child(n+2):nth-child(-n + 3)`]: {
					color: themeVars.color.text,
				},
			},
		},
	}),
]);

export const projectValue = styleVariants({
	title: [
		projectValueBase,
		{
			gridArea: 'title',

			display: 'flex',
			alignItems: 'center',
			fontSize: '2rem',
			fontWeight: 500,
			whiteSpace: 'nowrap',
			minWidth: 0,

			'::before': {
				content: 'attr(data-kind)',
				flex: '0 0 2rem',
				height: '2rem',
				borderRadius: '2rem',
				marginRight: '0.5rem',

				background: themeVars.color.text,
				color: themeVars.color.background,

				fontSize: '1.2rem',
				textAlign: 'center',
				lineHeight: '175%',
				textTransform: 'capitalize',
			},
		},
	],
	overview: [
		projectValueBase,
		{
			gridArea: 'overview',
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
	],
	duration: [
		projectValueBase,
		{
			gridArea: 'duration',
		},
		responsiveStyle({
			mobile: {
				textAlign: 'right',
			},
		}),
	],
	images: [
		projectValueBase,
		{
			gridArea: 'images',
			alignSelf: 'start',
			padding: '1rem',
			minWidth: 0,
		},
	],
	details: [
		projectValueBase,
		{
			gridArea: 'details',
			lineHeight: '140%',
			paddingBottom: '1rem',
		},
	],
});

export const projectTitle = style({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
});

const projectDetailListBase = style({
	padding: '1rem 0',
	':last-child': {
		padding: 0,
	},
});

export const projectDetailList = styleVariants({
	stack: [
		projectDetailListBase,
		{
			display: 'flex',
			flexWrap: 'wrap',
			gap: '1rem',
		},
	],
	desc: [
		projectDetailListBase,
		{
			marginBottom: '1rem',
		},
	],
	url: [projectDetailListBase],
});

export const projectStack = style({
	padding: '0.2rem 0.5rem',
	borderRadius: '10rem',
	border: `1px solid ${themeVars.color.text}`,
	fontSize: '1.2rem',
});

export const projectDesc = style({
	listStyle: '"•"',
	marginBottom: '1em',

	':last-child': {
		marginBottom: 0,
	},
});

export const projectUrl = style({
	position: 'relative',
	display: 'inline-flex',
	alignItems: 'center',
	width: 'fit-content',
	borderBottom: `1px solid ${themeVars.color.text}`,

	'::after': {
		content: '',
		width: 16,
		height: 16,
		marginLeft: 5,
		background: themeVars.color.text,
		mask: `url(${IcoLink}) no-repeat center center`,
		WebkitMask: `url(${IcoLink}) no-repeat center center`,
		maskSize: 'cover',
		WebkitMaskSize: 'cover',
	},
});

export const slideContainer = style([
	{
		height: '8.88vw',
		overflowX: 'hidden',
		overflowY: 'hidden',
	},
	responsiveStyle({
		mobile: {
			height: '51.16vw',
		},
	}),
]);

export const slideWrapper = style({
	display: 'flex',
	width: '100%',
	height: '100%',
	transition: 'transform 0.5s linear',
});

export const slideSlide = style({
	flex: 1,
});

export const slideImage = style({
	width: '100%',
	height: '100%',
	objectFit: 'contain',
});
