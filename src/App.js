import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'global/variables';
import { AppRoutes } from './AppRoutes';

const queryClient = new QueryClient();

function App() {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default App;
