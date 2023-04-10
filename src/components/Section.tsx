import { ReactNode } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Wrapper = styled.section`
	min-height: 100vh;
`;

const HasChildWrapper = styled(Wrapper)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: min-content minmax(0, 1fr);

	& > h2 {
		grid-column: span 2;
	}
`;

const LeftSide = styled.article`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;

	padding-bottom: 100px;
	padding-right: 10px;

	border-right: 1px solid ${(props) => props.theme.textColor};
`;

const RightSide = styled.article``;

interface ISectionProps {
	title: ReactNode;
	leftChild?: ReactNode;
	rightChild?: ReactNode;
}

export default function Section({
	title,
	leftChild,
	rightChild,
}: ISectionProps) {
	return leftChild || rightChild ? (
		<HasChildWrapper>
			<SectionTitle>{title}</SectionTitle>
			{leftChild && <LeftSide>{leftChild}</LeftSide>}
			{rightChild && <RightSide>{rightChild}</RightSide>}
		</HasChildWrapper>
	) : (
		<Wrapper>
			<SectionTitle>{title}</SectionTitle>
		</Wrapper>
	);
}
