import { createContext, useEffect, useState } from 'react';
import Header from './components/Header.tsx';

const isLight = window.matchMedia('(prefers-color-scheme: light)');
export const ThemeContext = createContext(isLight.matches ? 'light' : 'dark');

function App() {
	// theme switching
	const [theme, setTheme] = useState(isLight.matches ? 'light' : 'dark');
	const handleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

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
			</ThemeContext.Provider>
		</>
	);
}

export default App;
