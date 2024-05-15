
const Pagination = ({ citiesPerPage, totalCities, paginate, currentPage }: { citiesPerPage: number, totalCities: number, paginate: (number: number) => void, currentPage: number }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCities / citiesPerPage); i++) {
		pageNumbers.push(i);
	}

	const handlePagination = (number: number) => {
		if (pageNumbers.length < 0) {
			paginate(1)
		} else {
			paginate(number)
		}
	}
	return (
		<nav className=" overflow-auto">
			<ul className='flex flex-row gap-3 overflow-auto max-w-[150px] sm:w-full scrollbar-thin'>
				{pageNumbers.length > 1 && pageNumbers.map(number => (
					<li key={number} className=' items-center justify-center min-h-[50px] min-w-[50px] flex'>
						<a onClick={() => handlePagination(number)} className={`hover:border-[#254f65]  ${currentPage === number && "bg-[#254f65] text-white"} bg-white p-4 appearance-none  h-full w-full cursor-pointer border-2 rounded-md font-semibold items-center justify-center  flex`}>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Pagination;
