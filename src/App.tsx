import { createContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import { useIntersection } from './hooks/useIntersection';

const isLight = window.matchMedia('(prefers-color-scheme: light)');
export const ThemeContext = createContext(isLight.matches ? 'light' : 'dark');

function App() {
	// theme switching
	const [theme, setTheme] = useState(isLight.matches ? 'light' : 'dark');
	const handleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	// current nav position
	const [position, setPosition] = useState(-1);
	const { ref: aboutRef, visible: aboutVisible } = useIntersection(
		setPosition,
		0
	);
	const { ref: prjRef, visible: prjVisible } = useIntersection(setPosition, 1);
	const { ref: skillRef, visible: skillVisible } = useIntersection(
		setPosition,
		2
	);

	useEffect(() => {
		document.documentElement.classList.remove(
			theme === 'light' ? 'dark' : 'light'
		);
		document.documentElement.classList.add(
			theme === 'light' ? 'light' : 'dark'
		);
	}, [theme]);

	useEffect(() => {
		if (!aboutVisible && !prjVisible && !skillVisible) {
			setPosition(-1);
		}
	}, [aboutVisible, prjVisible, skillVisible]);

	return (
		<ThemeContext.Provider value={theme}>
			<Header position={position} />
			<main>
				<Home />
				<About isRef={aboutRef} />
				<Projects isRef={prjRef} />
				<Skills isRef={skillRef} />
			</main>
			<Footer handleTheme={handleTheme} />
		</ThemeContext.Provider>
	);
}

export default App;
