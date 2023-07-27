import { ReactComponent as IcoDark } from '../../assets/icons/ico-theme-dark.svg';
import { ReactComponent as IcoLight } from '../../assets/icons/ico-theme-light.svg';
import { ReactComponent as IcoGithub } from '../../assets/icons/ico-github.svg';
import { ReactComponent as IcoMail } from '../../assets/icons/ico-mail.svg';
import { svg } from './icon.css';

interface IIcon {
	type: string;
}

export default function Icon({ type }: IIcon) {
	switch (type) {
		case 'dark':
			return <IcoDark className={svg['variable']} />;
		case 'light':
			return <IcoLight className={svg['variable']} />;
		case 'github':
			return <IcoGithub className={svg['variable']} />;
		case 'mail':
			return <IcoMail className={svg['variable']} />;
		default:
			return <></>;
	}
}
