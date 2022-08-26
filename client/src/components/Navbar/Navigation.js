import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt, faTh } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MenuItems = [
	{
		path: "/test/dashboard",
		name: "Dashboard",
		icon: <FontAwesomeIcon icon={faTh} />,
	},
	{
		path: "/test/analytics",
		name: "Analytics",
		icon: <FontAwesomeIcon icon={faReceipt} />,
	},
];

const Navigation = () => {
	return (
		<nav className="bg-primary vh-75 w-100 text-center  d-flex justify-content-between align-content-end ">
			<h1 className="logo fs-5">logo</h1>
			<div></div>
			<ul>
				<div className="d-flex">
					{MenuItems.map((item, index) => (
						<div key={index} className="d-flex">
							<NavLink to={item.path}>
								{/* className={({ isActive }) => (isActive ? activeLink : normalLink)} */}
								<div className="">{item.icon}</div>
								<div
									// style={{ display: isOpen ? "inline-block" : "none" }}
									className="">
									{item.name}
								</div>
							</NavLink>
						</div>
					))}
				</div>
			</ul>
		</nav>
	);
};

export default Navigation;
