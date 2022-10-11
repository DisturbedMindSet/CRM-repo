import { faBars, faBell, faGlobe, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top ">
			<div className="container-fluid ps-4 m-1">
				<button
					className="navbar-toggler bg-dark"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarColor01"
					aria-controls="navbarColor01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">
						{/* <FontAwesomeIcon icon={faBars} className="" /> */}
					</span>
				</button>

				<div className="collapse navbar-collapse row" id="navbarColor01">
					<div className="d-flex justify-content-between">
						<form className="d-flex">
							<input className="form-control me-sm-2" type="text" placeholder="Search" />
							<button className="btn btn-secondary my-2 my-sm-0 " type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
				<section className="navbar-nav">
					<ul className="  d-flex align-items-center ">
						<div className="nav-item d-flex px-2">
							<FontAwesomeIcon icon={faGlobe} className="icon align-self-center" />
							<menu className="px-2">
								<select>
									<option value="english">English</option>
								</select>
							</menu>
						</div>
						<div className="nav-item d-flex position-relative me-3 ">
							<FontAwesomeIcon icon={faBell} className="icon nav-link " />
							<div className="counter nav-link">1</div>
						</div>

						<div className="nav-item d-flex position-relative me-3">
							<FontAwesomeIcon icon={faMessage} className="icon nav-link" />
							<div className="counter nav-link">2</div>
						</div>
						<div className="nav-item">
							<img
								src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
								alt="userIcon"
								className=" avatar"
							/>
						</div>
					</ul>
				</section>
			</div>
		</nav>

		// <nav id="" tName="navbar navbar-expand-lg navbar-dark bg-primary">
		// 	<div tName="container-fluid">
		// 		<section id="" tName="">
		// 			<input tName="" type="text" placeholder="Search..." />
		// 			<FontAwesomeIcon icon={faSearch} tName="icon" />
		// 		</section>
		// 		<section tName="">
		// 			<div tName="">
		// 				<FontAwesomeIcon icon={faGlobe} tName="icon" />
		// 				<menu>
		// 					<select>
		// 						<option value="english">English</option>
		// 					</select>
		// 				</menu>
		// 			</div>
		// 			<div tName="item">
		// 				<FontAwesomeIcon icon={faBell} tName="icon" />
		// 				<div tName="">1</div>
		// 			</div>

		// 			<div tName="item">
		// 				<FontAwesomeIcon icon={faMessage} tName="icon" />
		// 				<div tName="">2</div>
		// 			</div>

		// 			<div tName="">
		// 				<img
		// 					// src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
		// 					alt="user"
		// 					tName="avatar"
		// 				/>
		// 			</div>
		// 		</section>
		// 	</div>

		// </nav>
	);
};

export default Navbar;
