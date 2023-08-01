import { HTMLAttributes } from 'react';
import Icon from '../basic/Icon';
import { ReactComponent as IcoDark } from '../../assets/icons/ico-theme-dark.svg';
import { ReactComponent as IcoLight } from '../../assets/icons/ico-theme-light.svg';

import { footerIcon, footerIconWrap } from './footer.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	theme: string;
}

export default function FooterBtn({ theme, onClick }: Props) {
	return (
		<button className={footerIconWrap['button']} onClick={onClick}>
			<Icon size='100%'>
				{theme === 'dark' ? (
					<IcoDark className={footerIcon} />
				) : (
					<IcoLight className={footerIcon} />
				)}
			</Icon>
		</button>
	);
}
