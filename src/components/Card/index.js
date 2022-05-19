import { Typography } from 'components/Typography';
import { Tag } from 'components/Tag';
import React from 'react';
import * as styles from './styles';

export function Card() {
	return (
		<styles.CardContainer>
			<styles.TextWrapper>
				<Typography color="white" size="small" weight="regular">
					Bulbasaur
				</Typography>
				<Typography color="black05" size="xsmall" weight="regular">
					#001
				</Typography>
			</styles.TextWrapper>
			<styles.TagsWrapper>
				<Tag>Planta</Tag>
				<Tag>Venenoso</Tag>
			</styles.TagsWrapper>
			<styles.PokemonImage
				src={
					'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
				}
			/>
		</styles.CardContainer>
	);
}
