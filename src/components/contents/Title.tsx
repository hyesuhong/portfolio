import Text from '../basic/Text';
import * as S from '../../styles/contents.css';

interface ITitle {
	title: string;
}

export default function Title({ title }: ITitle) {
	return (
		<>
			<Text
				typography='h2'
				className={S.title}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</>
	);
}
