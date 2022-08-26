import { React, Fragment, useState, useEffect } from "react";
import {
	faTh,
	faUserAlt,
	faBookmark,
	faListAlt,
	faBars,
	faReceipt,
	faInfo,
	faCalendar,
	faMessage,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Routes, Route, Navigate, Link } from "react-router-dom";

// import "./Sidebar.css";
// ! Routes
import TestScreen2 from "../../Pages/TestScreen2";

const Sidebar = ({ Children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);

	const [isDropDown, setIsDropDown] = useState(false);
	const drop = () => setIsDropDown(!isDropDown);

	const [isIcon, setIcon] = useState(true);
	const icon = () => setIcon(!isIcon);

	const menuItem = [
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
		{
			path: "/test/campaign",
			name: "Campaign",
			icon: <FontAwesomeIcon icon={faUserAlt} />,
		},
		{
			path: "/test/orders",
			name: "Orders",
			icon: <FontAwesomeIcon icon={faListAlt} />,
		},
		{
			path: "/test/customers",
			name: "Customers",
			icon: <FontAwesomeIcon icon={faListAlt} />,
		},
		{
			path: "/test/products",
			name: "Products",
			icon: <FontAwesomeIcon icon={faBookmark} />,
		},
	];

	const subMenuItem = [
		{
			path: "/test/calendar",
			name: "Calendar",
			icon: <FontAwesomeIcon icon={faCalendar} />,
		},
		{
			path: "/test/team",
			name: "Team",
			icon: <FontAwesomeIcon icon={faMessage} />,
		},
		{
			path: "/test/support",
			name: "Support",
			icon: <FontAwesomeIcon icon={faInfo} />,
		},
	];

	const activeLink = "text-primary";
	const normalLink = "font-bold text-white";

	return (
		<Fragment>
			<section className="d-flex  text-start">
				{/* w-100 h-100 */}
				<div className="position-relative col-span-3 bg-black h-screen pl-2 md:col-span-2 text-white d-inline ">
					{/* <h1>SIdebar</h1> */}
					{/* <div style={{ width: isOpen ? "200px" : "60px" }} className="d-flex p-2 pt-3  ">
						<h1 style={{ display: isOpen ? "block" : "none" }} className="fs-30 ps-3 ">
							<Link className="text-decoration-none text-white" to="/test">
								Logo
							</Link>
						</h1>
						<div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="fa-lg my-auto">
							<FontAwesomeIcon icon={faBars} onClick={toggle} className="fa-lg " />
						</div>
					</div> */}
					<div className="vh-75">
						<div className="d-flex align-items-left justify-content-left flex-column mb-auto ps-2 ">
							{menuItem.map((item, index) => (
								<div key={index} className="m-0 d-flex pb-3 align-items-center ">
									<NavLink
										to={item.path}
										className={({ isActive }) => (isActive ? activeLink : normalLink)}>
										<div className="fa-xl fs-20 d-inline-block  text-center ">{item.icon}</div>
										<div
											style={{ display: isOpen ? "inline-block" : "none" }}
											className="fs-20  p-2  text-decoration-none  ">
											{item.name}
										</div>
									</NavLink>
								</div>
							))}
						</div>
						<div className="d-flex align-items-left justify-content-left flex-column mb-auto ps-2 ">
							<NavLink
								to="/test/test666"
								className={({ isActive }) => (isActive ? activeLink : normalLink)}>
								<span className="fa-xl fs-20 d-inline-block  ps-2  ">
									{<FontAwesomeIcon icon={faInfo} />}
								</span>
								<span
									style={{ display: isOpen ? "inline-block" : "none" }}
									className="fs-20  p-2 ps-3  text-decoration-none w-75 ">
									Test666
									<i onClick={drop} className="ms-3">
										<FontAwesomeIcon onClick={icon} icon={isIcon ? faChevronDown : faChevronUp} />
									</i>
								</span>
							</NavLink>
						</div>
						<div
							style={{ display: isDropDown ? "inline-block" : "none" }}
							className={{ display: isOpen ? "inline-block" : "none" }}>
							{/* "subMenu " */}
							<ul>
								<li>teste1</li>
								<li>teste2</li>
								<li>teste3</li>
								<li>teste4</li>
								<li>teste5</li>
							</ul>
						</div>
						<div className=" m-3 position-absolute bottom-0 start-0 align-content-end align-items-left justify-content-left  ">
							{subMenuItem.map((item, index) => (
								<div key={index} className="m-0 d-flex pb-3 align-items-center">
									<NavLink
										to={item.path}
										className={({ isActive }) => (isActive ? activeLink : normalLink)}>
										<span className="fa-2x fa-xl fs-20 d-inline-block w-25 text-center ">
											{item.icon}
										</span>
										<span
											style={{ display: isOpen ? "inline-block" : "none" }}
											className=" fs-20  p-2  text-decoration-none w-75 ">
											{item.name}
										</span>
									</NavLink>
								</div>
							))}
						</div>
					</div>
				</div>
				<main className="w-100 d-flex bg-secondary align-items-center justify-content-center">
					<NavPage />
				</main>
			</section>
		</Fragment>
	);
};

// routes for links

const NavPage = () => {
	return (
		<Fragment>
			<section>
				<Routes>
					{/* <Route path="/" element={<Navigate to="/test/dashboard" replace />} /> */}
					<Route path="/orders" element={<TestScreen2 />} />
				</Routes>
			</section>
		</Fragment>
	);
};

export default Sidebar;

//* ListGroup
