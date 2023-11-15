import { ThemeProvider } from './contexts/ThemeContext';
import { NavProvider } from './contexts/NavContext.tsx';
import Header from './layouts/Header.tsx';
import Loader from './layouts/Loader.tsx';
import Footer from './layouts/Footer.tsx';
import Main from './layouts/Main.tsx';
import { useEffect, useState } from 'react';
import Background from './components/background/Background.tsx';
import Cursor from './components/cursor/Cursor.tsx';

function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const UA = window.navigator.userAgent;
		const matchMobile = UA.match(/(Android)|(Mobile)|(Mobi)/gi);
		if (matchMobile) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<>
			<ThemeProvider>
				{isMobile ? <Background /> : <Cursor />}
				<NavProvider>
					<Header />
					<Main />
				</NavProvider>
				<Footer />
			</ThemeProvider>
			<Loader />
		</>
	);
}

export default App;
