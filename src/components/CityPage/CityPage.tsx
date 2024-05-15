import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, useLoaderData } from "react-router-dom";
import { City } from "../../context/Filter";
import useFilters from "../../hooks/useFilters";
import WeatherCard, { WeatherType } from "../WeatherCard/WeatherCard";
const CityPage = () => {
	const { city } = useLoaderData() as { city: City }
	const { units } = useFilters()
	const [imageLoaded, setImageLoaded] = useState(false);

	const [weather, setWeather] = useState<WeatherType>()
	useEffect(() => {
		const getWeather = async () => {
			fetch(city.image)
			const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.coords.lat}&longitude=${city.coords.lng}&forecast_days=7&daily=temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum&${units?.fahrenheit ? "temperature_unit=fahrenheit" : ''}`
			const response = await fetch(url)
			const data = await response.json()
			const { daily_units, daily } = data
			const weather = { weather: { daily_units, daily } } as WeatherType
			setWeather(weather)
		}
		getWeather()
	}, [city, units?.fahrenheit])

	const sortedTime = weather && weather.weather.daily.time.sort((a, b) => {
		const dayOfWeekA = new Date(a).getDay();
		const dayOfWeekB = new Date(b).getDay();

		const indexA = (dayOfWeekA + 6) % 7;
		const indexB = (dayOfWeekB + 6) % 7;

		return indexA - indexB;
	});
	return (
		<div className=' backdrop-blur-lg bg-[#1a2c36] bg-opacity-60  fixed top-0 left-0  flex items-center justify-center w-screen min-h-svh pt-[80px] pr-4 pl-4'>
			<div className='gap-4 flex shadow-2xl shadow-[#245e7a] justify-center items-center bg-opacity-80  bg-[#234356] rounded-md flex-col p-4'>
				<div className="w-full inline-flex justify-between " > <div>
					<p className="text-[#45abcb] font-medium">{city.country}</p>

				</div>	 <Link to={'/'} className="inline-flex items-center justify-center"><IoMdClose className="fill-red-500 w-8 h-8" /></Link></div >
				<div className="flex sm:flex-row flex-col gap-4 w-full  text-cyan-50">
					<div>
						<div className="flex flex-col items-center">
							<img
								className="rounded-md sm:max-h-[400px] max-h-[250px] object-cover "
								src={city.image}
								alt="a"
								onLoad={() => setImageLoaded(true)}
								style={{ display: imageLoaded ? 'block' : 'none' }}
							/>
							{!imageLoaded && <div className="flex items-center justify-center min-w-[500px] min-h-[500px]">Loading</div>}
						</div>
					</div>
					<div className="lg:pl-[20%] items-center justify-center">
						<p className=" text-center text-2xl font-bold pb-2">
							{city.name}
						</p>
						<div className="min-w-full h-[2px] bg-white "> </div>
						<p className="text-balance  max-w-[400px] pt-2 text-xl">{city.description}</p>
					</div>
				</div>
				<div className="grid w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  xl:grid-cols-7 pt-8 gap-8 overflow-y-auto overflow-x-hidden max-h-[250px] sm:h-full scrollbar-thin scrollbar-thumb-[#467893] scrollbar-track-[#285862]">
					{sortedTime && sortedTime.map((_, i) => <WeatherCard weather={weather.weather} index={i} />)}
				</div>
			</div >
		</div >
	)
}

export default CityPage