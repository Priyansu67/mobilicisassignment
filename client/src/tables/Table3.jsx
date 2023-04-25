/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useGetUsersByCharEmailQuery } from "../api/apiService";
import DataTable from "react-data-table-component";

function Table3() {
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const { data, isSuccess } = useGetUsersByCharEmailQuery({
    character: "M",
    quoteLength: 15,
  });
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      maxWidth: "fit-content",
      compact: true,
    },
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
      maxWidth: "fit-content",
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
      maxWidth: "fit-content",
    },
    { name: "Email", selector: (row) => row.email, grow: 2, right: true },
    { name: "Quote", selector: (row) => row.quote, grow: 2, right: true },
    { name: "Length", selector: (row) => row.quote.length, sortable: true,center:true },
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
export default Table3;
