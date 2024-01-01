type AutonomousProps = {
	data: {
		autonBackstagePixels: number;
		autonBackdropPixels: number;
		teamProp1: string;
		teamProp2: string;
		purple1: string;
		purple2: string;
		yellow1: string;
		yellow2: string;
		navigated1: string;
		navigated2: string;
	};
	setData: Function;
};

const Autonomous = ({ data, setData }: AutonomousProps) => {
	return (
		<>
			<h2 className="text-2xl font-black">Autonomous</h2>
			<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0 mb-2">
				{/* autonomous backstage pixels */}
				<div className="space-y-2 md:w-56">
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Backstage Pixels</h3>
						<div>
							<input
								value={data.autonBackstagePixels}
								onChange={(e) =>
									setData({
										...data,
										autonBackstagePixels:
											e.target.value == "" ? 0 : parseInt(e.target.value),
									})
								}
								min={0}
								max={100}
								className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
								type="number"
							/>
							<button
								onClick={() =>
									setData({
										...data,
										autonBackstagePixels: data.autonBackstagePixels + 1,
									})
								}
								className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 "
							>
								+
							</button>
							<button
								onClick={() =>
									setData({
										...data,
										autonBackstagePixels: data.autonBackstagePixels - 1,
									})
								}
								className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg"
							>
								-
							</button>
						</div>
					</div>
				</div>

				{/* autonomous backdrop pixels */}
				<div className="space-y-2 md:w-56">
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Backdrop Pixels</h3>
						<div>
							<input
								value={data.autonBackdropPixels}
								onChange={(e) =>
									setData({
										...data,
										autonBackdropPixels:
											e.target.value == "" ? 0 : parseInt(e.target.value),
									})
								}
								min={0}
								max={100}
								className="border-2 border-r-0 bg-gray-700 rounded-l-lg without-ring p-2"
								type="number"
							/>
							<button
								onClick={() =>
									setData({
										...data,
										autonBackdropPixels: data.autonBackdropPixels + 1,
									})
								}
								className="transition text-base font-bold border-2 border-r-0 hover:bg-gray-700 active:bg-gray-800 p-2 "
							>
								+
							</button>
							<button
								onClick={() =>
									setData({
										...data,
										autonBackdropPixels: data.autonBackdropPixels - 1,
									})
								}
								className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg"
							>
								-
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
				{/* autonomous robot 1 inputs */}
				<div className="space-y-2 md:w-56">
					{/* robot 1 team prop */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 1 Team Prop</h3>
						<div>
							<button
								onClick={() => setData({ ...data, teamProp1: "white" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.teamProp1 == "white"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								White Pixel
							</button>
							<button
								onClick={() => setData({ ...data, teamProp1: "prop" })}
								className={`transition text-base font-bold border-2 ${
									data.teamProp1 != "white"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Team Prop
							</button>
						</div>
					</div>

					{/* robot 1 purple pixel */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 1 Purple Pixel</h3>
						<div>
							<button
								onClick={() => setData({ ...data, purple1: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.purple1 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, purple1: "spike" })}
								className={`transition text-base font-bold border-2 ${
									data.purple1 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Spike Mark
							</button>
						</div>
					</div>

					{/* robot 1 yellow pixel */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 1 Yello Pixel</h3>
						<div>
							<button
								onClick={() => setData({ ...data, yellow1: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.yellow1 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, yellow1: "backdrop" })}
								className={`transition text-base font-bold border-2 ${
									data.yellow1 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Backdrop
							</button>
						</div>
					</div>

					{/* robot 1 navigated */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 1 Navigated</h3>
						<div>
							<button
								onClick={() => setData({ ...data, navigated1: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.navigated1 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, navigated1: "yes" })}
								className={`transition text-base font-bold border-2 ${
									data.navigated1 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Yes
							</button>
						</div>
					</div>
				</div>

				{/* autonomous robot 2 inputs */}
				<div className="space-y-2 md:w-56">
					{/* robot 2 team prop */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 2 Team Prop</h3>
						<div>
							<div>
								<button
									onClick={() => setData({ ...data, teamProp2: "white" })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.teamProp2 == "white"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									White Pixel
								</button>
								<button
									onClick={() => setData({ ...data, teamProp2: "prop" })}
									className={`transition text-base font-bold border-2 ${
										data.teamProp2 != "white"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									Team Prop
								</button>
							</div>
						</div>
					</div>

					{/* robot 2 purple pixel */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 2 Purple Pixel</h3>
						<div>
							<button
								onClick={() => setData({ ...data, purple2: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.purple2 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, purple2: "spike" })}
								className={`transition text-base font-bold border-2 ${
									data.purple2 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Spike Mark
							</button>
						</div>
					</div>

					{/* robot 2 yellow pixel */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 2 Yello Pixel</h3>
						<div>
							<button
								onClick={() => setData({ ...data, yellow2: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.yellow2 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, yellow2: "backdrop" })}
								className={`transition text-base font-bold border-2 ${
									data.yellow2 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Backdrop
							</button>
						</div>
					</div>

					{/* robot 2 nagivated */}
					<div className="space-y-1">
						<h3 className="text-lg font-bold">Robot 2 Navigated</h3>
						<div>
							<button
								onClick={() => setData({ ...data, navigated2: "no" })}
								className={`transition text-base font-bold border-2 border-r-0 ${
									data.navigated2 == "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-l-lg`}
							>
								No
							</button>
							<button
								onClick={() => setData({ ...data, navigated2: "yes" })}
								className={`transition text-base font-bold border-2 ${
									data.navigated2 != "no"
										? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
										: "hover:bg-gray-700 active:bg-gray-800"
								} p-2 rounded-r-lg`}
							>
								Yes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Autonomous;
