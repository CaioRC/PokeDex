import styled from 'styled-components';

import { BREAKPOINTS } from 'global/variables';
export const PokeInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		max-width: 1200px;
		padding: 0px 32px 0px 32px;
	}
`;

export const PokeInfoHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0px 32px;
	transform: translateY(40px);
	width: 100%;
	height: 250px;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		max-width: 1200px;
	}
`;

export const PokeInfoHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const PokeInfoHeaderTextWrapper = styled.div`
	display: flex;
	margin-top: 24px;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 16px;
	text-transform: capitalize;
`;

export const TagsWrapper = styled.div`
	display: flex;
	width: 100%;
`;

export const PokeInfoWrapper = styled.div`
	background: ${({ theme, themeVariant, background }) =>
		theme[themeVariant].colors[background]};
	padding: 32px 16px;
	align-items: center;
	justify-content: center;
	width: 100%;
	border-radius: 25px 25px 0px 0px;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		max-width: 1200px;
		padding: 64px 32px;
	}
`;

export const PokeInfoCharacteristics = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid green;
	padding: 8px;
`;

export const PokeInfoCharacteristicsWeight = styled.div`
	border: 1px solid yellow;
`;

export const PokeInfoCharacteristicsWeightText = styled.div``;
export const PokeInfoCharacteristicsWeightSubText = styled.div``;

export const PokeInfoCharacteristicsHeight = styled.div`
	border: 1px solid red;
`;

export const PokeInfoCharacteristicsPower = styled.div`
	border: 1px solid blue;
`;

export const PokemonImage = styled.img`
	width: 160px;
	height: 160px;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		width: 200px;
		height: 200px;
	}
`;
