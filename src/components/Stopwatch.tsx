"use client";

import { useState, useEffect } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [ticking, setTicking] = useState(false);

	const toggleTicking = () => {
		setTicking(!ticking);
	};

	const resetTimer = () => {
		setTime(0);
	};

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (ticking) {
				setTime(time + 1);
			} else {
				clearInterval(myInterval);
			}
		}, 1000);
		return () => {
			clearInterval(myInterval);
		};
	});

	const formatTime = (secs: number) => {
		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	return (
		<div className="space-y-1">
			<h2 className="text-xs tracking-widest uppercase text-gray-400 leading-none font-black text-center">
				stopwatch
			</h2>
			<h3 className="text-4xl leading-none font-black text-center">
				{formatTime(time)}
			</h3>
			<div className="flex space-x-2">
				<button
					className="transition bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-2 rounded-lg"
					onClick={toggleTicking}
				>
					{ticking ? "Stop" : "Start"}
				</button>
				<button
					className="transition bg-gray-600 hover:bg-gray-700 active:bg-gray-800 px-2 rounded-lg"
					onClick={resetTimer}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Stopwatch;
