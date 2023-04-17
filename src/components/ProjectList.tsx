import { memo, useEffect } from 'react';
import styled from 'styled-components';
import { projectVal } from '../data/projects';
import IcoLink from '../assets/images/ico-link.svg';

const List = styled.div<{ isClicked?: boolean }>`
	position: relative;
	display: grid;
	grid-template: 40px max-content / repeat(2, 2fr) 1fr;
	grid-template-areas: 'title overview duration' 'images details empty';
	align-items: center;

	max-height: 40px;
	overflow: hidden;

	transition: all 0.5s;

	& > div:nth-child(-n + 3) {
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 40px;
			background: ${(props) => props.theme.textColor};
			opacity: 0.3;
			transform: scaleY(0);
			transform-origin: bottom center;
			transition: transform 0.3s;
			z-index: -1;
		}
	}

	&:hover > div:nth-child(-n + 3) {
		color: ${(props) => props.theme.bgColor};

		&::before {
			background: ${(props) => props.theme.bgColor};
			color: ${(props) => props.theme.textColor};
		}

		&::after {
			transform: scaleY(1);
		}
	}

	&.clicked {
		max-height: 100vh;

		& > div:nth-child(-n + 3) {
			color: ${(props) => props.theme.bgColor};

			&::before {
				background: ${(props) => props.theme.bgColor};
				color: ${(props) => props.theme.textColor};
			}

			&::after {
				opacity: 1;
				transform: scaleY(1);
			}
		}
	}

	& > div {
		padding-left: 10px;
	}

	.title {
		grid-area: title;

		display: flex;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		white-space: nowrap;
		min-width: 0;

		&::before {
			content: attr(data-kind);
			flex: 0 0 20px;
			height: 20px;
			border-radius: 20px;
			margin-right: 5px;

			background: ${(props) => props.theme.textColor};
			color: ${(props) => props.theme.bgColor};

			font-size: 12px;
			text-align: center;
			line-height: 175%;
			text-transform: capitalize;
		}

		span {
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	.overview {
		grid-area: overview;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.duration {
		grid-area: duration;
		font-size: 14px;
		/* font-feature-settings: 'tnum'; */
	}

	.images {
		grid-area: images;
	}

	.details {
		grid-area: details;
		font-size: 14px;
		line-height: 140%;
		padding-bottom: 10px;

		p:not(:last-child) {
			margin-bottom: 1em;
		}

		ul:not(:last-child) {
			margin-bottom: 20px;
		}

		ul > li {
			display: flex;
		}

		ul > li::before {
			content: '';
			flex: 0 0 4px;
			height: 4px;
			border-radius: 4px;
			background: ${(props) => props.theme.textColor};
			margin-right: 2px;
			margin-top: 6px;
		}

		ol a {
			display: inline-flex;
			align-items: center;
			width: fit-content;
		}

		ol a::after {
			content: '';
			width: 16px;
			height: 16px;
			margin-left: 5px;
			background: ${(props) => props.theme.textColor};
			mask: url(${IcoLink}) no-repeat center center;
			-webkit-mask: url(${IcoLink}) no-repeat center center;
			mask-size: cover;
			-webkit-mask-size: cover;
		}
	}
`;

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
		<List onClick={onClick} className={current ? 'clicked' : ''}>
			<div className='title' data-kind={kind[0]}>
				<span>{name}</span>
			</div>
			<div className='overview'>
				<span>{overview}</span>
			</div>
			<div className='duration'>
				{start} ~{end && ' ' + end}
			</div>
			{images && <div className='images'></div>}
			<div className='details'>
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
							<a href={url.url} target='_blank'>
								{url.title}
							</a>
						</li>
					))}
				</ol>
			</div>
		</List>
	);
});

export default ProjectList;
