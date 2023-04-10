import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import { dataValArr, skillData } from '../data/skills';

const Selectlist = styled.ul`
	text-align: right;
	& > li {
		text-transform: uppercase;
		font-size: 20px;
		margin-bottom: 20px;
	}

	& > li:last-child {
		margin-bottom: 0;
	}

	input {
		display: none;
	}

	label {
		color: ${(props) => props.theme.textColor};
		opacity: 0.2;
		cursor: pointer;
		transition: all 0.2s;
	}

	input:checked + label {
		color: ${(props) => props.theme.accentColor};
		opacity: 1;
		cursor: default;
	}
`;

const SkillList = styled.dl`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px 10px;

	&:not(:last-child) {
		border-bottom: 1px solid ${(props) => props.theme.textColor};
	}

	dt {
		flex: 1;
		font-size: 32px;
		font-weight: 700;
	}

	dd {
		flex: 1;
		padding-right: 10px;

		p {
			font-size: 16px;
			font-weight: 300;
			margin-bottom: 10px;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
`;

const listFormat = (data: dataValArr, key: number) => {
	const { name, details } = data;

	return (
		<SkillList key={key}>
			<dt>{name}</dt>
			<dd>
				{details.map((detail, i) => (
					<p key={i}>{detail}</p>
				))}
			</dd>
		</SkillList>
	);
};

export default function Skills() {
	const dataKeys = Object.keys(skillData);
	const [skill, setSkill] = useState(dataKeys[0]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSkill(e.target.value);
	};

	const leftChild = () => {
		return (
			<Selectlist>
				{dataKeys.map((data, index) => {
					const isChecked = skill === data;
					return (
						<li key={index}>
							<input
								type='radio'
								name='skillCheck'
								value={data}
								id={'skillCheck-' + data}
								defaultChecked={isChecked}
								onChange={onChange}
							/>
							<label htmlFor={'skillCheck-' + data}>{data}</label>
						</li>
					);
				})}
			</Selectlist>
		);
	};

	return (
		<Section
			title={
				<>
					My&nbsp;<strong>skills</strong>&nbsp;are
				</>
			}
			leftChild={leftChild()}
			rightChild={skillData[skill].map((data, key) => listFormat(data, key))}
		/>
	);
}
