export const hexToCssRgb = (hex: string, alpha?: number) => {
	const hexOnlyCode = hex.replace('#', '');
	const { red, green, blue } = hexToRgb(hexOnlyCode);

	return `rgb(${red} ${green} ${blue}${alpha && ' / ' + alpha})`;
};

const hexToRgb = (hex: string) => {
	const hexOnlyCode = hex.replace('#', '');

	if (hexOnlyCode.length < 4) {
		const [r, g, b] = hexOnlyCode;
		const red = getRGBNumber(r);
		const green = getRGBNumber(g);
		const blue = getRGBNumber(b);

		return { red, green, blue };
	} else {
		const [r1, r2, g1, g2, b1, b2] = hexOnlyCode;
		const red = getRGBNumber(r1, r2);
		const green = getRGBNumber(g1, g2);
		const blue = getRGBNumber(b1, b2);

		return { red, green, blue };
	}
};

const getRGBNumber = (firstCode: string, secondCode?: string) => {
	const getNum = (str: string) => {
		const strToNum = Number(str);
		return Number.isNaN(strToNum) ? parseInt(str, 16) : strToNum;
	};

	const first = getNum(firstCode);
	const second = secondCode ? getNum(secondCode) : getNum(firstCode);

	return first * 16 + second * 1;
};
