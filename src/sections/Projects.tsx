import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import { projectData, projectKind, projectVal } from '../data/projects';
import IcoLink from '../assets/images/ico-link.svg';

const SelectList = styled.ul`
	text-align: right;
	padding-right: 10px;

	& > li {
		text-transform: uppercase;
		font-size: 20px;
		margin-bottom: 20px;
	}

	& > li:last-child {
		margin-bottom: 0;
	}

	input {
		display: none;
	}

	label {
		color: ${(props) => props.theme.textColor};
		opacity: 0.2;
		cursor: pointer;
		transition: all 0.2s;
	}

	input:checked + label {
		color: ${(props) => props.theme.accentColor};
		opacity: 1;
		cursor: default;
	}
`;

const Table = styled.div`
	font-size: 16px;
	.thead {
		position: sticky;
		top: 0;

		display: flex;
		align-items: center;
		height: 40px;

		background: ${(props) => props.theme.bgColor};
		border-bottom: 1px solid ${(props) => props.theme.textColor};
	}

	.th {
		flex: 2;
		padding-left: 10px;
	}

	.th:last-child {
		flex: 1;
	}
`;

const List = styled.div`
	display: grid;
	grid-template: 40px max-content / repeat(2, 2fr) 1fr;
	grid-template-areas: 'title overview duration' 'images details empty';
	align-items: center;

	/* height: 40px; */
	overflow: hidden;

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

function Projects() {
	const projectKinds = Object.keys(projectKind);
	const [pKind, setPKind] = useState(projectKinds[0]);

	const data =
		pKind === 'all' ? projectData : projectData.filter((d) => d.kind === pKind);

	const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setPKind(ev.target.value);
	};

	const leftChild = (
		<SelectList>
			{projectKinds.map((kind, index) => {
				const isChecked = kind === pKind;
				return (
					<li key={index}>
						<input
							type='radio'
							name='pKind'
							value={kind}
							id={'pKind-' + kind}
							defaultChecked={isChecked}
							onChange={onChange}
						/>
						<label htmlFor={'pKind-' + kind}>{kind}</label>
					</li>
				);
			})}
		</SelectList>
	);

	return (
		<Section
			id='projects'
			title={
				<>
					<strong>Projects</strong> what I did
				</>
			}
			leftChild={leftChild}
			rightChild={rightChild(data)}
		></Section>
	);
}

function rightChild(data: projectVal[]) {
	const onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
		console.log(ev);
	};

	// 최신순 정렬
	data.sort((a, b) => {
		if (a.start > b.start) return -1;
		if (a.start < b.start) return 1;
		return 0;
	});

	return (
		<Table>
			<div className='thead'>
				<div className='th'>Project</div>
				<div className='th'>Description</div>
				<div className='th'>Duration</div>
			</div>
			{data.map((d, i) => (
				<List key={i} onClick={onClick}>
					<div className='title' data-kind={d.kind[0]}>
						<span>{d.name}</span>
					</div>
					<div className='overview'>
						<span>{d.overview}</span>
					</div>
					<div className='duration'>
						{d.start} ~{d.end && ' ' + d.end}
					</div>

					{d.images && <div className='images'></div>}
					<div className='details'>
						{d.description.map((desc, index) =>
							desc !== '' ? <p key={index}>{desc.toString()}</p> : null
						)}
						{d.focus.length > 0 && d.focus[0] !== '' && (
							<ul>
								{d.focus.map((f, index) =>
									f === '' ? null : <li key={index}>{f.toString()}</li>
								)}
							</ul>
						)}
						<ol>
							{d.relatedURL?.map((url, index) => (
								<li key={index}>
									<a href={url.url} target='_blank'>
										{url.title}
									</a>
								</li>
							))}
						</ol>
					</div>
				</List>
			))}
		</Table>
	);
}

export default Projects;
