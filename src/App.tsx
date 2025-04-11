import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

function App() {
	const [name, setName] = useState("unknown");

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>
				Vite + React + TS
				<br />
				on Cloudflare Pages
			</h1>
			<div className="card">
				<Counter />
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<div className="card">
				<button
					type="button"
					onClick={() => {
						fetch("/api/hello")
							.then((res) => res.json() as Promise<{ message: string }>)
							.then((data) => setName(data.message));
					}}
					aria-label="get name"
				>
					Name from API is: {name}
				</button>
				<p>
					Edit <code>functions/api/hello.js</code> to change the name
				</p>
			</div>

			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
