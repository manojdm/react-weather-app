import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchComponent from "./Components/SearchComponent";
import CityDetails from "./Components/WeatherDetails";

function App() {
	return (
		<>
			<div className="flex justify-center items-center flex-col w-screen h-screen text-lg	font-bold">
				<h1>Weather App</h1>
				<div className="max-w-sm rounded overflow-hidden shadow-lg h-96 w-96 p-8">
					<Router>
						<Routes>
							<Route path="/" element={<SearchComponent />} />
							<Route path="/city/:id" element={<CityDetails />} />
						</Routes>
					</Router>
				</div>
			</div>
		</>
	);
}

export default App;
