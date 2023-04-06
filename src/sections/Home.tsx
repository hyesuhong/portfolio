import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	h1 {
		font-size: 64px;
		font-weight: 100;
		text-align: center;
	}
`;

function Home() {
	return (
		<Section>
			<h1>
				Frontend Developer
				<br />
				Hyesu Hong
			</h1>
		</Section>
	);
}

export default Home;
