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
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReserveView from "./ReserveView";
import moment from "moment";
import Loadingdot from "../../Spinner/Loadingdot";

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
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    color: theme.palette.common.black,
  },
}));

const columns = [
  { id: "Reserve No", label: "Reserve ID", minWidth: 40 },
  // { id: "Room No", label: "Room No", minWidth: 40 },
  {
    id: "type",
    label: "Room Type",
    minWidth: 130,
  },
  {
    id: "name",
    label: "Name",
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
    id: "mode",
    label: "Mode",
    minWidth: 120,
  },

  {
    id: "Book now",
    label: "Book Now",
    minWidth: 120,
  },

  {
    id: "Action",
    label: "Action",
    minWidth: 150,
  },
];

function TableRList({
  List,
  viewList,
  handleView,
  open,
  handleDelete,
  res,
  date3,
  mode3,
}) {
  const [page, setPage] = useState(0);
  const [date, setdate] = useState(new Date());
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handlecheckin = (id) => {
    navigate(`/frontdesk/checkin/${id}`, { state: { date } });
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

          <TableBody>
            {List.filter((row) => {
              if (mode3 === "") {
                return row;
              } else if (row.mode.toLowerCase().includes(mode3.toLowerCase())) {
                return row;
              }
            })
              .filter((row) => {
                if (res === "") {
                  return row;
                } else if (row.reserveno.toString().includes(res)) {
                  return row;
                }
              })
              .filter((row) => {
                if (date3 === "") {
                  return row;
                } else if (row.checkin.includes(date3.toLowerCase())) {
                  return row;
                }
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
                    {/* <TableCell
                    style={{
                      border: "1px solid #ece9e9",
                      textAlign: "center",
                    }}
                  >
                    {row.roomno}
                  </TableCell> */}
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.type}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.firstname + " " + row.lastname}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkin).format("DD-MM-YYYY / hh:mm a")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkout).format("DD-MM-YYYY / hh:mm a")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.mode}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <button
                        className="btn btn-add "
                        onClick={() => handlecheckin(row._id)}
                      >
                        Check In
                      </button>
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
                            className=" btn ms-3 btn-sm btn-primary bttn-2"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#viewreserve"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>
                          <div
                            className="modal fade"
                            id="viewreserve"
                            tabindex="-1"
                            aria-labelledby="ModalRoomViewL"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="ModelRoomViewL"
                                  >
                                    Reserve Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close "
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>

                                <div className="modal-body">
                                  {open ? (
                                    <Loadingdot />
                                  ) : (
                                    <ReserveView viewList={viewList} />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-danger bttn-2 btn-sm  ms-3 "
                            onClick={() => handleDelete(row._id)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </span>
                      </div>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="p-0"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={List.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableRList;
