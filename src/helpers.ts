export function displayMoney(amount: number) {
	return amount.toLocaleString('de-DE', {
		style: 'currency',
		currency: 'EUR',
	})
}

export function displayMoneyWithSign(amount: number) {
	return amount.toLocaleString('de-DE', {
		style: 'currency',
		currency: 'EUR',
		signDisplay: 'exceptZero',
	})
}
