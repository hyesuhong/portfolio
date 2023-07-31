import { colorVars } from '../../styles/theme.css';
import Logo from '../icon/Logo';

export default function LoaderIcon() {
	return (
		<Logo
			animated={true}
			width='10rem'
			height='10rem'
			color={colorVars.lightPurple}
		/>
	);
}
