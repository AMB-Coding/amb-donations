import {Month} from './Month';
import {Affix, Button, Center, Stack} from '@mantine/core';
import React from 'react';
import {months} from './stats';
import {StatsSegments} from './StatsSegment';

export function Donations() {
	return <>
		<Center my={'lg'}>
			<Stack>
				<DonateButton/>
				{months.toReversed().map((month) => <Month key={month.month} {...month}/>)}

				<StatsSegments/>
			</Stack>
		</Center>
		<Affix position={{top: 20, right: 40}}>
			<DonateButton/>
		</Affix>
	</>;
}

function DonateButton() {
	return <Button
		variant="gradient"
		gradient={{from: 'teal', to: 'green', deg: 90}}
		component={'a'}
		href={'https://armamachtbock.de/spenden'}
		target={'_blank'}
	>
		Jetzt Unterstützen
	</Button>;
}
