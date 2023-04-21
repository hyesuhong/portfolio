interface dataObj<T> {
	[key: string]: T[];
}

export interface dataValArr {
	name: string;
	details: string[];
}

export const skillData: dataObj<dataValArr> = {
	development: [
		{
			name: 'Javascript',
			details: [
				'ES6 이상의 문법 사용',
				'Array, Object 등을 이용해 데이터를 적절하게 처리',
				'필요한 정보나 문법 등의 지식을 올바르게 검색해서 적용 가능',
			],
		},
		{
			name: 'Typescript',
			details: [
				'타입스크립트를 사용한 정적 개발의 필요성 이해',
				'라이브러리 등에 사용된 타입 정의를 보고 이해 및 적용할 수 있음',
				'Function, Object, Interface 등 적절하게 타입을 정의',
			],
		},
		{
			name: 'React.js',
			details: [
				'SPA에 대한 이해',
				'UI 컴포넌트를 적절히 구분해 작업',
				'Styled-components, Recoil 등의 라이브러리를 활용할 수 있음',
			],
		},
		/* {
			name: 'Node.js',
			details: [
				'Http / Https 의 차이 및 Status Code, Method 등을 이해',
				'Restful APIs 에 대해 알고, 필요한 API를 작성 혹은 적용할 수 있음',
				'기본 제공되는 모듈을 적절하게 사용',
				'미들웨어가 무엇인지 이해하고 있으며, 적절하게 사용 가능',
			],
		}, */
		{
			name: 'HTML',
			details: [
				'적절한 시멘틱 태그 사용',
				'각 태그의 특성을 이해하고 있으며, 지정된 속성을 활용할 수 있음',
			],
		},
		{
			name: 'CSS',
			details: [
				'반응형 웹에 따른 디자인을 적용할 수 있음',
				'Flex, Grid 시스템을 이해하고 있음',
			],
		},
		/* {
			name: 'Git & Github',
			details: [],
		}, */
	],
	etc: [
		{
			name: 'Teamwork Tool',
			details: [
				'Slack 을 활용한 협업 경험이 있음.',
				'다른 툴을 사용하는 것에도 관심이 있으며, 빠르게 배우고 적응할 수 있음',
			],
		},
		{
			name: 'Design Tool',
			details: [
				'Figma, Photoshop, Illustrator 사용 가능',
				'간단한 디자인 업무를 할 수 있음',
			],
		},
	],
};
