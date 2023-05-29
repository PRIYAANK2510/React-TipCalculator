export const calculateTip = (amount, service, customer) => {
	if (
		amount === '' ||
		isNaN(amount) ||
		service === '' ||
		service === '0' ||
		!isNaN(customer) ||
		customer === ''
	) {
		return false;
	}

	return Math.round(amount * (service / 100) * 100) / 100;
};
