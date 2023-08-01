import { title as h2Title } from './contents.css';
import Text from '../basic/Text';

interface ITitle {
	title: string;
}

export default function Title({ title }: ITitle) {
	return (
		<>
			<Text
				typography='h2'
				className={h2Title}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</>
	);
}
