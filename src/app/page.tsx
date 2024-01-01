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
		</div>
	);
}
