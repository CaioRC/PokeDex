import { Typography } from 'components/Typography';
import { Avatar } from 'components/Avatar';
import { ResponsiveContainer } from 'components/Containers/ResponsiveContainer';
import React from 'react';
import * as styles from './styles';

export function Header() {
	return (
		<ResponsiveContainer background="grey">
			<styles.HeaderContainer>
				<styles.TextWrapper>
					<Typography weight="regular" size="small" color="white">
						Olá, <b>Ash Ketchum </b>
					</Typography>
					<Typography weight="regular" size="xsmall" color="white">
						Bem Vindo
					</Typography>
				</styles.TextWrapper>
				<styles.AvatarWrapper>
					<Avatar
						imageUrl={'https://thispersondoesnotexist.com/image'}
						username="Ash Ketchup"
					/>
				</styles.AvatarWrapper>
			</styles.HeaderContainer>
		</ResponsiveContainer>
	);
}
