import React, { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Pokedex } from 'components/Pokedex';
import axios from 'axios';

export function Home() {
	return (
		<>
			<Header />
			<Pokedex />
		</>
	);
}
