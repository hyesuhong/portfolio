import { HTMLAttributes } from 'react';
import Icon from '../basic/Icon';
import { ReactComponent as IcoDark } from '../../assets/icons/ico-theme-dark.svg';
import { ReactComponent as IcoLight } from '../../assets/icons/ico-theme-light.svg';
import * as S from '../../styles/footer.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	theme: string;
}

export default function FooterBtn({ theme, onClick }: Props) {
	return (
		<button className={S.footerIconWrap.button} onClick={onClick}>
			<Icon size='100%'>
				{theme === 'dark' ? (
					<IcoDark className={S.footerIcon} />
				) : (
					<IcoLight className={S.footerIcon} />
				)}
			</Icon>
		</button>
	);
}
