import {
	historyDetail,
	historyDetailDur,
	historyDetailItem,
	historyDetailPara,
	historyTitle,
	historyWrap,
} from './about.css';

export type HistoryType = {
	start: string;
	end?: string;
	name: string;
	detail?: string;
};

interface IHistoryCard {
	title: string;
	data: HistoryType[];
}

export default function HistoryCard({ title, data }: IHistoryCard) {
	return (
		<dl className={historyWrap}>
			<dt>
				<h3 className={historyTitle}>{title}</h3>
			</dt>
			<dd className={historyDetail}>
				<ul>
					{data.map((history, index) => {
						const { start, end, name, detail } = history;
						const duration = end ? `${start} ~ ${end}` : `${start} ~`;

						return (
							<li key={index} className={historyDetailItem}>
								<span className={historyDetailDur}>{duration}</span>
								<h4>{name}</h4>
								{detail && <p className={historyDetailPara}>{detail}</p>}
							</li>
						);
					})}
				</ul>
			</dd>
		</dl>
	);
}
