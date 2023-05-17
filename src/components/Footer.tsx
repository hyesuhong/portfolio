import { useContext } from 'react';
import { ThemeContext } from '../App';

interface IFooterProps {
	handleTheme: any;
}

function Footer({ handleTheme }: IFooterProps) {
	const theme = useContext(ThemeContext);

	return (
		<footer className='footer'>
			<button
				className={`footer__btn footer__btn-theme-${theme}`}
				onClick={handleTheme}
			></button>
			<ul className='footer__url-list'>
				<li className='footer__url-item'>
					<a
						href='https://github.com/hyesuhong'
						target='_blank'
						rel='noreferrer'
						className='footer__btn footer__btn-github'
					></a>
				</li>
				<li className='footer__url-item'>
					<a
						href='mailto:honghs95@gmail.com'
						className='footer__btn footer__btn-mail'
					></a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
