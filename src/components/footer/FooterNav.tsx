import Icon from '../basic/Icon';
import { ReactComponent as IcoGithub } from '../../assets/icons/ico-github.svg';
import { ReactComponent as IcoMail } from '../../assets/icons/ico-mail.svg';
import * as S from '../../styles/footer.css';

export default function FooterNav() {
	return (
		<ul className={S.footerUrlList}>
			<li className={S.footerUrlItem}>
				<a
					href='https://github.com/hyesuhong'
					target='_blank'
					rel='noreferrer'
					className={S.footerIconWrap['link']}
				>
					<Icon size='100%'>
						<IcoGithub className={S.footerIcon} />
					</Icon>
				</a>
			</li>
			<li className={S.footerUrlItem}>
				<a href='mailto:honghs95@gmail.com' className={S.footerIconWrap.link}>
					<Icon size='100%'>
						<IcoMail className={S.footerIcon} />
					</Icon>
				</a>
			</li>
		</ul>
	);
}
