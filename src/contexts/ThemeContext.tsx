import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useReducer,
} from 'react';

interface IThemeProvider {
	children: ReactNode;
}

interface actionType {
	type: string;
}

const ThemeContext = createContext('dark');

const ThemeDispatchContext = createContext<null | Dispatch<actionType>>(null);

export function ThemeProvider({ children }: IThemeProvider) {
	const [themeState, dispatch] = useReducer(themeReducer, 'dark');
	return (
		<ThemeContext.Provider value={themeState}>
			<ThemeDispatchContext.Provider value={dispatch}>
				{children}
			</ThemeDispatchContext.Provider>
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeDispatch() {
	return useContext(ThemeDispatchContext);
}

function themeReducer(themeState: string, action: actionType) {
	switch (action.type) {
		case 'change': {
			return themeState === 'light' ? 'dark' : 'light';
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
