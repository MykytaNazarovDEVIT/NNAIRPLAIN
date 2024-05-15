import { FC } from 'react';
import { FaCloudShowersHeavy } from 'react-icons/fa';
import { formatDate } from '../../utils/formatData';

export type WeatherType = {
	weather: {
		daily_units: {
			rain_sum: string;
			showers_sum: string;
			temperature_2m_max: string,
			temperature_2m_min: string,
		};
		daily: {
			time: string[];
			temperature_2m_max: number[];
			temperature_2m_min: number[];
			rain_sum: number[];
			showers_sum: number[];
			snowfall_sum: number[];
		};
	}

	index: number
};

const WeatherCard: FC<WeatherType> = ({ weather, index }) => {

	const { dayOfWeek } = formatDate(weather.daily.time[index]);
	const temperatureMax = weather.daily.temperature_2m_max[index];
	const temperatureMin = weather.daily.temperature_2m_min[index];
	const rainSum = weather.daily.rain_sum[index];
	const date = new Date(weather.daily.time[index]);

	const currentDate = new Date();


	const isCurrentDay = date.getDate() === currentDate.getDate() &&
		date.getMonth() === currentDate.getMonth() &&
		date.getFullYear() === currentDate.getFullYear();


	let backgroundColor = '';
	if (temperatureMax < 10 && weather.daily_units.temperature_2m_min === "°C") {
		backgroundColor = '#298fb1';
	} else if (temperatureMax > 29 && weather.daily_units.temperature_2m_min === "°C") {
		backgroundColor = '#a70d1c';
	} else {
		backgroundColor = '#2b5710';
	}
	if (temperatureMax < 50) {
		backgroundColor = '#298fb1';
	} else if (temperatureMax > 84 && weather.daily_units.temperature_2m_min === "°F") {
		backgroundColor = '#a70d1c';
	} else {
		backgroundColor = '#2b5710';
	}
	return (
		<div className={`flex flex-col gap-6 rounded-md  w-full sm:w-[180px] `} >

			<div style={{ backgroundColor }} className={`w-full flex relative justify-center p-4 rounded-tr-md rounded-tl-md  ${isCurrentDay && "border-t-[2px]"} border-yellow-300`}>

				<p className='inline-flex text-base justify-between gap-2 font-semibold text-[#dde2d6]'>{dayOfWeek} <p className='inline-flex '>{temperatureMax}/{temperatureMin}{weather.daily_units.temperature_2m_min}</p></p>
			</div>
			<div className='flex items-center justify-center'>
				<p className='text-white font-medium text-5xl'>
					{temperatureMax}
				</p>
			</div>
			<div className='inline-flex items-center gap-5 w-full justify-center'><FaCloudShowersHeavy />  <p>
				{rainSum}mm
			</p> </div>
		</div>
	);
};

export default WeatherCard;
