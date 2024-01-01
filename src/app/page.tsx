import Clock from "@/components/Clock";

export default function Home() {
	return (
		<div className="p-4 md:p-8">
			<div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
				<h1 className="text-4xl font-black hidden md:block">
					FTC CENTERSTAGE℠ Scorer
				</h1>
				<h1 className="text-4xl font-black md:hidden">CENTERSTAGE℠ Scorer</h1>
				<div className="flex space-x-4 items-center">
					<Clock timer />
					<div className="border-r-2 h-20" />
					<Clock stopwatch />
				</div>
			</div>

			<div className="lg:flex justify-between space-y-4 md:space-y-0 mt-4">
				<div className="md:p-4 rounded-lg">
					<h2 className="text-2xl font-black">Autonomous</h2>
					<div className="flex flex-col md:flex-row md:space-x-4 space-y-1 md:space-y-0 mb-2">
						<div className="space-y-2 md:w-56">
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Total Backstage Pixels</h3>
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
								<h3 className="text-lg font-bold">Total Backdrop Pixels</h3>
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
								<h3 className="text-lg font-bold">Robot 1 Team Prop</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										White Pixel
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Team Prop
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 1 Purple Pixel</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Spike Mark
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 1 Yello Pixel</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Backdrop
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 1 Navigated</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Yes
									</button>
								</div>
							</div>
						</div>

						<div className="space-y-2 md:w-56">
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 2 Team Prop</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										White Pixel
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Team Prop
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 2 Purple Pixel</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Spike Mark
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 2 Yello Pixel</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Backdrop
									</button>
								</div>
							</div>
							<div className="space-y-1">
								<h3 className="text-lg font-bold">Robot 2 Navigated</h3>
								<div>
									<button className="transition text-base font-bold border-2 border-r-0 bg-blue-600 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-l-lg">
										No
									</button>
									<button className="transition text-base font-bold border-2 hover:bg-gray-700 active:bg-gray-800 p-2 rounded-r-lg">
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
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
				<h2 className="text-2xl font-black">Total Score: 0</h2>
				<button className="transition text-base font-bold border-2 rounded-lg bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-2 py-1">
					Reset
				</button>
			</div>
		</div>
	);
}
