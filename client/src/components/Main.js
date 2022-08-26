import React from "react";
import Footer from "./footer/Footer";
import Navigation from "./Navbar/Navigation";

import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
	return (
		<React.Fragment>
			<section className="w-100 vh-50">
				<nav>
					<Navigation />
				</nav>
				<aside>
					<Sidebar />
				</aside>

				<footer>
					<Footer />
				</footer>
			</section>
		</React.Fragment>
	);
};

export default Main;
