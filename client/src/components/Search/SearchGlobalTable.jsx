import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./SearchGlobalTable.scss";

const SearchGlobalTable = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 300);

	return (
		<div className=" wrapper w-100">
			<div className="row">
				<div className=" container-fluid ">
					<form className="d-flex align-items-center rounded bg-body p-1" role="search">
						<input
							className="form-control me-2 border-white"
							type="search"
							value={value || ""}
							placeholder={`${count} records...`}
							aria-label="Search"
							onChange={(e) => {
								setValue(e.target.value);
								onChange(e.target.value);
							}}
							style={{ minWidth: "200px" }}
						/>

						<span className="pe-2 bg-body">
							<FontAwesomeIcon icon={faSearch} className="fs-6" />
						</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SearchGlobalTable;
