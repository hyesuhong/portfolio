import Slide from './Slide';
import {
	projectDesc,
	projectDetailList,
	projectList,
	projectStack,
	projectTitle,
	projectUrl,
	projectValue,
} from './projects.css';

// export type projectKind = 'all' | 'work' | 'personal';
export type projectKind = string;

export type project = {
	start: string;
	end?: string;
	name: string;
	role?: string;
	overview?: string;
	stack: string[];
	description: string[];
	relatedURL?: projectURL[];
	images?: projectURL[];
};

export interface projectURL {
	title: string;
	url: string;
}

interface IDataList {
	data: project;
	kind: projectKind;
	current: boolean;
	onClick?: React.MouseEventHandler;
}
export default function DataList({ data, kind, current, onClick }: IDataList) {
	const { name, overview, start, end, images, description, relatedURL, stack } =
		data;

	return (
		<div
			className={current ? projectList['clicked'] : projectList['default']}
			onClick={onClick}
		>
			<div className={projectValue['title']} data-kind={kind[0]}>
				<span className={projectTitle}>{name}</span>
			</div>
			<div className={projectValue['overview']}>
				<span>{overview}</span>
			</div>
			<div className={projectValue['duration']}>
				{end ? `${start} ~ ${end}` : start}
			</div>
			{images && current && (
				<div className={projectValue['images']}>
					<Slide images={images} />
				</div>
			)}
			<div className={projectValue['details']}>
				{stack && (
					<ul className={projectDetailList['stack']}>
						{stack.map((s, i) => (
							<span className={projectStack} key={i}>
								{s}
							</span>
						))}
					</ul>
				)}

				<ul className={projectDetailList['desc']}>
					{description.map((desc, index) =>
						desc !== '' ? (
							<li key={index} className={projectDesc}>
								{desc.toString()}
							</li>
						) : null
					)}
				</ul>

				{relatedURL && (
					<ul className={projectDetailList['url']}>
						{relatedURL.map((url, index) => (
							<li key={index}>
								<a
									href={url.url}
									target='_blank'
									rel='noreferrer'
									className={projectUrl}
								>
									{url.title}
								</a>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
