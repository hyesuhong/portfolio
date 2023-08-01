import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	size?: number | string;
}

export default function Icon({ children, size, ...props }: Props) {
	const styleSize =
		typeof size === 'number'
			? `${size}px`
			: typeof size === 'string'
			? size
			: '';
	return (
		<span
			style={{
				display: 'inline-block',
				width: styleSize,
				height: styleSize,
			}}
			{...props}
		>
			{children}
		</span>
	);
}
