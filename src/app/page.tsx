import Stopwatch from "@/components/Stopwatch";
import Timer from "@/components/Timer";

export default function Home() {
	return (
		<div className="p-8">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl font-black">FTC CENTERSTAGE℠ Scorer</h1>
				<div className="flex space-x-4 items-center">
					<Timer />
					<div className="border-r-2 h-20" />
					<Stopwatch />
				</div>
			</div>
		</div>
	);
}
