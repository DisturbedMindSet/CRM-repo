import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import "./Feature.scss";

const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	datasets: [
		{
			label: "First dataset",
			data: [33, 53, 85, 41, 44, 65],
			fill: true,
			backgroundColor: "rgba(75,192,192,0.2)",
			borderColor: "rgba(75,192,192,1)",
		},
		{
			label: "Second dataset",
			data: [33, 25, 35, 51, 54, 76],
			fill: false,
			borderColor: "#742774",
		},
	],
};

const Feature = () => {
	return (
		<section className="feature border-card ">
			<div className="top pt-4 justify-content-between d-flex">
				<h1 className=""> Sales</h1>

				<FontAwesomeIcon icon={faEllipsisVertical} className="fs-6 pe-5 " />
			</div>
			<div className="bottom h-100">
				<Line data={data} datasetIdKey="id" />
			</div>
		</section>
	);
};

export default Feature;
