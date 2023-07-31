import Icon from '../icon/Icon';
import { footerIconWrap, footerUrlItem, footerUrlList } from './footer.css';

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
					<Icon type='github' />
				</a>
			</li>
			<li className={footerUrlItem}>
				<a href='mailto:honghs95@gmail.com' className={footerIconWrap['link']}>
					<Icon type='mail' />
				</a>
			</li>
		</ul>
	);
}
