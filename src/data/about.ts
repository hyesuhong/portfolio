interface dataObj<T> {
	[key: string]: T[];
}

interface IAbout {
	introduce: string[];
	history: dataObj<IHistory>;
}

export interface IHistory {
	start: string;
	end?: string;
	name: string;
}

export const aboutData: IAbout = {
	introduce: [
		'서비스와 사용자를 잇는 프론트엔드 개발자 홍혜수입니다. 앱과 웹 서비스 개발에 참여했으며, 기획부터 배포하는 과정을 경험했습니다. 이를 통해 팀 내에서의 소통 및 협업을 중요시하게 되었습니다. 타 업무의 팀원들과의 충분한 소통이 서비스에 대한 이해를 높이며, 이는 더 나은 서비스를 만드는 필요조건이라고 생각합니다. 또한 다른 개발자도 제가 짠 코드를 보고 사용하는데 문제가 없도록 깔끔한 코드를 지향합니다. 이를 위해 꾸준히 공부하기 위해 노력합니다.',
	],
	history: {
		education: [
			{
				start: '2014.03',
				end: '2019.02',
				name: '홍익대학교 예술학과',
			},
		],
		work: [{ start: '2020.03', end: '2022.08', name: '코디소프트 주식회사' }],
	},
};
