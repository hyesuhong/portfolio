import { dataObj } from '../../../typeSet';
import HistoryCard, { HistoryType } from './HistoryCard';

interface IHistory {
	data: dataObj<HistoryType[]>;
}

export default function History({ data }: IHistory) {
	const keys = Object.keys(data);

	return (
		<>
			{keys.map((hType, index) => (
				<HistoryCard key={index} title={hType} data={data[hType]} />
			))}
		</>
	);
}
