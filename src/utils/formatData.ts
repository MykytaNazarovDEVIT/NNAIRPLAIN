const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export const formatDate = (dateString: string) => {
	const date = new Date(dateString)
	const dayOfWeek = daysOfWeek[date.getDay()]
	const monthName = months[date.getMonth()]

	return { dayOfWeek, monthName }
}
