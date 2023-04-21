export interface projectVal {
	start: string;
	end?: string;
	name: string;
	kind: 'work' | 'personal';
	overview: string;
	description: string[];
	focus: string[];
	relatedURL?: projectURL[];
	images?: projectURL[];
}

export interface projectURL {
	title: string;
	url: string;
}

export const projectKind = {
	all: 'all',
	work: 'work',
	personal: 'personal',
};

export const projectData: projectVal[] = [
	{
		start: '2021.12',
		end: '2022.04',
		name: '홈페이지 관리 프로그램 개발',
		kind: 'work',
		overview: '피부과 홈페이지 관리 백오피스 프로그램',
		description: [
			'리앤영피부과 홈페이지를 관리하는 프로그램을 개발하는 프로젝트입니다. 프로그램 상에서 게시물, 시술정보, 예약정보 등 전반적인 데이터 관리가 가능해야 했습니다.',
			'메인 프론트엔드 개발자로 참여해, 기본 프로젝트 구조 설계 및 UI 컴포넌트를 개발했으며, 데이터 관리를 위한 CRUD 적용 및 이미지/동영상 업로드 기능을 적용했습니다.',
			'프로젝트가 완료된 후 지점이 증가했으며, 관리 자동화로 사내 개발자 업무량이 감소했습니다.',
		],
		focus: [
			'Javascript 와 PHP 를 주로 사용했습니다.',
			'async-await 를 적용해 이미지/동영상 업로드 기능을 만들었습니다.',
			'필요한 경우, 적절한 라이브러리(slick, sortable 등) 을 활용했습니다.',
			'타 회사와의 협업 프로젝트는 처음이었기에, 협업 방식이나 의사소통에 고민을 한 경험이었습니다.',
		],
		relatedURL: [
			{
				title: '리앤영의원 홈페이지',
				url: 'https://gangnam.reandyoung.co.kr/main/care',
			},
		],
		images: [
			{ title: '키워드', url: 'reandyoung/keywords.jpg' },
			{ title: '콘텐츠 관리', url: 'reandyoung/media-content.jpg' },
			{ title: '예약가능시간', url: 'reandyoung/booking-time.jpg' },
			{ title: '이벤트 등록 및 수정', url: 'reandyoung/event-create.jpg' },
		],
	},
	{
		start: '2021.04',
		end: '2021.08',
		name: 'Coordi 앱(태블릿) 리뉴얼',
		kind: 'work',
		overview: '병원관리 & CRM 앱 리뉴얼',
		description: [
			'기존 네이티브 앱을 하이브리드로 리뉴얼하는 프로젝트로, Flutter + Javascript 로 진행되었습니다.',
			'초기 기획단계부터 참여해, 프론트엔드 개발자로서 UI 스타일 설정 및 기본 구조 작업을 작업했습니다.',
			'페이지별로 분할해 담당했으며, 제가 작업한 페이지는 예약현황, 고객차트 등 입니다.',
			'해당 리뉴얼 프로젝트로 기존 앱의 불편사항(고정된 레이아웃, 숨겨진 버튼 등)을 대부분 해결한 결과, 사용하는 의원이 2배 정도로 증가했습니다.',
		],
		focus: [
			'웹뷰 위에서 Javascript와 PHP를 사용했습니다.',
			'Array, Object 를 활용해 데이터를 처리하고 필터링하는 방식을 배운 뒤 적용했습니다.',
			'Mysql 등 관계형 데이터베이스를 통해 데이터를 관리했습니다.',
			'접근 권한별 UI를 다르게 보여주는 방식을 경험했습니다.',
		],
		relatedURL: [
			{
				title: '앱스토어',
				url: 'https://play.google.com/store/apps/details?id=intergrated.coordi.tablet_v2&hl=en-KR',
			},
		],
		images: [
			{ title: '예약현황', url: 'coordi-tablet/status.jpg' },
			{ title: '월별예약', url: 'coordi-tablet/monthly.jpg' },
			{ title: '고객차트', url: 'coordi-tablet/chart.jpg' },
		],
	},
	{
		start: '2020.03',
		end: '2022.08',
		name: '홈페이지 퍼블리싱',
		kind: 'work',
		overview: '홈페이지 유지보수 및 신규 개설',
		description: [''],
		focus: [''],
		relatedURL: [
			{ title: '하우스오브브이', url: 'https://www.houseofv.co.kr' },
			{ title: '브이스퀘어', url: 'https://www.vsquare.kr/' },
		],
	},
	{
		start: '2022.11',
		end: '2022.12',
		name: '서울소울',
		kind: 'personal',
		overview: '개인 포트폴리오 외주',
		description: [
			'포트폴리오 겸 블로그 홈페이지를 작업했습니다.',
			'기본 구성(사이트맵, 필요 카테고리) 외의 작업은 개인이 작업했습니다.',
			'게시물 관리에 필요한 WYSIWYG editor 라이브러리를 활용하고 이미지 업로드 기능을 구현했습니다.',
		],
		focus: ['사용 기술: HTML5, CSS, JavaScript, PHP, MySQL'],
		relatedURL: [{ title: '서울소울 홈페이지', url: 'http://seoulsoul.kr/' }],
		images: [
			{ title: '메인', url: 'seoulsoul/main.png' },
			{ title: '게시판', url: 'seoulsoul/board.png' },
			{ title: '게시물', url: 'seoulsoul/article.png' },
			{ title: '관리', url: 'seoulsoul/editor.png' },
		],
	},
	{
		start: '2022.12',
		end: '2023.02',
		name: '오늘의 날씨',
		kind: 'personal',
		overview: '도시별 현재 날씨 검색 웹앱',
		description: [
			'OpenWeather의 API를 이용해 위치별 날씨 데이터를 받아와 보여주는 프로젝트입니다.',
			'도시별로 데이터를 불러오기 위해, API에서 사용하는 도시 아이디를 url에 넣어 구분했습니다.',
		],
		focus: [
			'사용 기술: React.js, Typescript',
			'라이브러리: react-router, react-query, styled-components, recoil',
		],
		relatedURL: [
			{ title: 'weather app', url: 'https://hyesuhong.github.io/weather_app/' },
		],
		images: [{ title: '기본화면', url: 'weather/basic.png' }],
	},
];
