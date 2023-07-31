import { useEffect, useState } from 'react';
import LoaderIcon from '../components/loader/LoaderIcon';
import Wrapper from '../components/loader/Wrapper';

export default function Loader() {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<Wrapper visible={visible}>
			<LoaderIcon />
		</Wrapper>
	);
}
