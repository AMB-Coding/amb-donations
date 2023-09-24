import {Avatar, Badge, Box, Card, Group, Progress, Stack, Text, Title} from '@mantine/core';
import classes from './ProgressCardColored.module.css';
import {displayMoney, displayMoneyWithSign, isCurrentMonth, remainingDaysInCurrentMonth} from './helpers';
import {Donator} from './Donator';

export type MonthProps = {
	month: string;
	expenses: number;
	costs: number;
	acquired: number;
	donors: string[];
}

export function Month(props: MonthProps) {
	const {month, costs, acquired, donors} = props;

	const currentMonth = isCurrentMonth(month);
	const diff = acquired - costs;
	return <>
		{(month.startsWith('Dezember') || currentMonth) &&
            <Title>{month.substring(month.length - 4)}</Title>
		}
		<Card withBorder radius="md" p="xl" className={classes.card}>
			<Stack>
				<Box>
					<Group justify={'space-between'}>
						<Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
							{month}
						</Text>
						{currentMonth &&
                            <Badge size="sm">Noch {remainingDaysInCurrentMonth()} Tage</Badge>
						}
					</Group>
					<Group>
						<Text fz="lg" fw={500} className={classes.stats}>
							{displayMoney(acquired)} / {displayMoney(costs)}
						</Text>
						<Text c={diff > 0 ? 'teal' : 'red'} fz="sm" fw={500}
							  className={classes.diff}>{displayMoneyWithSign(diff)}</Text>
					</Group>
				</Box>
				<Progress
					value={costs > 0 ? acquired / costs * 100 : 100}
					size="lg"
					radius="xl"
					animated={currentMonth}
				/>
				<Group justify={'space-between'}>
					<Avatar.Group>
						{donors.map((donor) => <Donator key={donor} id={donor}/>)}
					</Avatar.Group>
				</Group>
			</Stack>

		</Card>
	</>;
}
