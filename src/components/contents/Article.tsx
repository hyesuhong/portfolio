import { ReactNode } from 'react';
import * as S from '../../styles/contents.css';

interface IArticle {
	position: 'left' | 'right';
	children?: ReactNode;
}

export default function Article({ position, children }: IArticle) {
	return <article className={S.article[position]}>{children}</article>;
}
