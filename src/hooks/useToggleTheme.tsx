export default function useToggleTheme(currentTheme: string, isInit?: boolean) {
	// console.log(currentTheme, isInit);
	const nextTheme = isInit
		? currentTheme
		: currentTheme === 'light'
		? 'dark'
		: 'light';

	if (isInit) {
		document.documentElement.classList.remove(
			currentTheme === 'light' ? 'dark' : 'light'
		);
		document.documentElement.classList.add(
			currentTheme === 'light' ? 'light' : 'dark'
		);
	} else {
		document.documentElement.classList.remove(currentTheme);
		document.documentElement.classList.add(nextTheme);
	}
}
