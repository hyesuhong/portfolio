import { ReactNode } from 'react';
import { article } from './contents.css';

interface IArticle {
	position: 'left' | 'right';
	children?: ReactNode;
}

export default function Article({ position, children }: IArticle) {
	return <article className={article[position]}>{children}</article>;
}
