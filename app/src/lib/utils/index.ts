export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('hr-HR', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}
