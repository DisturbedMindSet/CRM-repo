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

			data = {
				title: "BALANCE",
				isMoney: false,
				link: "See details",
				icon: (
					<FontAwesomeIcon
						icon={faUser}
						className="icon"
						style={{
							backgroundColor: "rgba(128, 0, 128, 0.2)",
							color: "purple",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<section id="widget" className="">
			<div className="card ">
				<div id="left" className="d-flex justify-content-between">
					<p id="title" className="tittle fw-bold fs-6">
						{data.title}
					</p>
					<span className="counter ">
						{data.isMoney && "$"} {amount}
					</span>
					<NavLink to="" className="link">
						<p>{data.link}</p>
					</NavLink>
				</div>
				<div id="right" className=" d-flex justify-content-between">
					<div className="percentage d-flex align-items-center">
						<FontAwesomeIcon icon={faAngleUp} className="icon" />
						{diff}%
					</div>
					{data.icon}
				</div>
			</div>
		</section>
	);
};

export default Widget;
