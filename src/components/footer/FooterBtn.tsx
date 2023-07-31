import { useTheme, useThemeDispatch } from '../../contexts/ThemeContext';
import useToggleTheme from '../../hooks/useToggleTheme';
import Icon from '../icon/Icon';
import { footerIconWrap } from './footer.css';

export default function FooterBtn() {
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const changeTheme = () => {
		if (!themeDispatch) return;
		useToggleTheme(theme);
		themeDispatch({ type: 'change' });
	};

	return (
		<button className={footerIconWrap['button']} onClick={changeTheme}>
			<Icon type={theme} />
		</button>
	);
}
