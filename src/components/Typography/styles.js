import styled from 'styled-components';
import { fontSize, fontWeight } from 'global/variables';

export const Typography = styled.p`
	font-family: ${props => props.theme[props.themeVariant].fonts};
	font-size: ${props => fontSize[props.size]};
	font-weight: ${props => fontWeight[props.weight]};
	color: ${props => props.theme[props.themeVariant].colors[props.color]};
`;
