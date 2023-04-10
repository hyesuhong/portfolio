interface dataObj<T> {
	[key: string]: T[];
}

export interface aboutVal {
	start: string;
	end?: string;
	name: string;
}

export const aboutData: dataObj<aboutVal | string> = {
	introduce: [''],
	education: [
		{
			start: '2014.03',
			end: '2019.02',
			name: '홍익대학교 예술학과',
		},
	],
	work: [{ start: '2020.03', end: '2022.08', name: '코디소프트 주식회사' }],
};
