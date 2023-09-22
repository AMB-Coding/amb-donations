import {Badge, Card, Group, Progress, Text, Title} from '@mantine/core';
import classes from './ProgressCardColored.module.css';
import {displayMoney, displayMoneyWithSign} from './helpers';

export type MonthProps = {
	month: string;
	expenses: number;
	costs: number;
	acquired: number;
	donations: string[];
}

export function Month(props: MonthProps) {
	const {month, costs, acquired} = props;

	const isCurrentMonth = month === new Intl.DateTimeFormat("de-DE", {
		month: "long",
		year: "numeric",
	}).format(new Date());
	const diff = acquired - costs;
	return <>
		{(month.startsWith('Dezember') || isCurrentMonth) &&
			<Title>{month.substring(month.length - 4)}</Title>
		}
		<Card withBorder radius="md" p="xl" className={classes.card}>
			<Group justify={'space-between'}>
				<Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
					{month}
				</Text>
				{isCurrentMonth &&
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
			<Progress
				value={costs > 0 ? acquired / costs * 100 : 100}
				mt="md"
				size="lg"
				radius="xl"
				classNames={{
					root: classes.progressTrack,
					section: classes.progressSection,
				}}
				animated={isCurrentMonth}
			/>
		</Card>
	</>;
}

function remainingDaysInCurrentMonth() {
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate();
}
