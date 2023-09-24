import {MonthProps} from './Month';

export function displayMoney(amount: number): string {
	return amount.toLocaleString('de-DE', {
		style: 'currency',
		currency: 'EUR',
	});
}

export function displayMoneyWithSign(amount: number): string {
	return amount.toLocaleString('de-DE', {
		style: 'currency',
		currency: 'EUR',
		signDisplay: 'exceptZero',
	});
}

export function remainingDaysInCurrentMonth(): number {
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate() - now.getDate();
}

/**
 * Checks if the given month, in format month long, year numeric ("April 2020"), is the current month.
 */
export function isCurrentMonth(month: MonthProps['month']): boolean {
	return month === new Intl.DateTimeFormat('de-DE', {
		month: 'long',
		year: 'numeric',
	}).format(new Date());
}
