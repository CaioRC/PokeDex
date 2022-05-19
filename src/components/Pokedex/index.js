import { Typography } from 'components/Typography';
import { Avatar } from 'components/Avatar';
import { ResponsiveContainer } from 'components/Containers/ResponsiveContainer';
import { Card } from 'components/Card';
import React from 'react';
import * as styles from './styles';

export function Pokedex() {
	return (
		<ResponsiveContainer>
			<styles.PokedexContainer>
				<styles.CardsWrapper>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</styles.CardsWrapper>
			</styles.PokedexContainer>
		</ResponsiveContainer>
	);
}
