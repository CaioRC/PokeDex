import styled from 'styled-components';

import { BREAKPOINTS } from 'global/variables';

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 130px;
	background-color: grey;
	border-radius: 0 0 25px 25px;
	@media screen and (min-width: ${BREAKPOINTS.desktop}) {
		max-width: 1200px;
	}
`;

export const TextWrapper = styled.div`
	padding-left: 32px;
	display: block;
	justify-content: center;
	align-items: center;
`;

export const AvatarWrapper = styled.div`
	padding-right: 32px;
`;
