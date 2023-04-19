import { memo } from 'react';
import { projectVal } from '../data/projects';

interface ProjectData extends projectVal {
	current: boolean;
}

interface IProjectListProps {
	data: ProjectData;
	onClick?: any;
}

const ProjectList = memo(({ data, onClick }: IProjectListProps) => {
	const {
		kind,
		name,
		overview,
		start,
		end,
		images,
		description,
		focus,
		relatedURL,
		current,
	} = data;

	return (
		<div
			className={`project__wrap ${current ? 'project__wrap-clicked' : ''}`}
			onClick={onClick}
		>
			<div className='project__title' data-kind={kind[0]}>
				<span>{name}</span>
			</div>
			<div className='project__overview'>
				<span>{overview}</span>
			</div>
			<div className='project__duration'>
				{start} ~{end && ' ' + end}
			</div>
			{images && <div className='project__images'></div>}
			<div className='project__details'>
				{description.map((desc, index) =>
					desc !== '' ? <p key={index}>{desc.toString()}</p> : null
				)}
				{focus.length > 0 && focus[0] !== '' && (
					<ul>
						{focus.map((f, index) =>
							f === '' ? null : <li key={index}>{f.toString()}</li>
						)}
					</ul>
				)}
				<ol>
					{relatedURL?.map((url, index) => (
						<li key={index}>
							<a href={url.url} target='_blank' rel='noreferrer'>
								{url.title}
							</a>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
});

export default ProjectList;
