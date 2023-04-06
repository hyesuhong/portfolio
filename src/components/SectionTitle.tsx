import { ReactNode } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	display: flex;
	align-items: center;

	height: 60px;
	font-size: 24px;
	font-weight: 300;
	border-top: 1px solid ${(props) => props.theme.textColor};
	border-bottom: 1px solid ${(props) => props.theme.textColor};
	padding: 0 20px;

	position: sticky;
	top: 0;

	strong {
		font-weight: 900;
	}
`;

interface ITitleProps {
	children: ReactNode;
}

export default function SectionTitle({ children }: ITitleProps) {
	return <Title>{children}</Title>;
}
