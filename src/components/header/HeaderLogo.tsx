import Icon from '../basic/Icon';
import Text from '../basic/Text';
import { headerLogo, logoWrap } from './header.css';
import { ReactComponent as IcoLogo } from '../../assets/icons/logo.svg';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<Element> {}

export default function HeaderLogo({ onClick }: Props) {
	return (
		<Text typography='h1' className={logoWrap} onClick={onClick}>
			<Icon size='100%'>
				<IcoLogo className={headerLogo} />
			</Icon>
		</Text>
	);
}
