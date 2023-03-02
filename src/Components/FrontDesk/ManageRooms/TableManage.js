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
import Checkoutmodal from "../BookingList/Checkoutmodal";
import Checkinmodal from "../BookingList/Checkinmodal";
import HandleEdit from "./HandleEdit";
import HandleView from "./HandleView";
import HandleShift from "./HandleShift";
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
  { id: "Room No", label: "Room No", minWidth: 100 },
  // { id: "Reserve No", label: "Reserve No", minWidth: 40 },

  {
    id: "type",
    label: "Room Type",
    minWidth: 150,
  },

  {
    id: "AC",
    label: "AC",
    minWidth: 120,
  },
  {
    id: "Bed",
    label: "Bed",
    minWidth: 100,
  },
  {
    id: "roomStatus",
    label: "Room Status",
    minWidth: 150,
  },
  {
    id: "bookingStatus",
    label: "Booking Status",
    minWidth: 150,
  },
  {
    id: "Shiftroom",
    label: "Shift Room",
    minWidth: 130,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 190,
  },
];

function TableManage({
  booking,
  Search2,
  handleEdit,
  handleDelete,
  formik,

  view,
  handleView,
  rooms,
  load,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [data, setdata] = useState([...rooms, ...booking]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className="table-head ms-2"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 473 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell
                  style={{
                    minWidth: column.minWidth,
                    border: "1px solid #d8d8d8",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  key={i}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms

              .filter((row) => {
                if (Search2 === "") {
                  return row;
                } else if (
                  row.checkin.toLowerCase().includes(Search2.toLowerCase())
                ) {
                  return row;
                } else if (
                  row.checkout.toLowerCase().includes(Search2.toLowerCase())
                ) {
                  return row;
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => {
                return a.roomno - b.roomno; // or some other logic to determine if a and b should be swapped
              })
              .map((row, i) => {
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
                      {row.roomnumber}
                      <div>
                        <b> {row.newroomno} </b>
                      </div>
                    </TableCell>
                    {/* <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.bookingno}
                    </TableCell> */}
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomtype}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.ac}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.bed}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomstatus}
                    </TableCell>
                    {/* <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.mode}
                    </TableCell> */}
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.bookingstatus === "Available" ? (
                        <div>
                          <button
                            className="btn btn-primary btn-sm "
                            onClick={() => handleEdit(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#Modalreserve"
                          >
                            {row.bookingstatus}
                          </button>
                          <div
                            className="modal  fade"
                            id="Modalreserve"
                            tabindex="-1"
                            aria-labelledby="ModalStatusEdit"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-md">
                              <div className="modal-content ">
                                <div className="modal-header ">
                                  <h5
                                    className="modal-title "
                                    id="ModalStatusEdit"
                                  >
                                    Reserve
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <div className="container-fluid ">
                                    <form onSubmit={formik.handleSubmit}>
                                      <div className="row g-4 mb-3  ">
                                        <div className="col-lg-6">
                                          <input
                                            className="form-control p-2 border "
                                            name="name"
                                            id="name"
                                            type={"text"}
                                            value={formik.values.status}
                                          />
                                        </div>

                                        <div className="col-lg-6">
                                          <select
                                            name="status"
                                            id="status"
                                            onChange={formik.handleChange}
                                            value={formik.values.status}
                                            className="form-select p-2 border "
                                            aria-label="Default select example"
                                          >
                                            <option selected>--Select--</option>

                                            <option
                                              className="text-success"
                                              value="Checked In"
                                            >
                                              Checked In
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div className="form-group mt-3 btn-submit">
                                        <input
                                          type="submit"
                                          className="btn btn-primary"
                                          value="Submit"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        />
                                        <button
                                          type="button"
                                          value="cancel"
                                          className="btn btn-danger ms-3"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {row.bookingstatus === "UnAvailable" ? (
                            <div>
                              <button
                                className="btn btn-success btn-sm "
                                // onClick={() => handleCheckin(row._id)}
                                data-bs-toggle="modal"
                                data-bs-target="#Modalcheckin"
                              >
                                {row.bookingstatus === "UnAvailable"
                                  ? "Checked In"
                                  : ""}
                              </button>
                              <div
                                className="modal fade"
                                id="Modalcheckin"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-lg">
                                  <div className="modal-content ms-5">
                                    <div className="modal-header">
                                      <Checkinmodal view={view} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              {row.bookingstatus === "Checked Out" ? (
                                <div>
                                  <button
                                    className="btn btn-warning text-light btn-sm "
                                    type="button"
                                    onClick={() => handleView(row._id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#Modalcheckout"
                                  >
                                    Checked out
                                  </button>
                                  <div
                                    className="modal fade"
                                    id="Modalcheckout"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div className="modal-dialog modal-lg">
                                      <div className="modal-content ms-5">
                                        <Checkoutmodal viewout={view} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                "--select--"
                              )}
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
                      <button
                        className="btn btn-sm btn-outline-info  "
                        // onClick={() => handleShiftRoom(row._id)}
                        onClick={() => handleEdit(row._id)}
                        data-bs-toggle="modal"
                        data-bs-target="#Modalshiftroom"
                      >
                        Shift Room
                      </button>
                      <div
                        className="modal fade"
                        id="Modalshiftroom"
                        tabindex="-1"
                        aria-labelledby="ModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content ">
                            <div className="modal-header ">
                              <h5 className="modal-title " id="ModalLabel">
                                Shift Room
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <HandleShift formik={formik} rooms={rooms} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="list-btn-head text-center">
                        <span>
                          <button
                            type="button"
                            className=" btn ms-3 btn-info bttn-2"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Room Information View
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close "
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>

                                {/* <div className="modal-body">
                                  {load ? (
                                    <Loadingdot />
                                  ) : (
                                    <>
                                      <HandleView view={view} />
                                    </>
                                  )}
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-warning  bttn-2"
                            onClick={() => handleEdit(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#ModalRoomManage"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <div
                            className="modal fade"
                            id="ModalRoomManage"
                            tabindex="-1"
                            aria-labelledby="ModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              {/* <HandleEdit formik={formik} load={load} /> */}
                            </div>
                          </div>
                        </span>
                        {/* <span>
                          <button
                            type="button"
                            className="btn btn-danger bttn-2 "
                            onClick={() => handleDelete(row._id)}
                            disabled
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </span> */}
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
        count={rooms.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableManage;
