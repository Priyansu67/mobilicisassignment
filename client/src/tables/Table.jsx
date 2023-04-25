/* eslint-disable react/jsx-key */
import { useGetUsersByCarsByIncomeQuery } from "../api/apiService";
import DataTable from "react-data-table-component";

function Table1() {

// eslint-disable-next-line react/prop-types
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const { data, isSuccess } = useGetUsersByCarsByIncomeQuery({
    incomeBracket: 5,
    carBrands: "BMW,Mercedes",
  });

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true ,maxWidth:"fit-content",compact:true},
    { name: "First Name", selector: (row) => row.first_name, sortable: true,maxWidth:"fit-content" },
    { name: "Last Name", selector: (row) => row.last_name, sortable: true,maxWidth:"fit-content" },
    { name: "Email", selector: (row) => row.email,grow:2,right:true },
    { name: "Gender", selector: (row) => row.gender, sortable: true,center:true },
    { name: "Income", selector: (row) => row.income, sortable: true ,maxWidth:"fit-content"},
    { name: "City", selector: (row) => row.city, sortable: true ,maxWidth:"fit-content"},
    { name: "Car", selector: (row) => row.car, sortable: true },
    { name: "Quote", selector: (row) => row.quote,grow:2},
    { name: "Phone Price", selector: (row) => row.phone_price, sortable: true },
  ];

  return (
    <DataTable
      columns={columns}
      data={isSuccess ? data : []}
      pagination
      highlightOnHover
      pointerOnHover
      responsive
      fixedHeader
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
  );
}
export default Table1;
