import { Typography } from 'components/Typography';
import { Avatar } from 'components/Avatar';
import { DetailsResponsiveContainer } from 'components/Containers/DetailsResponsiveContainer';
import { Card } from 'components/Card';
import { Tag } from 'components/Tag';
import { PokeCharacteristics } from 'components/PokeCharacteristics';
import { useLocation, useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import * as styles from './styles';
import { NumberPadding } from 'utils/StringUtilsOperations';
import { FaWeightHanging } from 'react-icons/fa';

export function PokeInfo() {
	// const { ref, inView } = useInView();
	let { id } = useParams();
	const [pokemon, setPokemon] = useState({});
	const [pokemonSpecie, setPokemonSpecie] = useState({});
	const location = useLocation();

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
					return { ...pokemon, ...pokemonSpecie };
				})
			);
	};

	const { isLoading, isError, data, error, refetch } = useQuery(
		'pokemon',
		fetchPokemonData,
		{
			keepPreviousData: true,
			staleTime: 0,
			enabled: false,
			notifyOnNetworkStatusChange: true
		}
	);

	useEffect(() => {
		console.log('refecthed');
		refetch();
	}, []);

	console.log(data);

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

					<styles.PokeInfoCharacteristics>
						{/* <PokeCharacteristics
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
						/> */}
						<styles.PokeInfoCharacteristicsWeight>
							<styles.PokeInfoCharacteristicsWeightText>
								<FaWeightHanging />
								{'6.9kg'}
							</styles.PokeInfoCharacteristicsWeightText>

							<styles.PokeInfoCharacteristicsWeightSubText></styles.PokeInfoCharacteristicsWeightSubText>
						</styles.PokeInfoCharacteristicsWeight>
						<styles.PokeInfoCharacteristicsHeight></styles.PokeInfoCharacteristicsHeight>
						<styles.PokeInfoCharacteristicsPower></styles.PokeInfoCharacteristicsPower>
					</styles.PokeInfoCharacteristics>
				</styles.PokeInfoWrapper>
			</styles.PokeInfoContainer>
		</DetailsResponsiveContainer>
	);
}
