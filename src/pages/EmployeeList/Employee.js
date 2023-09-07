import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";

const Employee = () => {
  const columns = [
    {
      field: "name",
      headerName: "Employer Name",
      flex: 2,
    },
    {
      field: "custommerId",
      headerName: "Customer ID",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Poc Number",
      flex: 1,
    },
    {
      field: "pocName",
      headerName: "Poc Name",
      flex: 1,
    },
  ];

  let data = [
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
    {
      id: 1,
      name: "JK Tyre",
      custommerId: "ID456789",
      location: "New Delhi",
      phoneNumber: "9879876543",
      pocName: "Sakshi Gupta",
    },
  ];
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div>
            <div>
              <p>Employer List</p>
              <p>An Overview of all your test request over the year.</p>
            </div>
            <div>
              <input type="date" id="birthday" name="birthday" />
              <button>All Status v</button>
            </div>
          </div>
          <div>
            <DataGrid
              rows={data}
              columns={columns}
              pageSizeOptions={[10, 25, 50, 100]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
