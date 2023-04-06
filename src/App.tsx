import { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './sections/About';
import Home from './sections/Home';
import { darkTheme, lightTheme } from './theme';

const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bgColor};
  	color: ${(props) => props.theme.textColor};
  	transition: background-color 0.3s;
		/* overflow: hidden; */
	}
`;

function App() {
	// theme switching
	const isLight = window.matchMedia('(prefers-color-scheme: light)');
	const [isDark, setIsDark] = useState(!isLight.matches);

	const themeToggle = () => {
		setIsDark(!isDark);
	};

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header />
			<main>
				<Home />
				<About />
			</main>
			<Footer isDark={isDark} themeToggle={themeToggle} />
		</ThemeProvider>
	);
}

export default App;
