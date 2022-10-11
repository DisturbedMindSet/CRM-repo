import React from "react";
import { Outlet } from "react-router-dom";

const customerID = () => {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="row ">
					<div className="col-12">
						<div className="row">
							<main className="col-12 w-100 flex-column bg">
								<div className="row "></div>
								customer ID
								{/* create to TOP button */}
							</main>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default customerID;
