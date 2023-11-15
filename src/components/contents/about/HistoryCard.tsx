import Text from '../../basic/Text';
import * as S from '../../../styles/about.css';

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
		<dl className={S.historyWrap}>
			<dt>
				<Text typography='h3' className={S.historyTitle}>
					{title}
				</Text>
			</dt>
			<dd className={S.historyDetail}>
				<ul>
					{data.map(({ start, end, name, detail }, index) => {
						const duration = end ? `${start} ~ ${end}` : `${start} ~`;

						return (
							<li key={index} className={S.historyDetailItem}>
								<span className={S.historyDetailDur}>{duration}</span>
								<Text typography='h4'>{name}</Text>
								{detail && (
									<Text
										typography='p'
										className={S.historyDetailPara}
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
