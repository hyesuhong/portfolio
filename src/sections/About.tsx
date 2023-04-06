import Section from '../components/Section';
import Logo from '../assets/images/logo.svg';

function About() {
	return (
		<Section
			title={
				<>
					Who am&nbsp;<strong>I</strong>
				</>
			}
			leftChild={<img src={Logo} alt='profile' />}
		/>
	);
}

export default About;
