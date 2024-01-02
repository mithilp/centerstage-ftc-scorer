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

			<div className="mt-8 md:mt-16 mb-16 md:mb-0 flex flex-col md:flex-row justify-between">
				<p>
					Made with love ❤️ by{" "}
					<a
						target="_blank"
						href="https://www.linkedin.com/in/mithil-patil/"
						className="underline"
					>
						Mithil Patil
					</a>
				</p>

				<div className="space-x-2">
					<a
						target="_blank"
						href="https://github.com/mithilp/centerstage-ftc-scorer"
						className="underline"
					>
						Contribute on GitHub
					</a>
					<a
						target="_blank"
						href="https://github.com/mithilp/centerstage-ftc-scorer/issues/new"
						className="underline"
					>
						Report a Bug
					</a>
				</div>
			</div>
		</div>
	);
}
