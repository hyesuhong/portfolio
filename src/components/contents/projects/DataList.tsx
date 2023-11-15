import Text from '../../basic/Text';
import Slide from './Slide';
import * as S from '../../../styles/projects.css';

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
			className={current ? S.projectList.clicked : S.projectList.default}
			onClick={onClick}
		>
			<div className={S.projectValue.title} data-kind={kind[0]}>
				<Text typography='span' className={S.projectTitle}>
					{name}
				</Text>
			</div>
			<div className={S.projectValue.overview}>
				<Text typography='span'>{overview}</Text>
			</div>
			<div className={S.projectValue.duration}>
				{end ? `${start} ~ ${end}` : start}
			</div>
			{images && current && (
				<div className={S.projectValue.images}>
					<Slide images={images} />
				</div>
			)}
			<div className={S.projectValue.details}>
				{stack && (
					<ul className={S.projectDetailList.stack}>
						{stack.map((s, i) => (
							<Text typography='span' className={S.projectStack} key={i}>
								{s}
							</Text>
						))}
					</ul>
				)}

				<ul className={S.projectDetailList.desc}>
					{description.map((desc, index) =>
						desc !== '' ? (
							<li key={index} className={S.projectDesc}>
								{desc.toString()}
							</li>
						) : null
					)}
				</ul>

				{relatedURL && (
					<ul className={S.projectDetailList.url}>
						{relatedURL.map((url, index) => (
							<li key={index}>
								<a
									href={url.url}
									target='_blank'
									rel='noreferrer'
									className={S.projectUrl}
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
