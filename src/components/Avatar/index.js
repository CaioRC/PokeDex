import React from 'react';
import * as styles from './styles';

export function Avatar({ imageUrl, username }) {
	return (
		<styles.AvatarWrapper>
			<styles.Image src={imageUrl} alt={username} />
		</styles.AvatarWrapper>
	);
}
