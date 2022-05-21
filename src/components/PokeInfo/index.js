import { Typography } from 'components/Typography';
import { DetailsResponsiveContainer } from 'components/Containers/DetailsResponsiveContainer';
import { Tag } from 'components/Tag';
import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import * as styles from './styles';
import { NumberPadding } from 'utils/StringUtilsOperations';

export function PokeInfo() {
	let { id } = useParams();
	const [pokemon, setPokemon] = useState({});
	const [pokemonSpecie, setPokemonSpecie] = useState({});

	const fetchPokemonData = () => {
		return axios
			.all([
				axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
				axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			])
			.then(
				axios.spread(({ data: pokemonSpecieData }, { data: pokemonData }) => {
					setPokemon(pokemonData);
					setPokemonSpecie(pokemonSpecieData);
					console.log(pokemonData);
					console.log(pokemonSpecieData);
					return { ...pokemon, ...pokemonSpecie };
				})
			);
	};

	const { isLoading } = useQuery(['pokemon', id], fetchPokemonData, {
		cacheTime: 0
	});

	return isLoading ? (
		<p>Loading... {console.log(pokemon)}</p>
	) : (
		<DetailsResponsiveContainer type={pokemon.types[0].type.name}>
			{console.log(pokemon)}
			<styles.PokeInfoContainer>
				<styles.PokeInfoHeaderContainer>
					<styles.PokeInfoHeaderWrapper>
						<styles.PokeInfoHeaderTextWrapper>
							<Typography color="white" size="small" weight="regular">
								{pokemon.name}
							</Typography>
							<Typography color="white" size="small" weight="regular">
								{NumberPadding(pokemonSpecie.id, 3)}
							</Typography>
						</styles.PokeInfoHeaderTextWrapper>
						<styles.TagsWrapper>
							<styles.TagsWrapper>
								{pokemon.types.map(({ type }, index) => (
									<Tag key={type + index} type={type.name} />
								))}
							</styles.TagsWrapper>
						</styles.TagsWrapper>
					</styles.PokeInfoHeaderWrapper>
					<styles.PokemonImage
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${NumberPadding(
							pokemonSpecie.id,
							3
						)}.png`}
					/>
				</styles.PokeInfoHeaderContainer>
				<styles.PokeInfoWrapper themeVariant={'original'} background="white">
					<Typography
						color={pokemon.types[0].type.name}
						size="medium"
						weight="semibold"
					>
						Descrição
					</Typography>

					<Typography color="black" size="xsmall" weight="thin">
						{console.log(pokemonSpecie)}
						{console.log(pokemon)}
						{pokemonSpecie.flavor_text_entries[1].flavor_text}
					</Typography>

					{/* <styles.PokeInfoCharacteristics>
						<PokeCharacteristics
							Icon={FaWeightHanging}
							text={'7kg'}
							subtext={'peso'}
						/>
						<PokeCharacteristics
							Icon={FaWeightHanging}
							text={'7kg'}
							subtext={'peso'}
						/>
						<PokeCharacteristics
							Icon={FaWeightHanging}
							text={'7kg'}
							subtext={'peso'}
						/>
						<styles.PokeInfoCharacteristicsWeight>
							<styles.PokeInfoCharacteristicsWeightText>
								<FaWeightHanging />
								{'6.9kg'}
							</styles.PokeInfoCharacteristicsWeightText>

							<styles.PokeInfoCharacteristicsWeightSubText></styles.PokeInfoCharacteristicsWeightSubText>
						</styles.PokeInfoCharacteristicsWeight>
						<styles.PokeInfoCharacteristicsHeight></styles.PokeInfoCharacteristicsHeight>
						<styles.PokeInfoCharacteristicsPower></styles.PokeInfoCharacteristicsPower>
					</styles.PokeInfoCharacteristics> */}
				</styles.PokeInfoWrapper>
			</styles.PokeInfoContainer>
		</DetailsResponsiveContainer>
	);
}
