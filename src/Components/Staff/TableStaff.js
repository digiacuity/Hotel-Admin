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
import HandleView from "./HandleView";
import HandleEdit from "./HandleEdit";
import "./Staff.css";
import moment from "moment";
import Loadingdot from "../Spinner/Loadingdot";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#005fc1",
    color: "#fff",
    padding: "14px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "10px",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#ecf0f1",
    color: theme.palette.common.black,
    padding: "12px",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
    padding: "12px",
  },
}));

const columns = [
  { id: "ID", label: "ID", minWidth: 80 },
  { id: "Name", label: "Name", minWidth: 150 },
  {
    id: "Designation",
    label: "Designation",
    minWidth: 160,
  },
  {
    id: "Contact",
    label: "Contact",
    minWidth: 140,
  },

  {
    id: "Joining Date",
    label: "Joining Date",
    minWidth: 130,
  },
  {
    id: "Shift",
    label: "Shift",
    minWidth: 110,
  },
  {
    id: "Change Shift",
    label: "Change Shift",
    minWidth: 120,
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 160,
  },
];

function TableStaff({
  staff,
  viewStaff,
  handleEdit,
  handleDelete,
  formik,
  handleView,
  open,
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
      className="table-head ms-2"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <TableContainer sx={{ maxHeight: 510 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  style={{
                    minWidth: column.minWidth,
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
            {staff
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => {
                return a.id - b.id; // or some other logic to determine if a and b should be swapped
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
                    {/* <TableCell></TableCell> */}
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.id}
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
                      {row.department}
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
                      {moment(row.date).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <p className="text-center">{row.shift}</p>
                    </TableCell>
                    <TableCell
                      style={{
                        border: "2px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <button
                        className="btn btn-sm btn-primary text-light  "
                        onClick={() => handleEdit(row._id)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalshift"
                      >
                        Change
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModalshift"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-md">
                          <div className="modal-content ">
                            <div className="modal-header ">
                              <h5
                                className="modal-title "
                                id="exampleModalLabel"
                              >
                                Change Shift
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              {open ? (
                                <Loadingdot />
                              ) : (
                                <>
                                  <div className="container-fluid ">
                                    <form onSubmit={formik.handleSubmit}>
                                      <div className="row g-4 mb-3  ">
                                        <div className="col-lg-6">
                                          <div className="p-2 border">
                                            <h6> Employee Name</h6>
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <input
                                            className="form-control bg-light  p-2 border "
                                            name="name"
                                            id="name"
                                            type={"text"}
                                            value={formik.values.name}
                                            disabled
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <div className="p-2 border">
                                            <h6> Employee Shift</h6>
                                          </div>
                                        </div>
                                        <div className="col-lg-6">
                                          <select
                                            name="shift"
                                            id="shift"
                                            onChange={formik.handleChange}
                                            value={formik.values.shift}
                                            className="form-select p-2 border "
                                            aria-label="Default select example"
                                          >
                                            <option selected>-select-</option>

                                            <option>A</option>
                                            <option>B</option>
                                            <option>c</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="form-group mt-3 btn-submit">
                                        <input
                                          type="submit"
                                          className="btn btn-primary"
                                          value="Update"
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
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
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
                            className=" btn ms-3 btn-info btn-sm bttn-2"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#ModalStaffView"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                          <div
                            className="modal fade"
                            id="ModalStaffView"
                            tabindex="-1"
                            aria-labelledby="ModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content ">
                                <div className="modal-header ">
                                  <h5
                                    className="modal-title "
                                    id="exampleModalLabel"
                                  >
                                    Employee Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  {open ? (
                                    <Loadingdot />
                                  ) : (
                                    <HandleView viewStaff={viewStaff} />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-warning btn-sm bttn-2"
                            onClick={() => handleEdit(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#ModalStaffEdit"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <div
                            className="modal fade"
                            id="ModalStaffEdit"
                            tabindex="-1"
                            aria-labelledby="ModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content ">
                                <div className="modal-header ">
                                  <h5
                                    className="modal-title "
                                    id="exampleModalLabel1"
                                  >
                                    Employee Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  {open ? (
                                    <Loadingdot />
                                  ) : (
                                    <HandleEdit formik={formik} />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm bttn-2 "
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
        count={staff.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableStaff;
