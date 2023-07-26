import { useTheme, useThemeDispatch } from '../contexts/ThemeContext';
import useToggleTheme from '../hooks/useToggleTheme';
import {
	footerClickLink,
	footerClickBtn,
	footerWrap,
	footerSvg,
	footerUrlList,
	footerUrlItem,
} from '../styles/footer.css';
import { ReactComponent as IcoDark } from '../assets/icons/ico-theme-dark.svg';
import { ReactComponent as IcoLight } from '../assets/icons/ico-theme-light.svg';
import { ReactComponent as IcoGithub } from '../assets/icons/ico-github.svg';
import { ReactComponent as IcoMail } from '../assets/icons/ico-mail.svg';

export default function Footer() {
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const changeTheme = () => {
		if (!themeDispatch) return;
		useToggleTheme(theme);
		themeDispatch({ type: 'change' });
	};
	return (
		<footer className={footerWrap}>
			<button onClick={changeTheme} className={footerClickBtn}>
				{theme === 'dark' ? (
					<IcoDark className={footerSvg} />
				) : (
					<IcoLight className={footerSvg} />
				)}
			</button>
			<ul className={footerUrlList}>
				<li className={footerUrlItem}>
					<a
						href='https://github.com/hyesuhong'
						target='_blank'
						rel='noreferrer'
						className={footerClickLink}
					>
						<IcoGithub className={footerSvg} />
					</a>
				</li>
				<li className={footerUrlItem}>
					<a href='mailto:honghs95@gmail.com' className={footerClickLink}>
						<IcoMail className={footerSvg} />
					</a>
				</li>
			</ul>
		</footer>
	);
}
