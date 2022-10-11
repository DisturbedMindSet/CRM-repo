import React, { useMemo } from "react";
import mockData from "../../mockData/MOCK_DATA.json";
import "./Orders.scss";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import SearchGlobalTable from "../../components/Search/SearchGlobalTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
	// const [data, setData] = React.useState(() => [...mockData]);
	//  const rerender = React.useReducer(() => ({}), {})[1];

	const data = useMemo(() => [...mockData], []);

	const columns = useMemo(
		() =>
			mockData[0]
				? Object.keys(mockData[0])
						.filter((key) => key !== "rating")
						.map((key) => {
							if (key === "image")
								return {
									Header: key,
									accessor: key,
									// Cell: ({ value }) => <img src={value} />,
									maxWidth: 70,
								};

							return { Header: key, accessor: key };
						})
				: [],
		[mockData],
	);

	// const columns = useMemo(
	// 	() => [
	// 		{
	// 			Header: "Id",
	// 			accessor: "id",
	// 		},
	// 		{
	// 			Header: "Username",
	// 			accessor: "username",
	// 		},
	// 		{
	// 			Header: "Email",
	// 			accessor: "email",
	// 		},
	// 		{
	// 			Header: "Telefone",
	// 			accessor: "telefone",
	// 		},
	// 		{
	// 			Header: "Country",
	// 			accessor: "country",
	// 		},
	// 	],
	// 	[],
	// );

	const tableInstance = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		useSortBy,
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		preGlobalFilteredRows,
		setGlobalFilter,
		state,
	} = tableInstance;

	const isEven = (i) => i % 2 === 0;

	return (
		<React.Fragment>
			<div className="container-fluid bg-primary ">
				<div className="row ">
					<div className="  container-fluid ">
						<nav className="col-12 row bg-danger m-0">
							nav section
							<div className="justify-content-between d-flex">
								<h1 className="col-2 col- p-2 navbar-brand navbar bg-success">Orders</h1>

								<div className="col-3 col d-flex ">
									<div className="">
										<SearchGlobalTable
											preGlobalFilteredRows={preGlobalFilteredRows}
											setGlobalFilter={setGlobalFilter}
											globalFilter={state.globalFilter}
										/>
									</div>
									<button
										onClick={"#"}
										className="mx-2 d-flex align-items-center justify-content-between bg-white border rounded border">
										<span className="d-flex px-2">
											<FontAwesomeIcon icon={faFilter} className="fs-6 pe-1 " />
											Filter
										</span>
									</button>
								</div>
								<div className="col-3 bg-info">export</div>
							</div>
						</nav>
						<section className="col-12 row bg-primary">test</section>

						<div className="p-2 row">
							<table className="table " {...getTableProps()}>
								<thead>
									{headerGroups.map((headerGroup) => (
										<tr className="" {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column) => (
												<th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}>
													{column.render("Header")}
													{column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()}>
									{rows.map((row, i) => {
										prepareRow(row);

										return (
											<tr
												{...row.getRowProps()}
												className={isEven(i) ? "bg-success opacity-80" : ""}>
												{row.cells.map((cell, i) => (
													<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
												))}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Orders;
