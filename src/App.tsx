import { useEffect, useState } from 'react';
import { ImAirplane } from 'react-icons/im';
import { Link, Outlet } from 'react-router-dom';
import CityCard from './components/CityCard/CityCard';
import FilterByDistance from './components/FilterByDistance/FilterByDistance';
import FilterTemperature from './components/FilterTemperature/FilterTemperature';
import Pagination from './components/Pagination/Pagination';
import SearchInput from './components/SearchInput/SearchInput';
import SelectContinent from './components/SelectContinent/SelectContinent';
import { City } from './context/Filter';
import useFilters from './hooks/useFilters';

function App() {
  const { cities, searchResult, continent, sort } = useFilters();
  const [currentPage, setCurrentPage] = useState(1);
  const [citiesPerPage, setCitiesPerPage] = useState(15);
  const [filteredCities, setFilteredCities] = useState<City[]>(cities)
  useEffect(() => {
    const data = searchResult ? searchResult.filter(city => city.active).filter(city => { return continent ? city.continent === continent : city }) : cities.filter(city => city.active).filter(city => { return continent ? city.continent === continent : city })
    setFilteredCities(data)
  }, [cities, searchResult, continent, sort])

  const indexOfLastCity = currentPage * citiesPerPage;
  const indexOfFirstCity = indexOfLastCity - citiesPerPage;
  const currentCities = filteredCities.slice(indexOfFirstCity, indexOfLastCity);

  const handelCitiesPerPage = (value: string) => {
    setCitiesPerPage(parseInt(value))
  }
  useEffect(() => {
    if (currentCities.length <= 0) {
      const page = Math.ceil(filteredCities.length / citiesPerPage)
      setCurrentPage(page)
    }
  }, [currentCities, citiesPerPage, filteredCities.length])
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className=' bg-[#efefef] min-h-screen'>
      <header onClick={scrollToTop} className='shadow-md shadow-[#476778f7] fixed z-10 w-full gap-4 p-4 bg-[#254f65] inline-flex items-center'><ImAirplane className='w-12 h-12 fill-sky-100' /> <Link to={"/"}>
        <p className='text-2xl font-extrabold text-sky-100'>
          NNAIR
        </p>
      </Link></header>
      <main className='flex p-4 pt-[80px] w-full justify-center  flex-col'>
        <div className='flex flex-col w-full'>
          <div className='flex gap-5'>
          </div>
          <p id="#" className='pt-6 pb-4 font-medium text-xl'>Search Parameters</p>
          <div className='w-full items-center  flex  justify-between sm:flex-col md:flex-col  flex-col lg:flex-row'>
            <SearchInput />
            <div className='gap-2    pt-2 lg:pt-0 w-full justify-end flex sm:flex-row flex-col '>
              <SelectContinent cities={cities} />
              <FilterByDistance />
              <FilterTemperature />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {currentCities.map((city, i) => <>
            <Link to={`/${city.name}`} className='flex'><CityCard key={i} city={city} /></Link>
          </>)}
        </div>
        <div className='inline-flex w-full pt-5 justify-between'>
          <div className='opacity-0'>
            #
          </div>
          <div className='inline-flex '>

            <Pagination
              citiesPerPage={citiesPerPage}
              totalCities={filteredCities.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
          <div className='inline-flex justify-end'>
            <select className='hover:border-[#254f65] w-fit pl-2 p-[15px] border-2 rounded-md font-semibold' onChange={(e) => handelCitiesPerPage((e.target.value))} name="changeCitiesAmount" id="changeCitiesAmount" defaultValue={"15"}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>

        </div>

        <Outlet />
      </main>
    </section>
  );
}

export default App;
