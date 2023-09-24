import {months} from './stats';
import {Box, Group, Paper, Progress, SimpleGrid, Text} from '@mantine/core';
import {displayMoney, displayMoneyWithSign} from './helpers';

const acquired = months.reduce((acc, month) => acc + month.acquired, 0);
const expenses = months.reduce((acc, month) => acc + month.expenses, 0);
const acquiredPercentage = fixFloat(acquired / expenses * 100);
const data = [
	{label: 'Spenden', count: displayMoney(acquired), part: acquiredPercentage, color: '#47d6ab'},
	{label: 'Kosten', count: displayMoney(expenses), part: fixFloat(100 - acquiredPercentage), color: '#d64747'},
];

function fixFloat(number: number) {
	return Math.round(number * 100) / 100;
}

export function StatsSegments() {
	const segments = data.map((segment) => (
		<Progress.Section value={segment.part} color={segment.color} key={segment.color}>
			{segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
		</Progress.Section>
	));

	const descriptions = data.map((stat) => (
		<Box key={stat.label} style={{borderBottomColor: stat.color}}>
			<Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
				{stat.label}
			</Text>

			<Group justify="space-between" align="flex-end" gap={0}>
				<Text fw={700}>{stat.count}</Text>
				<Text c={stat.color} fw={700} size="sm">
					{stat.part}%
				</Text>
			</Group>
		</Box>
	));

	return (
		<Paper withBorder p="md" radius="md">
			<Text fz="xl" fw={700}>
				{displayMoneyWithSign(acquired - expenses)}
			</Text>

			<Text c="dimmed" fz="sm">
				Spendenabdeckung der tatsächlichen Kosten gesamt
			</Text>

			<Progress.Root size={34} mt={40}>
				{segments}
			</Progress.Root>
			<SimpleGrid cols={{base: 1, xs: 3}} mt="xl">
				{descriptions}
			</SimpleGrid>
		</Paper>
	);
}
