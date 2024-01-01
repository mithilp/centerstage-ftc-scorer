type DriverControlledProps = {
	data: {
		backstagePixels: number;
		backdropPixels: number;
		mosaics: number;
		highLine: number;
		drone1: number;
		drone2: number;
		location1: string;
		location2: string;
	};
	setData: Function;
};

const DriverControlled = ({ data, setData }: DriverControlledProps) => {
	return (
		<>
			<h2 className="text-2xl font-black">Driver Controlled & Endgame</h2>
			<div className="space-y-2">
				{/* driver controlled backstage and backdrop pixels */}
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
					{/* driver controlled backstage pixels */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Backstage Pixels</h3>
							<div>
								<input
									value={data.backstagePixels}
									onChange={(e) =>
										setData({
											...data,
											backstagePixels:
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
											backstagePixels: data.backstagePixels + 1,
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
											backstagePixels: data.backstagePixels - 1,
										})
									}
									className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg"
								>
									-
								</button>
							</div>
						</div>
					</div>

					{/* driver controlled backdrop pixels */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Backdrop Pixels</h3>
							<div>
								<input
									value={data.backdropPixels}
									onChange={(e) =>
										setData({
											...data,
											backdropPixels:
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
											backdropPixels: data.backdropPixels + 1,
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
											backdropPixels: data.backdropPixels - 1,
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

				{/* driver controlled mosaics and set line */}
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
					{/* driver controlled mosaics */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Mosaics</h3>
							<div>
								<input
									value={data.mosaics}
									onChange={(e) =>
										setData({
											...data,
											mosaics:
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
											mosaics: data.mosaics + 1,
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
											mosaics: data.mosaics - 1,
										})
									}
									className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg"
								>
									-
								</button>
							</div>
						</div>
					</div>

					{/* driver controlled set line */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Highest Set Line</h3>
							<div>
								<button
									onClick={() => setData({ ...data, highLine: 0 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.highLine == 0
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									0
								</button>
								<button
									onClick={() => setData({ ...data, highLine: 1 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.highLine == 1
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									1
								</button>
								<button
									onClick={() => setData({ ...data, highLine: 2 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.highLine == 2
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									2
								</button>
								<button
									onClick={() => setData({ ...data, highLine: 3 })}
									className={`transition text-base font-bold border-2 ${
										data.highLine == 3
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									3
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* driver controlled endgame drone zones */}
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
					{/* driver controlled robot 1 drone zone */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Robot 1 Drone Zone</h3>
							<div>
								<button
									onClick={() => setData({ ...data, drone1: 0 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone1 == 0
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									No Drone
								</button>
								<button
									onClick={() => setData({ ...data, drone1: 1 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone1 == 1
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									1
								</button>
								<button
									onClick={() => setData({ ...data, drone1: 2 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone1 == 2
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									2
								</button>
								<button
									onClick={() => setData({ ...data, drone1: 3 })}
									className={`transition text-base font-bold border-2 ${
										data.drone1 == 3
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									3
								</button>
							</div>
						</div>
					</div>

					{/* driver controlled robot 2 drone zone */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Robot 2 Drone Zone</h3>
							<div>
								<button
									onClick={() => setData({ ...data, drone2: 0 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone2 == 0
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									No Drone
								</button>
								<button
									onClick={() => setData({ ...data, drone2: 1 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone2 == 1
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									1
								</button>
								<button
									onClick={() => setData({ ...data, drone2: 2 })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.drone2 == 2
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									2
								</button>
								<button
									onClick={() => setData({ ...data, drone2: 3 })}
									className={`transition text-base font-bold border-2 ${
										data.drone2 == 3
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									3
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* driver controlled endgame robot location */}
				<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0">
					{/* driver controlled endgame robot 1 location */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Robot 1 Location</h3>
							<div>
								<button
									onClick={() => setData({ ...data, location1: "no" })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.location1 == "no"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									No
								</button>
								<button
									onClick={() => setData({ ...data, location1: "backstage" })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.location1 == "backstage"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									Backstage
								</button>
								<button
									onClick={() => setData({ ...data, location1: "rigging" })}
									className={`transition text-base font-bold border-2 ${
										data.location1 == "rigging"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									Rigging
								</button>
							</div>
						</div>
					</div>

					{/* driver controlled endgame robot 2 location */}
					<div className="space-y-2 md:w-56">
						<div className="space-y-1">
							<h3 className="text-lg font-bold">Robot 2 Location</h3>
							<div>
								<button
									onClick={() => setData({ ...data, location2: "no" })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.location2 == "no"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-l-lg`}
								>
									No
								</button>
								<button
									onClick={() => setData({ ...data, location2: "backstage" })}
									className={`transition text-base font-bold border-2 border-r-0 ${
										data.location2 == "backstage"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2`}
								>
									Backstage
								</button>
								<button
									onClick={() => setData({ ...data, location2: "rigging" })}
									className={`transition text-base font-bold border-2 ${
										data.location2 == "rigging"
											? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
											: "hover:bg-gray-700 active:bg-gray-800"
									} p-2 rounded-r-lg`}
								>
									Rigging
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DriverControlled;
