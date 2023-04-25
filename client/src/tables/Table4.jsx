/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useGetUsersByCarBrandsQuery } from "../api/apiService";
import DataTable from "react-data-table-component";

function Table4() {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const { data, isSuccess } = useGetUsersByCarBrandsQuery({
    carBrands: 'BMW,AUdi,Mercedes',
  });

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true ,maxWidth:"fit-content",compact:true},
    { name: "First Name", selector: (row) => row.first_name, sortable: true,maxWidth:"fit-content" },
    { name: "Last Name", selector: (row) => row.last_name, sortable: true,maxWidth:"fit-content" },
    { name: "Email", selector: (row) => row.email,right:true },

    { name: "Car", selector: (row) => row.car, sortable: true }
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
export default Table4;