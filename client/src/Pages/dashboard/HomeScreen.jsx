import React from "react";
// import Footer from "./test/footer/Footer";
// import Navigation from "./Navbar/Navigation";
import "./HomeScreen.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Feature from "../../components/Feature/Feature";
import ListProduts from "../../components/ListProduts/ListProduts";
import ListOrder from "../../components/ListOrders/ListOrder";
import MiniCalendar from "../../components/MiniCalendar/MiniCalendar";
import Categories from "../../components/Categories/Categories";

const HomeScreen = () => {
	return (
		<React.Fragment>
			<main className="col-12 w-100 flex-column bg">
				<div className="row ">
					<section className="col-8 widgets  row p-5">
						<h1 className="navbar-brand fw-bold">Overview</h1>
						<Widget type="profit" className="card" />
						<Widget type="order" className="card" />
						<Widget type="customer" className="card" />

						<div className="h-auto">
							<Feature />
						</div>
					</section>

					<section className="col-4 charts d-inline-block">
						<ListProduts />
					</section>
				</div>
				<div className="col-12 w-100 flex-column">
					<div className="row ">
						<section className="col-12 widgets  row p-5">
							<ListOrder />
						</section>
					</div>
				</div>
				<div className="col-12 w-100 flex-column pb-5">
					<div className="row ">
						<section className="col-4 flex-column d-flex">
							<p>active users</p>
						</section>

						<section className="col-4 flex-column d-flex">
							<MiniCalendar />
						</section>
						<section className="col-4 flex-column d-flex">
							<Categories />
						</section>
					</div>
				</div>
				{/* create to TOP button */}
			</main>
		</React.Fragment>
	);
};

export default HomeScreen;
