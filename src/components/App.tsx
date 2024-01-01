"use client";

import { useState } from "react";
import Autonomous from "./Autonomous";

const App = () => {
	const defaults = {
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
	};

	const [data, setData] = useState(defaults);

	const calculcateScore = () => {
		let score = 0;
		score += data.autonBackstagePixels * 3;
		score += data.autonBackdropPixels * 5;
		score += data.purple1 == "no" ? 0 : data.teamProp1 == "white" ? 10 : 20;
		score += data.yellow1 == "no" ? 0 : data.teamProp1 == "white" ? 10 : 20;
		score += data.purple2 == "no" ? 0 : data.teamProp2 == "white" ? 10 : 20;
		score += data.yellow2 == "no" ? 0 : data.teamProp2 == "white" ? 10 : 20;
		score += data.navigated1 == "no" ? 0 : 5;
		score += data.navigated2 == "no" ? 0 : 5;
		return score;
	};

	const reset = () => {
		setData(defaults);
	};

	return (
		<>
			<div className="lg:flex justify-between space-y-4 md:space-y-0 mt-4">
				<div className="md:p-4 rounded-lg">
					<Autonomous data={data} setData={setData} />
				</div>

				<div className="md:p-4 rounded-lg">
					<h2 className="text-2xl font-black">Driver Controlled & Endgame</h2>
					<div className="space-y-2">
						<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Backstage Pixels</h3>
									<div>
										<input
											min={0}
											max={100}
											className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
											type="number"
										/>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											+
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											-
										</button>
									</div>
								</div>
							</div>

							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Backdrop Pixels</h3>
									<div>
										<input
											min={0}
											max={100}
											className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
											type="number"
										/>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											+
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											-
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Mosaics</h3>
									<div>
										<input
											min={0}
											max={100}
											className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
											type="number"
										/>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											+
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											-
										</button>
									</div>
								</div>
							</div>

							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Highest Set Line</h3>
									<div>
										<input
											min={0}
											max={3}
											className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
											type="number"
										/>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											+
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											-
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Robot 1 Drone Zone</h3>
									<div>
										<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
											No Drone
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											1
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											2
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											3
										</button>
									</div>
								</div>
							</div>

							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Robot 2 Drone Zone</h3>
									<div>
										<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
											No Drone
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											1
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											2
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											3
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Robot 1 Location</h3>
									<div>
										<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
											No
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											Backstage
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											Rigging
										</button>
									</div>
								</div>
							</div>

							<div className="space-y-2 md:w-56">
								<div className="space-y-1">
									<h3 className="text-lg font-bold">Robot 2 Location</h3>
									<div>
										<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
											No
										</button>
										<button className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 ">
											Backstage
										</button>
										<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
											Rigging
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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
