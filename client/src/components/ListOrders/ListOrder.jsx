import React from "react";
import { NavLink } from "react-router-dom";
import "./ListOrder.scss";

const data = [
	{
		id: 1143155,
		customer: "John Smith",
		product: "Acer Nitro 5",
		amount: 785,
		status: "Approved",
		date: "1 March",
	},
	{
		id: 2235235,
		customer: "Michael Doe",
		product: "Playstation 5",
		amount: 900,
		status: "Pending",
		date: "1 March",
	},
	{
		id: 2342353,
		product: "Redragon S101",
		customer: "John Smith",
		amount: 35,
		status: "Pending",
		date: "1 March",
	},
	{
		id: 2357741,
		product: "Razer Blade 15",
		customer: "Jane Smith",
		amount: 920,
		status: "Pending",
		date: "1 March",
	},
	{
		id: 2342355,
		product: "ASUS ROG Strix",
		customer: "Harold Carol",
		amount: 2000,
		status: "Pending",
		date: "1 March",
	},
];

const ListOrder = () => {
	return (
		<div className="">
			<p className="pb-2 navbar-brand navbar">Orders</p>
			<table className="table table-hover">
				<thead>
					<tr className="table-responsive border">
						<th scope="col">Date</th>
						<th scope="col">customer</th>
						<th scope="col">status</th>
						<th scope="col">Total</th>
					</tr>
				</thead>
				<tbody className="border-1">
					{data.map((row) => (
						<tr className="table-primary " key={row.id}>
							<th scope="row">{row.date}</th>
							<td>
								<div className="d-flex align-items-center">
									<img src={row.img} alt="img" className="image" />
									{row.customer}
								</div>
							</td>
							<td>
								<span className={`status ${row.status}`}>{row.status}</span>
							</td>
							<td>{row.amount} €</td>
						</tr>
					))}
				</tbody>
			</table>
			<NavLink to="" className="align-items-end justify-content-end d-flex">
				<p className="nav-link">See more</p>
			</NavLink>
		</div>
	);
};

export default ListOrder;
