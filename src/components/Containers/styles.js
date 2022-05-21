import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	border-radius: 0 0 25px 25px;
	background: ${({ theme, themeVariant, background }) =>
		theme[themeVariant].colors[background]};
`;

export const DetailsResponsiveContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: ${({ theme, themeVariant, type }) =>
		theme[themeVariant].colors[type] + '95'};
`;
