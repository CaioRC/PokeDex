import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
	position: relative;
	text-decoration: none;
	width: 100%;
	height: 160px;
	cursor: pointer;
	background: green;
	padding: 24px;
	border-radius: 16px;
	border: 0.5px solid rgba(109, 111, 113, 0.6);
`;

export const TextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const TagsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	width: 40%;
	border: 1px solid yellow;
`;

export const PokemonImage = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 160px;
	height: 160px;
`;
