import { HTMLAttributes } from 'react';

interface IText extends HTMLAttributes<Element> {
	typography: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function Text({ typography, ...props }: IText) {
	switch (typography) {
		case 'h1':
			return <h1 {...props} />;
		case 'h2':
			return <h2 {...props} />;
		case 'h3':
			return <h3 {...props} />;
		case 'h4':
			return <h4 {...props} />;
		case 'h5':
			return <h5 {...props} />;
		case 'h6':
			return <h6 {...props} />;
		case 'p':
			return <p {...props} />;
		case 'span':
			return <span {...props} />;
		default:
			return <></>;
	}
}
