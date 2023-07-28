import axios from "axios";
import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { Link } from "react-router-dom";

const SearchComponent = () => {
	const [searchValue, setSearchValue] = useState("");
	const [cityResults, setCityResults] = useState([]);

	useEffect(() => {
		updateCities();
	}, [searchValue]);

	const updateCities = async () => {
		const apiKey = env?.API_KEY;

		console.log(apiKey);

		const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=10&appid=${apiKey}`;

		try {
			const { data } = await axios.get(url);
			if (data.length > 0) {
				setCityResults(data);
			}
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<div>
			<input
				type="search"
				id="default-search"
				value={searchValue}
				className="block w-full p-4 pl-10 border border-gray-300 text-sm text-gray-900 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search Mockups, Logos..."
				onChange={e => setSearchValue(e.target.value)}
				required
			/>
			<ul className="mt-4">
				{cityResults && cityResults.length > 0
					? cityResults.map(city => (
							<Link
								to={`/city/${city.name}`}
								class="text-gray-700 block px-4 py-2 text-sm"
								id="menu-item-2"
							>
								{city?.name}
							</Link>
					  ))
					: "Please search"}
			</ul>
		</div>
	);
};

export default SearchComponent;
