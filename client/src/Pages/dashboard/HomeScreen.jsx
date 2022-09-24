import React from "react";
// import Footer from "./test/footer/Footer";
// import Navigation from "./Navbar/Navigation";
import "./HomeScreen.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Feature from "../../components/Feature/Feature";
import Chart from "../../components/Chart/Chart";
import Footer from "../../components/Footer/Footer";

const HomeScreen = () => {
	return (
		<React.Fragment>
			<div id="Home" className="gridContainer">
				<Sidebar className="aside" />
				<Navbar className="header" />

				<main className="mainContainer main">
					<section className="widgets ">
						<Widget type="profit" className="card" />
						<Widget type="order" className="card" />
						<Widget type="customer" className="card" />

						{/* <p style={{ color: "red", background: "blue" }}>
							<li>Top selling product</li>
						</p> */}
					</section>
					<section className="charts bg-primary">
						<Feature />
						<p>sales report</p>

						<Chart />
					</section>
					<section className="" style={{ background: "rgb(100,200,100)" }}>
						<p>active users</p>
						<p>upcoming events </p>
						<p>popular categories</p>
					</section>
					<section style={{ background: "rgb(100,200,100)" }}>
						<p>recent orders</p>
						<p>city order statistics</p>
					</section>

					{/* create to TOP button */}
				</main>
			</div>
		</React.Fragment>
	);
};

export default HomeScreen;
