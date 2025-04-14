import { NavLink, Route, Routes } from "react-router";
import About from "./About";
import "./App.css";
import Home from "./Home";

export function Nav() {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	);
}

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
