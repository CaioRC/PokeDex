import styled from 'styled-components';

import { BREAKPOINTS } from 'global/variables';

export const PokedexContainer = styled.div`
	border: 1px solid red;
	padding: 32px 16px;
	align-items: center;
	width: 100%;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		max-width: 1200px;
		padding: 64px 32px;
	}
`;

export const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 16px;
	row-gap: 16px;
	border: 1px solid green;

	@media screen and (min-width: ${BREAKPOINTS.tablet}) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (min-width: ${BREAKPOINTS.laptop}) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 20px;
		row-gap: 20px;
	}
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 24px;
		row-gap: 24px;
	}
`;
