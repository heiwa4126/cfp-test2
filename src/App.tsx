import { useState } from "react";
import "./App.css";
import cloudflareLogo from "/cloudflare.svg";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

function HelloMessage() {
	const [message, setMessage] = useState("unknown");
	return (
		<button
			type="button"
			onClick={() => {
				fetch("/api/hello")
					.then((res) => res.json() as Promise<{ message: string }>)
					.then((data) => setMessage(data.message));
			}}
			aria-label="get name"
		>
			Message from API is: {message}
		</button>
	);
}

function Cowsay() {
	const [cow, setCow] = useState("");
	return (
		<>
			<button
				type="button"
				onClick={() => {
					fetch("/api/cowsay")
						.then((res) => res.text() as Promise<string>)
						.then((data) => setCow(data));
				}}
			>
				Moo!
			</button>
			<div className="cow-container">
				<pre>{cow}</pre>
			</div>
		</>
	);
}

function App() {
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://pages.cloudflare.com/" target="_blank" rel="noreferrer">
					<img src={cloudflareLogo} className="logo cloudflare" alt="Cloudflare logo" />
				</a>
			</div>
			<h1>
				Vite + React + TS
				<br />
				on Cloudflare Pages & Functions
			</h1>
			<div className="card">
				<Counter />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<div className="card">
				<HelloMessage />
				<p>
					Edit <code>functions/api/hello.js</code> to change the message
				</p>
			</div>

			<div className="card">
				<Cowsay />
				<p>
					Edit <code>functions/api/cowsay.ts</code> to change the message
				</p>
			</div>

			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
