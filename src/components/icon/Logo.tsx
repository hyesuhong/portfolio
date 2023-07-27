import { ReactComponent as IcoLogo } from '../../assets/icons/logo.svg';
import { ReactComponent as IcoLogoAnimate } from '../../assets/icons/logo-animation.svg';
import { svg } from './icon.css';

interface ILogo {
	animated?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function Logo({ animated, width, height }: ILogo) {
	const sizeClass = width || height ? svg['fixed'] : svg['variable'];
	const sizeStyle = width || height ? { width, height } : undefined;

	const props = { className: sizeClass, style: sizeStyle };

	return (
		<>{animated ? <IcoLogoAnimate {...props} /> : <IcoLogo {...props} />}</>
	);
}
