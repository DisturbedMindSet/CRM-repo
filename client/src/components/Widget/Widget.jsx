import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Widget.scss";

const Widget = ({ type }) => {
	let data = {};

	// temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "View all orders",
				icon: (
					<FontAwesomeIcon
						icon={faUser}
						className="icon"
						style={{
							backgroundColor: "rgba(218, 165, 32, 0.2)",
							color: "goldenrod",
						}}
					/>
				),
			};
			break;
		case "profit":
			data = {
				title: "PROFITS",
				isMoney: true,
				link: "View net PROFITS",
				icon: (
					<FontAwesomeIcon
						icon={faUser}
						className="icon"
						style={{
							backgroundColor: "rgba(0, 128, 0, 0.2)",
							color: "green",
						}}
					/>
				),
			};
			break;
		case "customer":
			data = {
				title: "Customers",
				isMoney: false,
				link: "See all Customers",
				icon: (
					<FontAwesomeIcon
						icon={faUser}
						className="icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;

		default:
			break;
	}

	return (
		<section id="widget" className=" m-0 d-flex justify-content-between widget ">
			<div className="row ">
				<div id="left" className="w-50 px-3 py-2 col-6 justify-content-between align-items-center">
					{/* d-flex flex-column justify-content-between align-items-start  */}
					<p id="title" className="pb-2 tittle fw-bold fs-6 flex-column">
						{data.title}
					</p>
					<span className="py-2 fw-bold justify-content-around flex-column">
						{data.isMoney && "$"} {amount}
					</span>
					<NavLink to="" className="nav-link justify-content flex-column">
						<p className="link-primary link">{data.link}</p>
					</NavLink>
				</div>
				<div id="right" className="py-2 position-relative w-50 ps-5  col-6 justify-content-between">
					<div className="percentage d-flex align-items-center justify-content-end fs-6">
						<FontAwesomeIcon icon={faAngleUp} className="widgetIcon" />
						{diff}%
					</div>
					<div className="align-items-end position-absolute bottom-0 end-0 pe-3 pb-3">
						{data.icon}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Widget;
