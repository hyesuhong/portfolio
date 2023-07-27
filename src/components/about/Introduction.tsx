import { introWrap, para } from './about.css';

interface IIntroduction {
	data: string[];
}

export default function Introduction({ data }: IIntroduction) {
	return (
		<div className={introWrap}>
			{data.map((intro, index) => (
				<p key={index} className={para}>
					{intro}
				</p>
			))}
		</div>
	);
}
