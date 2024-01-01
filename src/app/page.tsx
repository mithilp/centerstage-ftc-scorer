import App from "@/components/App";
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

			<App />
		</div>
	);
}
