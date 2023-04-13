import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import {
	projectData,
	projectKind,
	projectURL,
	projectVal,
} from '../data/projects';

const SelectList = styled.ul`
	text-align: right;
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
	grid-template: repeat(2, max-content) / repeat(2, 2fr) 1fr;

	overflow: hidden;
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
					<strong>Projects</strong>&nbsp;what I did
				</>
			}
			leftChild={leftChild}
			rightChild={rightChild(data)}
		></Section>
	);
}

function rightChild(data: projectVal<string | projectURL>[]) {
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
					<div className='title'>{d.name}</div>
					<div className='overview'>{d.overview}</div>
					<div className='duration'>
						{d.start} ~{d.end && ' ' + d.end}
					</div>
				</List>
			))}
		</Table>
	);
}

export default Projects;
