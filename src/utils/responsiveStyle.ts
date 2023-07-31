import { StyleRule } from '@vanilla-extract/css';

export interface IResponsiveStyle {
	laptop?: StyleRule;
	tablet?: StyleRule;
	mobile?: StyleRule;
}

export const responsiveStyle = ({
	laptop,
	tablet,
	mobile,
}: IResponsiveStyle) => {
	const media = {
		'@media': {
			'screen and (max-width: 1200px)': {},
			'screen and (max-width: 992px)': {},
			'screen and (max-width: 768px)': {},
		},
	};

	if (laptop) {
		media['@media']['screen and (max-width: 1200px)'] = laptop;
	}

	if (tablet) {
		media['@media']['screen and (max-width: 992px)'] = tablet;
	}

	if (mobile) {
		media['@media']['screen and (max-width: 768px)'] = mobile;
	}

	return media;
};
