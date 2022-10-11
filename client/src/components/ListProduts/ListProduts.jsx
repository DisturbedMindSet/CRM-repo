import React from "react";
import { NavLink } from "react-router-dom";
import "./ListProduts.scss";

const rows = [
	{
		id: 1143155,
		product: "Acer Nitro 5",
		img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "John Smith",
		date: "1 March",
		amount: 785,
	},
	{
		id: 2235235,
		product: "Playstation 5",
		img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Michael Doe",
		date: "1 March",
		amount: 900,
	},
	{
		id: 2342353,
		product: "Redragon S101",
		img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "John Smith",
		date: "1 March",
		amount: 35,
	},
	{
		id: 2357741,
		product: "Razer Blade 15",
		img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Jane Smith",
		date: "1 March",
		amount: 920,
	},
	{
		id: 2342355,
		product: "ASUS ROG Strix",
		img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Harold Carol",
		date: "1 March",
		amount: 2000,
	},
];

const ListProduts = () => {
	return (
		<div className="">
			<div>
				<p className="pt-5 pb-2 navbar-brand navbar">Top Selling produts</p>
				<table className="table table-hover border" aria-label="simple table">
					<thead>
						<tr className="table-responsive border">
							<th scope="col">ID</th>
							<th scope="col">Product</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody className="border-1">
						{rows.map((row) => (
							<tr className="table-primary " key={row.id}>
								<th scope="row">{row.id}</th>
								<td>
									<div className="d-flex align-items-center">
										<img src={row.img} alt="img" className="image" />
										{row.product}
									</div>
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
		</div>
	);
};

export default ListProduts;
