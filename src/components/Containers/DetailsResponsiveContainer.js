import React from 'react';
import * as styles from './styles';

export function DetailsResponsiveContainer({ children, type }) {
	return (
		<styles.DetailsResponsiveContainer themeVariant={'original'} type={type}>
			{children}
		</styles.DetailsResponsiveContainer>
	);
}
