import { createContext, useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Loader from './components/Loader.tsx';

const isLight = window.matchMedia('(prefers-color-scheme: light)');
export const ThemeContext = createContext(isLight.matches ? 'light' : 'dark');

function App() {
	// theme switching
	const [theme, setTheme] = useState(isLight.matches ? 'light' : 'dark');
	const handleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const [loaderVisible, setLoaderVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoaderVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		document.documentElement.classList.remove(
			theme === 'light' ? 'dark' : 'light'
		);
		document.documentElement.classList.add(
			theme === 'light' ? 'light' : 'dark'
		);
	}, [theme]);

	return (
		<>
			<ThemeContext.Provider value={theme}>
				<Header position={0} />
				<Loader visible={loaderVisible} />
			</ThemeContext.Provider>
		</>
	);
}

export default App;
