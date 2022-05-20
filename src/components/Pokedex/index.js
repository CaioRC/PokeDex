import { Typography } from 'components/Typography';
import { Avatar } from 'components/Avatar';
import { ResponsiveContainer } from 'components/Containers/ResponsiveContainer';
import { Card } from 'components/Card';
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import * as styles from './styles';

export function Pokedex({ pokemons }) {
	const { ref, inView } = useInView();

	const fetchPokemons = async ({ pageParam = 0 }) => {
		return await axios
			.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageParam}`)
			.then(({ data }) => {
				const next = data.next;
				return axios
					.all(data.results.map(result => axios(result.url)))
					.then(data => {
						const pokemons = data.map(singleData => singleData.data);
						return {
							data: pokemons,
							next: String(next).split('offset=')[1].split('&')[0]
						};
					});
			})
			.then(pokemons => {
				return pokemons;
			});
	};

	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = useInfiniteQuery('pokemons', fetchPokemons, {
		getNextPageParam: (lastPokemon, pages) => lastPokemon.next
	});

	React.useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView]);

	return status === 'loading' ? (
		<p>Loading...</p>
	) : (
		<ResponsiveContainer>
			<styles.PokedexContainer>
				<styles.CardsWrapper>
					{console.log(data)}
					{data.pages.map((group, i) => (
						<React.Fragment key={i}>
							{group.data.map((pokemon, j) => (
								<Card
									key={Number(group.next) - 19 + j}
									name={pokemon.name}
									types={pokemon.types}
									index={Number(group.next) - 19 + j}
								/>
							))}
						</React.Fragment>
					))}
					<div ref={ref}>
						{isFetchingNextPage
							? 'Loading more...'
							: hasNextPage
							? 'Load More'
							: 'Nothing more to load'}
					</div>
					<div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
				</styles.CardsWrapper>
			</styles.PokedexContainer>
		</ResponsiveContainer>
	);
}
