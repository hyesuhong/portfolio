import { ReactComponent as IcoLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as IcoLogoAnimate } from '../../assets/icons/logo-animation.svg';
import { svg } from './icon.css';

interface ILogo {
	animated?: boolean;
	width?: string | number;
	height?: string | number;
	color?: string;
}

export default function Logo({ animated, width, height, color }: ILogo) {
	const sizeClass = width || height ? svg['fixed'] : svg['variable'];

	const props = { className: sizeClass, style: { width, height, fill: color } };

	return (
		<>{animated ? <IcoLogoAnimate {...props} /> : <IcoLogo {...props} />}</>
	);
}
