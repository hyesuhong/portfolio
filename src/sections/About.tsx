import Section from '../components/Section';
import Logo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { aboutData, IHistory } from '../data/about';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: max-content;
	align-content: end;
	gap: 30px 20px;

	padding: 100px 20px 100px 10px;

	font-size: 14px;
	font-weight: 300;
`;

const Desc = styled.p`
	grid-column: span 3;
	line-height: 160%;
`;

const HistoryWrap = styled.dl`
	grid-column: span 2;

	dt {
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 10px;
		text-transform: capitalize;
	}
`;

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
		<Wrapper>
			<Desc>
				{introduce.map((para, i) => (
					<span key={i}>
						{para as string}
						{i !== 0 && <br />}
					</span>
				))}
			</Desc>
			{historyKeys.map((h, i) => (
				<HistoryWrap key={i}>
					<dt>{h}</dt>
					{history[h].map((data, index) => historyData(data, index))}
				</HistoryWrap>
			))}
		</Wrapper>
	);
}

const historyData = (data: IHistory, index: number) => {
	const { start, end, name } = data;
	const duration = end ? `${start} ~ ${end}` : `${start} ~`;
	return (
		<dd key={index}>
			{duration} | {name}
		</dd>
	);
};

export default About;
