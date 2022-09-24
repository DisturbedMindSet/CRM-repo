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
		<aside id="Sidebar" className="sidebar ">
			<section id="TopSectionSidebar" className=" d-flex align-items-center justify-content-center">
				<span id="Logo" className="fs-3 fw-bold  ">
					<NavLink to={window.location.pathname + "/dashboard"}>Logo</NavLink>
				</span>
			</section>
			<hr id="hr" className="hr mt-1" />
			<section id="CenterSectionSidebar" className="ps-3 d-flex">
				<ul id="MenuList" className="text-decoration-none m-0 p-0 ">
					<p id="titleMain" className="fw-bold mt-1 mb-1">
						Main
					</p>

					<li className="">
						<NavLink to={window.location.pathname + "/dashboard"} className="">
							<FontAwesomeIcon icon={faGripHorizontal} className="icon" />
							<span name="dashboard" className="">
								Dashboard
							</span>
						</NavLink>
					</li>

					<p id="titleGeneral" className="fw-bold mt-1 mb-1 mt-2">
						General
					</p>

					<li>
						<NavLink to="" className="">
							<FontAwesomeIcon icon={faShop} className="icon" />
							<span name="products">Products</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="" className="">
							<FontAwesomeIcon icon={faCreditCard} className="icon" />
							<span name="orders">Orders</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/cus" className="">
							<FontAwesomeIcon icon={faUser} className="icon" />
							<span name="customers">Customers</span>
						</NavLink>
					</li>

					<p id="titleGeneral" className="fw-bold mt-1 mb-1 mt-3">
						Management
					</p>

					<li>
						<NavLink to="" className="">
							<FontAwesomeIcon icon={faChartSimple} className="icon" />
							<span>Analytics</span>
						</NavLink>

						<FontAwesomeIcon
							icon={open ? faChevronUp : faChevronDown}
							className="icon fs-6 ps-2  "
							onClick={() => setIsOpen(!open)}
						/>
					</li>

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

					<p id="titleGeneral" className="fw-bold mt-1 mb-1 mt-3">
						extra
					</p>

					<li>
						<NavLink to="" className="">
							<FontAwesomeIcon icon={faCalendarDays} className="icon" />
							<span>Calendar</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="" className="">
							<FontAwesomeIcon icon={faComment} className="icon" />
							<span>community</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="" className="text-decoration-none">
							<FontAwesomeIcon icon={faHeadset} className="icon" />
							<span className="">Support</span>
						</NavLink>
					</li>
				</ul>
			</section>
			<section id="BottomSectionSidebar" className="mt-3 position-fixed bottom-0 p-3">
				<NavLink to="" className="d-flex align-items-center">
					<li>
						<FontAwesomeIcon icon={faGear} className="icon" />
						<span className="">Settings</span>
					</li>
				</NavLink>
			</section>
		</aside>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
