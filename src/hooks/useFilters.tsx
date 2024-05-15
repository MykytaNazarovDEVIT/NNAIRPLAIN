import { useContext } from 'react';
import { FilterContext } from '../context/Filter';

const useFilters = () => {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilters must be used within a FilterContextProvider");
	}
	return context;
};


export default useFilters