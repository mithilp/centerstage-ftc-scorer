import Clock from "@/components/Clock";

export default function Home() {
	return (
		<div className="p-8">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl font-black">FTC CENTERSTAGE℠ Scorer</h1>
				<div className="flex space-x-4 items-center">
					<Clock timer />
					<div className="border-r-2 h-20" />
					<Clock stopwatch />
				</div>
			</div>

			<div className="lg:flex justify-between">
				<div className="mt-4 p-4 rounded-lg">
					<h2 className="text-2xl font-black">Autonomous</h2>
					<div className="flex space-x-4">
						<div className="space-y-2">
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

						<div className="space-y-2">
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

				<div className="mt-4 p-4 rounded-lg">
					<h2 className="text-2xl font-black">Driver-Controlled & Endgame</h2>
					<div className="flex space-x-4">
						<div className="space-y-2">
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

						<div className="space-y-2">
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
			</div>
		</div>
	);
}
