import { memo, useEffect } from 'react';
import { projectVal } from '../data/projects';
import Slide from './Slide';

interface IProjectListProps {
	data: projectVal;
	onClick?: any;
	current: boolean;
}

const ProjectList = memo(({ data, onClick, current }: IProjectListProps) => {
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
			{images && current && <Slide images={images} />}
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
