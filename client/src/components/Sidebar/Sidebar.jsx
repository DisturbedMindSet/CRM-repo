import React from "react";
import "../Sidebar/Sidebar.scss";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faChartSimple,
	faChevronDown,
	faChevronUp,
	faComment,
	faCreditCard,
	faGear,
	faGripHorizontal,
	faHeadset,
	faShop,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
	const [open, setIsOpen] = useState(false);
	//
	//
	return (
		<aside id="Sidebar" className="vh-100 sidebar sticky-top  ">
			<section id="TopSectionSidebar" className="position-sticky pt-3 pb-3 sidebar-sticky">
				<span
					id="Logo"
					className="d-flex justify-content-center align-items-center fs-3 fw-bold text-decoration-none 
">
					<NavLink
						className="text-decoration-none navbar-brand ps-1"
						to={window.location.pathname + "/dashboard"}>
						Logo
					</NavLink>
				</span>
			</section>
			<hr id="hr" className="hr mt-1" />
			<section
				id="CenterSectionSidebar"
				className="ps-xl-3 ps-lg-2 ps-md-2 ps-sm-1 pe-xl-0 pe-lg-0 pe-md-0 d-flex">
				<div id="MenuList" className=" align-items-center  m-0 pt-2 pb-3">
					<p id="titleSidebar" className="fw-bold mt-2 mb-1">
						Main
					</p>
					<ul className="nav flex-column m-0 p-0 ">
						<li className="nav-item  d-flex align-items-center">
							<NavLink
								to={window.location.pathname + "/dashboard"}
								replace={true}
								className="nav-link ps-1">
								<FontAwesomeIcon icon={faGripHorizontal} className="icon" />
								<span name="dashboard" className="ms-2">
									Dashboard
								</span>
							</NavLink>
						</li>
					</ul>
					<p id="titleSidebar" className="fw-bold mt-2 mb-1">
						General
					</p>
					<ul className="nav flex-column">
						<li className="nav-item">
							<NavLink
								to={window.location.pathname + "/Products"}
								replace={true}
								className="nav-link ps-1">
								<FontAwesomeIcon icon={faShop} className="icon" />
								<span name="products" className="ms-2">
									Products
								</span>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to={window.location.pathname + "/Orders"}
								replace={true}
								className="nav-link ps-1">
								<FontAwesomeIcon icon={faCreditCard} className="icon" />
								<span name="orders" className="ms-2">
									Orders
								</span>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to={window.location.pathname + "/customers"}
								replace={true}
								className="nav-link ps-1">
								<FontAwesomeIcon icon={faUser} className="icon" />
								<span name="customers" className="ms-2">
									Customers
								</span>
							</NavLink>
						</li>
					</ul>
					<p id="titleSidebar" className="fw-bold mt-1 mb-1 mt-3">
						Management
					</p>
					<ul className="nav flex-column ">
						<li className="nav-item d-flex ">
							<NavLink
								to={window.location.pathname + "/Analytics"}
								replace
								className="nav-link ps-1">
								<FontAwesomeIcon icon={faChartSimple} className="icon " />
								<span className="ms-2">Analytics</span>
							</NavLink>

							<FontAwesomeIcon
								icon={open ? faChevronUp : faChevronDown}
								className="cursor nav-link icon fs-6 align-self-center p-0"
								onClick={() => setIsOpen(!open)}
							/>
						</li>
					</ul>
					<div className={open ? "d-flex flex-column" : "d-none"}>
						<ul className="subMenuList">
							<li>
								<NavLink to="">Faturado</NavLink>
							</li>
							<li>
								<NavLink to="">Devolvido</NavLink>
							</li>
							<li>
								<NavLink to="">Divida</NavLink>
							</li>
							<li>
								<NavLink to="">Tudo</NavLink>
							</li>
						</ul>
					</div>

					<p id="titleSidebar" className="fw-bold mt-1 mb-1 mt-3 ">
						extra
					</p>
					<ul className="nav flex-column">
						<li className="nav-item">
							<NavLink to="" className="nav-link ps-1">
								<FontAwesomeIcon icon={faCalendarDays} className="icon" />
								<span className="ms-2">Calendar</span>
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink to="" className="nav-link ps-1">
								<FontAwesomeIcon icon={faComment} className="icon" />
								<span className="ms-2">community</span>
							</NavLink>
						</li>

						<li className="nav-item ">
							<NavLink to="" className="nav-link ps-1 ">
								<FontAwesomeIcon icon={faHeadset} className="icon" />
								<span className="ms-2">Support</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</section>
			<section
				id="BottomSectionSidebar"
				className="ps-xl-3 ps-lg-2 ps-md-2 ps-sm-1 nav mt-3 position-fixed bottom-0 p-3">
				<li className="nav-item">
					<NavLink to="" className="nav-link ps-1">
						<FontAwesomeIcon icon={faGear} className="icon " />
						<span className=" ms-2">Settings</span>
					</NavLink>
				</li>
			</section>
		</aside>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
