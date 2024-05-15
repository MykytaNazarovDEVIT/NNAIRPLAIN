import { City } from '../../context/Filter';
import useFilters from '../../hooks/useFilters';

const SelectContinent = ({ cities }: { cities: City[] }) => {
	const { setContinent } = useFilters()
	const continentsUniq = Array.from(new Set(cities.map(city => city.continent)));
	const continents = ['Select continent', "Worldwide", ...continentsUniq]



	return (
		<>
			{continents && <select className='hover:border-[#254f65] pl-2 p-4 border-2 rounded-md font-semibold' defaultValue="Select continent" onChange={(e) => setContinent(e.target.value)}> {continents.map((continent, i) => <>

				<option className='p-2 bg-slate-50' hidden={i === 0} value={i === 1 ? '' : continent}>{continent}</option>
			</>
			)}</select>}
		</>

	)
}

export default SelectContinent