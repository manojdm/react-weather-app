import axios from "axios";
import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const CityDetails = () => {
	const cityName = useParams().id;
	const [weatherDetails, setWeatherDetails] = useState(null);

	useEffect(() => {
		loadWeatherDetails();
	}, []);

	const loadWeatherDetails = async () => {
		const apiKey = env?.API_KEY
			? env?.API_KEY
			: "754488369154e87302c26acf560ba9b9";

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

		try {
			const { data } = await axios.get(url);
			if (data) {
				setWeatherDetails(data);
				console.log(weatherDetails);
			}
		} catch (e) {
			return <div>e.message</div>;
		}
	};

	return (
		<div>
			{weatherDetails ? (
				<div id="city-name">
					<h2 className="text-lg text-center font-semibold">
						{weatherDetails?.name}
					</h2>
					<ul className="text-left pt-4 pb-4">
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Temperature:</span>&nbsp;{" "}
							{weatherDetails?.main?.temp} °F
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Temperature Max:</span>&nbsp;{" "}
							{weatherDetails?.main?.temp_max} °F
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Temperature Min:</span>&nbsp;{" "}
							{weatherDetails?.main?.temp_min} °F
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Feels Like:</span>&nbsp;{" "}
							{weatherDetails?.main?.feels_like} °F
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Humidity:</span>&nbsp;{" "}
							{weatherDetails?.main?.humidity} g/Kg
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Pressure:</span>&nbsp;{" "}
							{weatherDetails?.main?.pressure} psi
						</li>
						<li className="block w-full pt-4 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
							<span className="font-semibold">Wind Speed:</span>&nbsp;{" "}
							{weatherDetails?.wind?.speed} m/s
						</li>
					</ul>
					<div className="text-center mt-0">
						<Link
							to="/"
							class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							HOME
						</Link>
					</div>
				</div>
			) : (
				<p>Please check the url</p>
			)}
		</div>
	);
};

export default CityDetails;
