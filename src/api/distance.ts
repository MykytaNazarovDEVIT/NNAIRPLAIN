import { City } from '../context/Filter'

export const getDistance = async (places: City[]) => {
	const coords = places.map(city => {
		return { name: `${city.coords.lat},${city.coords.lng}` }
	})

	try {
		const url = 'https://distanceto.p.rapidapi.com/distance/route'
		const options = (coord: { name: string }) => {
			return {
				method: 'POST',
				params: { flight: 'true' },
				headers: {
					'content-type': 'application/json',
					'X-RapidAPI-Key':
						'c4c1023954msh868e262e311caddp1734a3jsn0cbd580015a4',
					'X-RapidAPI-Host': 'distanceto.p.rapidapi.com',
				},
				body: JSON.stringify({
					route: [coord, { name: '32.109333,34.855499' }],
				}),
			}
		}

		const pr = coords.map(coord => {
			return fetch(url, options(coord))
		})
		const delay = (ms: number) =>
			new Promise(resolve => setTimeout(resolve, ms))

		const prWithInterval = async () => {
			const result = []
			for (const request of pr) {
				const response = await request
				result.push(response)
				// Add a delay between requests (e.g., 1000 ms = 1 second)
				await delay(1000) // Adjust the delay time as needed
			}
			return result
		}

		const toTel = await prWithInterval()

		const data = await Promise.all(
			toTel.map(async data => {
				return await data.json()
			})
		)
		if (data) {
			return data
		}
	} catch (error) {
		console.error('Error:', error)
	}
}
