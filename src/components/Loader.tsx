import { loaderLogo, loaderWrap } from '../styles/loader.css';
import { ReactComponent as IcoLogo } from '../assets/icons/logo-animation.svg';

interface ILoaderProps {
	visible: boolean;
}

export default function Loader({ visible }: ILoaderProps) {
	return (
		<div className={loaderWrap[visible ? 'show' : 'hide']}>
			<IcoLogo className={loaderLogo} />
		</div>
	);
}
