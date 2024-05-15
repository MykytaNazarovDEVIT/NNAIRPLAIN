import { FC } from "react"


export type CityCardProps = {
	city: {
		name: string,
		continent: string,
		active: boolean,
		country: string,
		description: string,
		image: string,
		coords: {
			lat: number,
			lng: number
		}
	}

}

const CityCard: FC<CityCardProps> = ({ city }) => {
	const { country, description, image, name } = city
	return (
		<div className={`hover:border-[#254f65] border-4 transition truncate sm:w-full w-full text-white bg-cover rounded-lg object-cover min-w-[200px] min-h-[250px]  `} style={{ backgroundImage: `url(${image})` }}>
			<div className=" backdrop-blur-sm h-full p-4 bg-[#254f65] bg-opacity-50">
				<p className="text-2xl pb-4">
					{name}
				</p>
				<p className="text-xl pb-4">{country}</p>
				<p className="text-pretty  ">{description}</p>
			</div>

		</div>
	)
}

export default CityCard