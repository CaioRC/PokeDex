import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
	position: relative;
	text-decoration: none;
	width: 100%;
	height: 160px;
	cursor: pointer;
	background-color: ${({ theme, themeVariant, type }) =>
		theme[themeVariant].colors[type] + '95'};
	padding: 24px;
	border-radius: 16px;
	border: 0.5px solid rgba(109, 111, 113, 0.6);
`;

export const TextWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
	z-index: 2;
`;

export const TagsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	width: 40%;
`;

export const PokemonImage = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 120px;
	height: 120px;
`;
