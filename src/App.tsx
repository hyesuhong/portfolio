import { useEffect, useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.tsx';
import useToggleTheme from './hooks/useToggleTheme.tsx';
import Header from './components/Header.tsx';
import Loader from './components/Loader.tsx';
import Footer from './components/Footer.tsx';

function App() {
	const theme = useTheme();
	const [loaderVisible, setLoaderVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaderVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		useToggleTheme(theme, true);
	}, [theme]);

	return (
		<>
			<ThemeProvider>
				<Header position={0} />
				<Footer />
			</ThemeProvider>
			<Loader visible={loaderVisible} />
		</>
	);
}

export default App;
