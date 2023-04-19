import { memo, useEffect, useMemo, useState } from 'react';
import { projectVal } from '../data/projects';
import ProjectList from './ProjectList';

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
		<div className='projects'>
			{dataWithState.map((d, i) => (
				<ProjectList key={i} data={d} onClick={onClick} />
			))}
		</div>
	);
});

export default ProjectTable;
