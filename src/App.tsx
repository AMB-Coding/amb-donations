import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {Donations} from './Donations';

export function App() {
	return <MantineProvider defaultColorScheme={'auto'}><Donations/></MantineProvider>;
}
