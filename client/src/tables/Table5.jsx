/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useGetTopCitiesQuery } from "../api/apiService";
import DataTable from "react-data-table-component";

function Table5() {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const { data, isSuccess } = useGetTopCitiesQuery();

  const columns = [
    { name: "City", selector: (row) => row.city, sortable: true ,grow:3,center:true},
    { name: "Users", selector: (row) => row.users, sortable: true,center:true },
    { name: "Average Income", selector: (row) =>parseFloat(row.averageIncome).toFixed(2), sortable: true,center:true },
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
export default Table5;