import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TagContainer = styled.div`
	margin-bottom: 6px;
	background: ${({ theme, themeVariant, type }) =>
		theme[themeVariant].colors[type]};
	border-radius: 50px;
	border: 2px solid white;
	text-align: center;
	padding: 4px 16px;
	text-transform: capitalize;
	width: fit-content;
`;
