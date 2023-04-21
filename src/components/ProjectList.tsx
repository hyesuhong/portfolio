import { memo, useEffect } from 'react';
import { projectVal } from '../data/projects';

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
			{images && (
				<div className='project__images'>
					<div className='project__images-wrapper'>
						<div
							className='project__images-slide'
							style={{ width: `${100 * images.length}%` }}
						>
							{images.map((img, index) => (
								<div className='project__images-img' key={index}>
									<img
										src={require(`../assets/images/projects/${img.url}`)}
										alt={img.title}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
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
