import Wrapper from '../components/footer/Wrapper';
import FooterBtn from '../components/footer/FooterBtn';
import FooterNav from '../components/footer/FooterNav';
import { useTheme, useThemeDispatch } from '../contexts/ThemeContext';
import useToggleTheme from '../hooks/useToggleTheme';
import { useEffect } from 'react';

export default function Footer() {
	const theme = useTheme();
	const themeDispatch = useThemeDispatch();
	const changeTheme = () => {
		if (!themeDispatch) return;
		useToggleTheme(theme);
		themeDispatch({ type: 'change' });
	};

	useEffect(() => {
		useToggleTheme(theme, true);
	}, [theme]);

	return (
		<Wrapper>
			<FooterBtn theme={theme} onClick={changeTheme} />
			<FooterNav />
		</Wrapper>
	);
}
