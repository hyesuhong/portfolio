import { createContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

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
		<ThemeContext.Provider value={theme}>
			<Header />
			<main>
				<Home />
				<About />
				<Skills />
				<Projects />
			</main>
			<Footer handleTheme={handleTheme} />
			{/* <Footer isDark={isDark} themeToggle={themeToggle} /> */}
		</ThemeContext.Provider>
	);
}

export default App;
