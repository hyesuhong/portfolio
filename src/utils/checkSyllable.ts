export function checkClosedSyllable(text: string) {
	const charCode = text.charCodeAt(0);
	const consonantCode = (charCode - 44032) % 28;

	// consonantCode === 0 : 받침 없음
	return consonantCode !== 0;
}
