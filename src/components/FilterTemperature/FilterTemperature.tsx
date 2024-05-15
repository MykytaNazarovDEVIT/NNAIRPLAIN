import useFilters from "../../hooks/useFilters"

const FilterTemperature = () => {
	const { setUnits } = useFilters()


	const handleSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		setUnits({ celsius: e.target.value === "C", fahrenheit: e.target.value === "F" })
	}
	return (
		<div className="inline-flex gap-2 ">
			<label className="pl-2 border-[#254f6552] bg-white p-4 border-2 rounded-md font-semibold" htmlFor="">Temperature units</label>
			<select className="hover:border-[#254f65] pl-2 p-4 border-2 rounded-md font-semibold" name="" id="" onChange={handleSort}>
				<option value="C">°C</option>
				<option value="F">°F</option>
			</select>
		</div>

	)
}

export default FilterTemperature