import Icon from '../basic/Icon';
import {
	footerIcon,
	footerIconWrap,
	footerUrlItem,
	footerUrlList,
} from './footer.css';
import { ReactComponent as IcoGithub } from '../../assets/icons/ico-github.svg';
import { ReactComponent as IcoMail } from '../../assets/icons/ico-mail.svg';

export default function FooterNav() {
	return (
		<ul className={footerUrlList}>
			<li className={footerUrlItem}>
				<a
					href='https://github.com/hyesuhong'
					target='_blank'
					rel='noreferrer'
					className={footerIconWrap['link']}
				>
					<Icon size='100%'>
						<IcoGithub className={footerIcon} />
					</Icon>
				</a>
			</li>
			<li className={footerUrlItem}>
				<a href='mailto:honghs95@gmail.com' className={footerIconWrap['link']}>
					<Icon size='100%'>
						<IcoMail className={footerIcon} />
					</Icon>
				</a>
			</li>
		</ul>
	);
}
