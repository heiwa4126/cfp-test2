import { Link, NavLink, Outlet, Route, Routes } from "react-router";
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

function NotFound() {
	return (
		<main>
			<h1>404</h1>
			<p className="read-the-docs">Not Found</p>
			<p>
				<Link to="/">Home</Link>
			</p>
		</main>
	);
}

function App() {
	return (
		<Routes>
			<Route element={<Layout1 />}>
				<Route index path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
