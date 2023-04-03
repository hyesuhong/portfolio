import IcoThemeLight from '../assets/images/ico-theme-light.svg';
import IcoThemeDark from '../assets/images/ico-theme-dark.svg';
import IcoGithub from '../assets/images/ico-github.svg';
import IcoMail from '../assets/images/ico-mail.svg';

function Footer() {
	return (
		<footer className='footer'>
			<button className='footer__btn'>
				<img src={IcoThemeLight} alt='' />
			</button>
			<ul className='footer__link-list'>
				<li className='footer__link-item'>
					<button className='footer__btn'>
						<img src={IcoGithub} alt='' />
					</button>
				</li>
				<li className='footer__link-item'>
					<button className='footer__btn'>
						<img src={IcoMail} alt='' />
					</button>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
