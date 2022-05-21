import { Typography } from 'components/Typography';
import { Tag } from 'components/Tag';
import React from 'react';
import * as styles from './styles';
import { NumberPadding } from 'utils/StringUtilsOperations';

export function Card({ name, index, types }) {
	return (
		<styles.CardContainer
			to={`Details/${name}`}
			themeVariant={'original'}
			type={types[0].type.name}
		>
			<styles.PokemonImage
				src={
					index < 906
						? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${NumberPadding(
								index,
								3
						  )}.png`
						: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png"`
				}
			/>
			<styles.TextWrapper>
				<Typography color="white" size="small" weight="regular">
					{name}
				</Typography>
				<Typography color="white" size="xsmall" weight="regular">
					#{NumberPadding(index, 3)}
				</Typography>
			</styles.TextWrapper>
			<styles.TagsWrapper>
				{types.map(({ type }, index) => (
					<Tag key={name + index} type={type.name} />
				))}
			</styles.TagsWrapper>
		</styles.CardContainer>
	);
}
