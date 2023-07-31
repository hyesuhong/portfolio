import { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import useToggleTheme from './hooks/useToggleTheme';
import Header from './layouts/Header.tsx';
import Loader from './layouts/Loader.tsx';
import Footer from './layouts/Footer.tsx';
import Main from './layouts/Main.tsx';

function App() {
	const theme = useTheme();

	useEffect(() => {
		useToggleTheme(theme, true);
	}, [theme]);

	return (
		<>
			<ThemeProvider>
				<Header />
				<Main />
				<Footer />
			</ThemeProvider>
			<Loader />
		</>
	);
}

export default App;
