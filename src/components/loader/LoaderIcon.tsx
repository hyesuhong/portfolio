import Icon from '../basic/Icon';
import { ReactComponent as IcoLogoAnimate } from '../../assets/icons/logo-animation.svg';
import { loaderIcon } from './loader.css';

export default function LoaderIcon() {
	return (
		<Icon size='10rem'>
			<IcoLogoAnimate className={loaderIcon} />
		</Icon>
	);
}
