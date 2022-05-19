import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'global/variables';
import { AppRoutes } from './AppRoutes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
