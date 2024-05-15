import data from '../assets/data.json'
export async function loader({ params }) {
	const city = getCity(params.city)
	return { city }
}

const getCity = (cityName: string) => {
	const city = data.cities.find(city => city.name === cityName)
	if (city) {
		return city
	}
}
