"use client";

import { useState } from "react";
import Autonomous from "./Autonomous";
import DriverControlled from "./DriverControlled";

const App = () => {
	const defaults = {
		// autonomous defaults
		autonBackstagePixels: 0,
		autonBackdropPixels: 0,
		teamProp1: "white",
		teamProp2: "white",
		purple1: "no",
		purple2: "no",
		yellow1: "no",
		yellow2: "no",
		navigated1: "no",
		navigated2: "no",

		// driver controlled/endgame defaults
		backstagePixels: 0,
		backdropPixels: 0,
		mosaics: 0,
		highLine: 0,
		drone1: 0,
		drone2: 0,
		location1: "no",
		location2: "no",
	};

	const [data, setData] = useState(defaults);

	const calculcateScore = () => {
		let score = 0;
		// autonomous scoring
		score += data.autonBackstagePixels * 3;
		score += data.autonBackdropPixels * 5;
		score += data.purple1 == "no" ? 0 : data.teamProp1 == "white" ? 10 : 20;
		score += data.yellow1 == "no" ? 0 : data.teamProp1 == "white" ? 10 : 20;
		score += data.purple2 == "no" ? 0 : data.teamProp2 == "white" ? 10 : 20;
		score += data.yellow2 == "no" ? 0 : data.teamProp2 == "white" ? 10 : 20;
		score += data.navigated1 == "no" ? 0 : 5;
		score += data.navigated2 == "no" ? 0 : 5;
		// driver controlled/endgame scoring
		score += data.backstagePixels;
		score += data.backdropPixels * 3;
		score += data.mosaics * 10;
		score += data.highLine * 10;
		score +=
			data.drone1 == 1 ? 30 : data.drone1 == 2 ? 20 : data.drone1 == 3 ? 10 : 0;
		score +=
			data.drone2 == 1 ? 30 : data.drone2 == 2 ? 20 : data.drone2 == 3 ? 10 : 0;
		score +=
			data.location1 == "backstage" ? 5 : data.location1 == "rigging" ? 20 : 0;
		score +=
			data.location2 == "backstage" ? 5 : data.location2 == "rigging" ? 20 : 0;
		return score;
	};

	const reset = () => {
		setData(defaults);
	};

	return (
		<>
			<div className="lg:flex justify-between space-y-4 md:space-y-0 mt-8">
				<div className="rounded-lg">
					<Autonomous data={data} setData={setData} />
				</div>

				<div className="rounded-lg">
					<DriverControlled data={data} setData={setData} />
				</div>
			</div>

			<div className="mt-8 md:mt-16 mb-16 md:mb-0 flex flex-col md:flex-row justify-between">
				<p>
					Made with love ❤️ by{" "}
					<a
						href="https://www.linkedin.com/in/mithil-patil/"
						className="underline"
					>
						Mithil Patil
					</a>
				</p>

				<div className="space-x-2">
					<a
						href="https://github.com/mithilp/centerstage-ftc-scorer"
						className="underline"
					>
						Contribute on GitHub
					</a>
					<a
						href="https://github.com/mithilp/centerstage-ftc-scorer/issues/new"
						className="underline"
					>
						Report a Bug
					</a>
				</div>
			</div>

			{/* sticky footer */}
			<div className="w-screen fixed bottom-0 left-0 bg-blue-600 p-4 flex items-center space-x-4">
				<h2 className="text-2xl font-black">
					Total Score: {calculcateScore()}
				</h2>
				<button
					onClick={reset}
					className="transition text-base font-bold border-2 rounded-lg bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-2 py-1"
				>
					Reset
				</button>
			</div>
		</>
	);
};

export default App;
