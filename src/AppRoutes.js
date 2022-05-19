import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';

export function AppRoutes() {
	return (
		<BrowserRouter basename="/PokeDex">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
