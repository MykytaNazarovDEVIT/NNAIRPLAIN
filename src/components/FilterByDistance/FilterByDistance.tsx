import useFilters from "../../hooks/useFilters"

const FilterByDistance = () => {
	const { setSort, cities, setCities, setSearchResult, searchResult } = useFilters()

	// const sortedDistances = distance.map(d => {
	// 	return {
	// 		distance: d.route.vincenty,
	// 		coordinates: d.points[0].geometry.coordinates
	// 	}
	// }).sort((a, b) => a.distance - b.distance);

	// const sortedStyesByDistance = sortedDistances.map(sorted => {
	// 	return cities.find(city => {
	// 		return city.coords.lat === sorted.coordinates[1] && city.coords.lng === sorted.coordinates[0];
	// 	});
	// }) as City[]


	const handleSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === "distance") {

			// const data = await getDistance(cities)
			const sortedByDistance = cities.sort((b, a) => a.coords.lat - b.coords.lat)
			if (sortedByDistance) {
				if (searchResult && searchResult.length > 0) {
					const sortedByDistance = searchResult.sort((b, a) => a.coords.lat - b.coords.lat)
					setSearchResult(sortedByDistance)
				} else {
					setCities(sortedByDistance)

				}
			}
		} else {
			const sortedByName = cities.sort((a, b) => a.name.localeCompare(b.name));
			if (sortedByName) {
				if (searchResult && searchResult.length > 0) {
					const sortedByName = searchResult.sort((a, b) => a.name.localeCompare(b.name));
					setSearchResult(sortedByName)
				} else {
					setCities(sortedByName)
				}
			}
		}
		setSort({ distance: e.target.value === "distance" ? true : false, name: e.target.value === "name" ? true : false })
	}
	return <div className="inline-flex gap-2 ">
		<label htmlFor="" className="pl-2 border-[#254f6552] bg-white p-4 border-2 rounded-md font-semibold">Attributes</label>
		<select className="hover:border-[#254f65] pl-2 p-4 border-2 rounded-md font-semibold" name="" id="" onChange={handleSort}>
			<option value="name">Name</option>
			<option value="distance">Distance</option>
		</select>
	</div>

}

export default FilterByDistance