import React from "react";
import "./Categories.scss";
import { Doughnut } from "react-chartjs-2";

const data = {
	labels: ["Cabelo", "Corpo", "Pes"],
	datasets: [
		{
			label: "My First Dataset",
			data: [300, 50, 100],
			backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
			hoverOffset: 4,
		},
	],
};

const Categories = () => {
	return (
		<div className="border-card">
			<h1 className="p-3 fw-bold">Popular Categories</h1>
			<div>
				<Doughnut
					data={data}
					options={{
						responsive: true,
						maintainAspectRatio: true,
					}}
				/>
			</div>
		</div>
	);
};

export default Categories;
