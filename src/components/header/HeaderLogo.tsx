import { HTMLAttributes } from 'react';
import Icon from '../basic/Icon';
import Text from '../basic/Text';
import { ReactComponent as IcoLogo } from '../../assets/icons/logo.svg';
import * as S from '../../styles/header.css';

interface Props extends HTMLAttributes<Element> {}

export default function HeaderLogo({ onClick }: Props) {
	return (
		<Text typography='h1' className={S.logoWrap} onClick={onClick}>
			<Icon size='100%'>
				<IcoLogo className={S.headerLogo} />
			</Icon>
		</Text>
	);
}
