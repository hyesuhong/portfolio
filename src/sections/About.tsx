import Section from '../components/Section';
import { aboutData, IHistory } from '../data/about';

function About() {
	return (
		<Section
			id='about'
			title={
				<>
					Who am <strong>I</strong>
				</>
			}
			rightChild={<AboutDetail />}
		/>
	);
}

function AboutDetail() {
	const { introduce, history } = aboutData;
	const historyKeys = Object.keys(history);

	return (
		<div className='about'>
			<p className='about__desc'>
				{introduce.map((para, i) => (
					<span key={i}>
						{para as string}
						{i !== 0 && <br />}
					</span>
				))}
			</p>
			{historyKeys.map((h, i) => (
				<dl className='about__history' key={i}>
					<dt className='about__history-title'>{h}</dt>
					{history[h].map((data, index) => (
						<HistoryData data={data} key={index} />
					))}
				</dl>
			))}
		</div>
	);
}

const HistoryData = ({ data }: { data: IHistory }) => {
	const { start, end, name } = data;
	const duration = end ? `${start} ~ ${end}` : `${start} ~`;
	return (
		<dd>
			{duration} | {name}
		</dd>
	);
};

export default About;
