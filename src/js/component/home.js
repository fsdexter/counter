import React, { useEffect, useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function App() {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 10);
			}, 10);
		} else if (!timerOn) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className="Timer">
			<h2>Counter</h2>
			<div id="display">
				<FontAwesomeIcon icon={faClock} style={{ fontSize: "2em" }} />
				<span>
					{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
				</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
			</div>

			<div id="buttons">
				{!timerOn && time === 0 && (
					<button onClick={() => setTimerOn(true)}>Start</button>
				)}
				{timerOn && (
					<button onClick={() => setTimerOn(false)}>Stop</button>
				)}
				{!timerOn && time > 0 && (
					<button onClick={() => setTime(0)}>Reset</button>
				)}
				{!timerOn && time > 0 && (
					<button onClick={() => setTimerOn(true)}>Resume</button>
				)}
			</div>
		</div>
	);
}

export default App;
