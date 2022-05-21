import { Typography } from 'components/Typography';
import React from 'react';
import * as styles from './styles';

export function Tag({ type }) {
	return (
		<styles.TagContainer themeVariant={'original'} type={type}>
			<Typography color="white" size="xxsmall" weight="regular">
				{type}
			</Typography>
		</styles.TagContainer>
	);
}
