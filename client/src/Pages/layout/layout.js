import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<React.Fragment>
			<div className="">
				<div className=" container-fluid ">
					<div className="col-12">
						<div className="row vh-100">
							<section className="px-0 col-3 col-sm-3 col-md-3 col-lg-2 d-md-block ">
								<Sidebar className="" />
							</section>
							<section className="col-9 col-sm-9 col-md-9 col-lg-10 d-md-block px-0 min-vh-100   flex-column ">
								<Navbar />
								<main className="col-12 w-100 flex-column   ">
									<Outlet />
								</main>
							</section>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Layout;
