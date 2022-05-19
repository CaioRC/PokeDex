import React from 'react';
import * as styles from './styles';

export function ResponsiveContainer({ children, background }) {
	return (
		<styles.ResponsiveContainer
			themeVariant={'original'}
			background={background}
		>
			{children}
		</styles.ResponsiveContainer>
	);
}
