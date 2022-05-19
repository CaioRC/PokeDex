import React from 'react';
import * as styles from './styles';

export function Typography({ children, color, size, weight }) {
	return (
		<styles.Typography
			themeVariant={'original'}
			color={color}
			size={size}
			weight={weight}
		>
			{children}
		</styles.Typography>
	);
}
