import { useEffect, useState } from 'react';
import DataList, { project, projectKind } from './DataList';
import * as S from '../../../styles/projects.css';

interface IDataTable {
	dataList: project[];
	kind: projectKind;
}

export default function DataTable({ dataList, kind }: IDataTable) {
	const [prjIndex, setPrjIndex] = useState(-1);

	const onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget } = ev;
		const parent = currentTarget.parentElement!;
		const siblings = Array.from(parent.children);

		const myIndex = siblings.findIndex((el) => el === currentTarget);
		setPrjIndex(myIndex);
	};

	useEffect(() => {
		setPrjIndex(-1);
	}, [dataList]);

	return (
		<div className={S.projectTable}>
			{dataList.map((data, index) => (
				<DataList
					data={data}
					key={index}
					kind={kind}
					current={index === prjIndex}
					onClick={onClick}
				/>
			))}
		</div>
	);
}
