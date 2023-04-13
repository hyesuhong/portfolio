import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
	min-height: 100vh;
`;

const HasChildWrapper = styled(Wrapper)`
	display: flex;
	border-top: 1px solid ${(props) => props.theme.textColor};
`;

const LeftSide = styled.article`
	flex: 1;
	height: 100vh;

	position: sticky;
	top: 0;

	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	padding: 100px 10px;

	border-right: 1px solid ${(props) => props.theme.textColor};
`;

const RightSide = styled.article`
	flex: 1;
	min-height: 100vh;
`;

const Title = styled.h2`
	font-size: 64px;
	font-weight: 100;
	padding-left: 10px;
	align-self: flex-start;
`;

const SectionTitle = styled(Title)`
	padding-left: 0;
	align-self: initial;

	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

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
			<LeftSide>
				<Title>{title}</Title>
				{leftChild && <>{leftChild}</>}
			</LeftSide>
			<RightSide>{rightChild}</RightSide>
		</HasChildWrapper>
	) : (
		<Wrapper>
			<SectionTitle>{title}</SectionTitle>
		</Wrapper>
	);
}
