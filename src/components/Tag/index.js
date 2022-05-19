import { Typography } from 'components/Typography';
import React from 'react';
import * as styles from './styles';

export function Tag({ children }) {
	return (
		<styles.TagContainer>
			<Typography color="white" size="xxsmall" weight="regular">
				{children}
			</Typography>
		</styles.TagContainer>
	);
}
