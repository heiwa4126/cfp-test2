import { NavLink, Outlet, Route, Routes } from "react-router";
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

function Layout1() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}

function App() {
	return (
		<Routes>
			<Route element={<Layout1 />}>
				<Route index path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
