import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Details } from 'pages/Details';

export function AppRoutes() {
	return (
		<BrowserRouter basename="/PokeDex">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Details/:id" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
}
