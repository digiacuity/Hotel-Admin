import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import moment from "moment";
import HandleView from "./HandleView";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#005fc1",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#ecf0f1",
    color: theme.palette.common.black,
    border: theme.palette.common.black,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
    border: theme.palette.common.black,
  },
}));

const columns = [
  {
    id: "firstname",
    label: "FirstName",
    minWidth: 40,
    fontSize: "14px",
    padding: "5px",
  },
  { id: "lastname", label: "LastName", minWidth: 40 },

  {
    id: "email",
    label: "Email",
    minWidth: 120,
  },
  {
    id: "contact",
    label: "Contact",
    minWidth: 120,
  },
  {
    id: "address",
    label: "Address",
    minWidth: 120,
  },
  {
    id: "Check In",
    label: "Check In",
    minWidth: 120,
  },
  {
    id: "Check Out",
    label: "Check Out",
    minWidth: 120,
  },

  {
    id: "guest",
    label: "Guest",
    minWidth: 150,
  },
  {
    id: "room",
    label: "Room",
    minWidth: 150,
  },
];

function TableOnlineBooking({
  booking1,
  Search,
  room,
  view1,
  handleView,
  handleDelete,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className="table-head  ms-2 "
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 505 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  style={{
                    minWidth: column.minWidth,
                    padding: column.padding,
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {booking1
              .filter((row) => {
                if (Search === "") {
                  return row;
                } else if (
                  row.checkin.toLowerCase().includes(Search.toLowerCase())
                ) {
                  return row;
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => {
                return a.bookingno - b.bookingno; // or some other logic to determine if a and b should be swapped
              })
              .map((row) => {
                return (
                  <StyledTableRow
                    role="checkbox"
                    tabIndex={-1}
                    style={{
                      border: "1px solid #ece9e9",
                      textAlign: "center",
                    }}
                  >
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.bookingno}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomno}
                      <div>
                        {row.newroomno && (
                          <>
                            <b>{row.newroomno}</b>
                          </>
                        )}
                      </div>
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.contact}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkin).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkout).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.status === "Reserved" ? (
                        <div className="b-status text-primary ">
                          {row.status}
                        </div>
                      ) : (
                        <div>
                          {row.status === "Checked In" ? (
                            <div className="b-status  text-success">
                              {row.status}
                            </div>
                          ) : (
                            <div className="b-status  text-danger  ">
                              {row.status}
                            </div>
                          )}
                        </div>
                      )}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <div className="list-btn-head">
                        <span>
                          <button
                            type="button"
                            className="  bttn-1"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            {/* <i className="bi bi-eye-fill me-2"></i> */}
          {/* VIEW
                          </button>

                          <HandleView view1={view1} />
                        </span> */}
          {/* <span>
                          <button
                            type="button"
                            className="btn btn-danger bttn-2 ms-3 "
                            onClick={() => handleDelete(row._id, row.roomno)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </span> */}

          {/* </div>
                    </TableCell>
                  </StyledTableRow>
                );
              })} */}
          {/* </TableBody> */}
        </Table>
      </TableContainer>
      <TablePagination
        className="p-0"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={booking1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableOnlineBooking;
