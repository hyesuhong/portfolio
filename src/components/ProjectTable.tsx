import { memo, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { projectVal } from '../data/projects';
import ProjectList from './ProjectList';

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

interface IProjectTableProps {
	data: projectVal[];
}

const ProjectTable = memo(({ data }: IProjectTableProps) => {
	const [prjIndex, setPrjIndex] = useState(-1);
	const dataWithState = useMemo(() => {
		return data.map((d, i) => {
			return { ...d, current: i === prjIndex };
		});
	}, [prjIndex, data]);

	useEffect(() => {
		setPrjIndex(-1);
	}, [data]);

	const onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget } = ev;
		const parent = currentTarget.parentElement!;
		const siblings = Array.from(parent.children).filter(
			(el) => !el.classList.contains('thead')
		);

		const myIndex = siblings.findIndex((el) => el === currentTarget);
		setPrjIndex(myIndex);

		siblings[myIndex].classList.add('clicked');

		siblings.forEach(
			(el, i) => i !== myIndex && el.classList.remove('clicked')
		);
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
			{dataWithState.map((d, i) => (
				<ProjectList key={i} data={d} onClick={onClick} />
			))}
		</Table>
	);
});

export default ProjectTable;
