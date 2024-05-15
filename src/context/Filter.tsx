import { FC, ReactNode, createContext, useState } from "react";
import data from '../assets/data.json';

export type City = {
	name: string;
	continent: string;
	active: boolean;
	country: string;
	description: string;
	image: string;
	coords: {
		lat: number;
		lng: number;
	};
};
type FilterContextInitialStateType = {

	cities: City[]
	setCities: React.Dispatch<React.SetStateAction<City[]>>
	search: string | undefined;
	searchResult: City[] | undefined,
	setSearchResult: React.Dispatch<React.SetStateAction<City[] | undefined>>
	setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
	continent: string | undefined;
	setContinent: React.Dispatch<React.SetStateAction<string | undefined>>;
	sort: {
		name: boolean;
		distance: boolean;
	} | undefined;
	setSort: React.Dispatch<React.SetStateAction<{
		name: boolean;
		distance: boolean;
	} | undefined>>;
	units: {
		celsius: boolean;
		fahrenheit: boolean;
	} | undefined;
	setUnits: React.Dispatch<React.SetStateAction<{
		celsius: boolean;
		fahrenheit: boolean;
	} | undefined>>;
}

type FilterContextProviderProps = {
	children: ReactNode;
};

export const FilterContext = createContext<FilterContextInitialStateType | undefined>(undefined);

export const FilterContextProvider: FC<FilterContextProviderProps> = ({ children }) => {
	const [search, setSearch] = useState<string | undefined>(undefined);
	const [continent, setContinent] = useState<string | undefined>(undefined);
	const [sort, setSort] = useState<{ name: boolean, distance: boolean } | undefined>({ distance: false, name: true });
	const [units, setUnits] = useState<{ celsius: boolean, fahrenheit: boolean } | undefined>(undefined);
	const [cities, setCities] = useState<City[]>(data.cities)
	const [searchResult, setSearchResult] = useState<City[]>()
	console.log("🚀 ~ searchResult:", searchResult)

	const state = { search, setSearch, continent, setContinent, sort, setSort, units, setUnits, cities, setCities, searchResult, setSearchResult };


	return (
		<FilterContext.Provider value={state}>
			{children}
		</FilterContext.Provider>
	);
}
