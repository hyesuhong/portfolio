import { useEffect, useState } from 'react';
import DataList, { project, projectKind } from './DataList';

interface IDataTable {
	dataList: project[];
	kind: projectKind;
}

export default function DataTable({ dataList, kind }: IDataTable) {
	const [prjIndex, setPrjIndex] = useState(-1);

	const onClick = (ev: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget } = ev;
		const parent = currentTarget.parentElement!;
		const siblings = Array.from(parent.children).filter(
			(el) => !el.classList.contains('thead')
		);

		const myIndex = siblings.findIndex((el) => el === currentTarget);
		setPrjIndex(myIndex);
	};

	useEffect(() => {
		setPrjIndex(-1);
	}, [dataList]);

	return (
		<>
			{dataList.map((data, index) => (
				<DataList
					data={data}
					key={index}
					kind={kind}
					current={index === prjIndex}
					onClick={onClick}
				/>
			))}
		</>
	);
}
