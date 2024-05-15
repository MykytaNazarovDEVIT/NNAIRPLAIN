import React from 'react';
import useFilters from '../../hooks/useFilters';

const SearchInput: React.FC = () => {
	const { search, setSearch, cities, setSearchResult } = useFilters();


	const handleSearch = (value: string) => {
		setSearch(value)
		const filteredCities = cities.filter(city => {
			return city.name.toLowerCase().includes(value.toLowerCase()) ||
				city.country.toLowerCase().includes(value.toLowerCase());
		});
		if (filteredCities.length > 0) {
			setSearchResult(filteredCities);
		}
	}
	return (
		<input
			type="text"
			value={search}
			onChange={(e) => handleSearch(e.target.value)}
			className="hover:border-[#254f65] w-full sn:w-full sm:w-full lg:w-2/3 pl-2 p-4 border-2 rounded-md font-semibold"
			placeholder="Search for a city..."
		/>
	);
}

export default SearchInput;