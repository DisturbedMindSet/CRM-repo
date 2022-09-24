import { faBell, faGlobe, faMessage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav id="" className="Navbar">
			<div className="wrapper">
				<section id="search" className="search">
					<input className="" type="text" placeholder="Search..." />
					<FontAwesomeIcon icon={faSearch} className="icon" />
				</section>
				<section className="items">
					<div className="item">
						<FontAwesomeIcon icon={faGlobe} className="icon" />
						<menu>
							<select>
								<option value="english">English</option>
							</select>
						</menu>
					</div>
					<div className="item">
						<FontAwesomeIcon icon={faBell} className="icon" />
						<div className="counter">1</div>
					</div>

					<div className="item">
						<FontAwesomeIcon icon={faMessage} className="icon" />
						<div className="counter">2</div>
					</div>

					<div className="item">
						<img
							src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
							alt="user"
							className="avatar"
						/>
					</div>
				</section>
			</div>
		</nav>
	);
};

export default Navbar;
