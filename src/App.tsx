import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from '@mantine/core';
import {Donations} from './Donations';

const theme = createTheme({
	colors: {
		dark: [
			'#C1C2C5',
			'#A6A7AB',
			'#909296',
			'#5c5f66',
			'#373A40',
			'#2C2E33',
			'#25262b',
			'#1A1B1E',
			'#141517',
			'#101113',
		],
	},
});

export function App() {
	return <MantineProvider defaultColorScheme={'auto'} theme={theme}><Donations/></MantineProvider>;
}
