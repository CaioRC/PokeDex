import React from 'react';
import * as styles from './styles';

export function ResponsiveContainer({ children, background, type }) {
	return (
		<styles.ResponsiveContainer
			themeVariant={'original'}
			background={background}
			type={type}
		>
			{console.log(type)}
			{children}
		</styles.ResponsiveContainer>
	);
}
