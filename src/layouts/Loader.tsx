import LoaderIcon from '../components/loader/LoaderIcon';
import Wrapper from '../components/loader/Wrapper';

interface ILoaderProps {
	visible: boolean;
}

export default function Loader({ visible }: ILoaderProps) {
	return (
		<Wrapper visible={visible}>
			<LoaderIcon />
		</Wrapper>
	);
}
