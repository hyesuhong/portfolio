import Text from '../../basic/Text';
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
	detail?: string | string[];
};

interface IHistoryCard {
	title: string;
	data: HistoryType[];
}

export default function HistoryCard({ title, data }: IHistoryCard) {
	return (
		<dl className={historyWrap}>
			<dt>
				<Text typography='h3' className={historyTitle}>
					{title}
				</Text>
			</dt>
			<dd className={historyDetail}>
				<ul>
					{data.map(({ start, end, name, detail }, index) => {
						const duration = end ? `${start} ~ ${end}` : `${start} ~`;

						return (
							<li key={index} className={historyDetailItem}>
								<span className={historyDetailDur}>{duration}</span>
								<Text typography='h4'>{name}</Text>
								{detail && (
									<Text
										typography='p'
										className={historyDetailPara}
										dangerouslySetInnerHTML={{
											__html: Array.isArray(detail)
												? detail.join('<br/>')
												: detail,
										}}
									/>
								)}
							</li>
						);
					})}
				</ul>
			</dd>
		</dl>
	);
}
