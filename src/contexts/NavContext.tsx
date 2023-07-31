import {
	Dispatch,
	ReactNode,
	createContext,
	useContext,
	useReducer,
} from 'react';

export type NavObj = {
	id: string;
	name: string;
};

interface INavContext {
	current: number;
	menu: NavObj[];
}

interface actionType {
	type: string;
	index?: number;
	menu?: NavObj;
}

interface INavProvider {
	children: ReactNode;
}

const initialState = {
	current: -1,
	menu: [],
};
const NavContext = createContext<INavContext>(initialState);

const NavDispatchContext = createContext<null | Dispatch<actionType>>(null);

export function NavProvider({ children }: INavProvider) {
	const [navState, dispatch] = useReducer(navReducer, initialState);
	return (
		<NavContext.Provider value={navState}>
			<NavDispatchContext.Provider value={dispatch}>
				{children}
			</NavDispatchContext.Provider>
		</NavContext.Provider>
	);
}

export function useNav() {
	return useContext(NavContext);
}

export function useNavDispatch() {
	return useContext(NavDispatchContext);
}

function navReducer(navState: INavContext, action: actionType) {
	switch (action.type) {
		case 'addMenu': {
			if (!action.menu) {
				return navState;
			}

			if (navState.menu.findIndex((m) => m.name === action.menu!.name) > -1) {
				return navState;
			}

			return {
				current: navState.current,
				menu: [...navState.menu, action.menu],
			};
		}
		case 'change': {
			if (typeof action.index === 'undefined') {
				return navState;
			}

			return {
				current: action.index,
				menu: [...navState.menu],
			};
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}
