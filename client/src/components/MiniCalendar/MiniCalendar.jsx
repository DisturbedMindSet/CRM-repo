import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./MiniCalendar.scss";

const data = [
	{
		date: "02/02/2022",
		title: "Meeting with partners",
	},
	{
		date: "02/02/2022",
		title: "lunch with steve",
	},
	{
		date: "02/02/2022",
		title: "Meeting with partners",
	},
	{
		date: "02/02/2022",
		title: "weekly Meeting",
	},
	{
		date: "02/02/2022",
		title: "web conference",
	},
];

const MiniCalendar = () => {
	return (
		<div className="d-inline-block  flex-column border-card">
			<h1 className="fw-bold p-3">upComing events</h1>
			<div className="">
				{data.map((item, index) => (
					<div key={index} className="d-flex p-1 align-content-center ">
						<FontAwesomeIcon icon={faCalendarAlt} className="icon" />
						<p className="d-flex p-2 ">{item.date}</p>

						{item.title}
					</div>
				))}
				<div>
					<NavLink to="" className=" d-flex pt-2">
						<p className="nav-link">See more</p>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default MiniCalendar;
