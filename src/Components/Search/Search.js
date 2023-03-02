import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { FaAngleRight } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
import Spinner from "../Spinner/Spinner";
import "./Search.css";

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
    border: "#fff",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
    border: theme.palette.common.black,
  },
}));
const available = [
  { id: "Room No", label: "Room No", minWidth: 60 },
  {
    id: "Floor",
    label: "Floor",
    minWidth: 140,
  },
  {
    id: "Room Type",
    label: "Room Type",
    minWidth: 140,
  },

  {
    id: "Ac",
    label: "Ac",
    minWidth: 120,
  },

  {
    id: "Bed",
    label: "Bed",
    minWidth: 110,
  },

  {
    id: "Action",
    label: "Action",
    minWidth: 150,
  },
];

function Search() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setloading] = useState(false);
  const [floor, setfloor] = useState("");
  const [type, settype] = useState("");

  let navigate = useNavigate();

  let handlesearch = async () => {
    setloading(true);
    try {
      let result = await axios.get(
        `https://api-digi.onrender.com/roomsavailable`
      );
      setdata(result.data);
      setloading(false);
    } catch (err) {}
  };

  let handleBook = async (id) => {
    navigate(`/frontdesk/booking/${id}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    handlesearch();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0 ">
            <Sidebar />
          </div>
          <div className="col-lg-10 ">
            <div className="row ">
              <div className="search-title ">
                <h3>Available Rooms</h3>
              </div>

              <hr />
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div className="nav-menu2 py-2 ps-4">
                    <div>
                      <Link to="/frontdesk">FrontDesk</Link>
                      <FaAngleRight className="sidebar-arrow" />
                      <Link to="/frontdesk/booking">Room Booking </Link>
                    </div>
                    <div className="search-con">
                      <div className="search-item">
                        <div>
                          <label for="Date" className="mx-5">
                            Date
                          </label>
                        </div>
                        <input
                          type="date"
                          className="form-control-se me-3"
                          placeholder="search"
                          // onChange={(event) => {
                          //   setSearch(event.target.value);
                          // }}
                        />
                      </div>
                      <div>
                        <div>
                          <label for="floor" className="ms-4">
                            Floor
                          </label>
                        </div>

                        <select
                          name="floor"
                          id="floor"
                          onChange={(event) => {
                            setfloor(event.target.value);
                          }}
                          className="form-control-se"
                        >
                          <option value="" selected>
                            -select-
                          </option>
                          <option value="Second">Second</option>
                          <option value="Third">Third</option>
                          <option value="Fourth">Fourth</option>
                          <option value="Fifth">Fifth</option>
                        </select>
                      </div>
                      <div>
                        <div>
                          <label for="roomtype">Room Type</label>
                        </div>

                        <select
                          name="roomtype"
                          id="roomtype"
                          className="form-control-se"
                          onChange={(event) => {
                            settype(event.target.value);
                          }}
                        >
                          <option value="" selected>
                            -select-
                          </option>
                          <option value="single">Single</option>
                          <option value="double">Double</option>
                          <option value="deluxe">Deluxe</option>
                          <option value="super deluxe">Super Deluxe</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Paper
                      className="table-head  mt-2 "
                      sx={{
                        width: "100%",
                        overflow: "hidden",
                        marginLeft: "5px",
                      }}
                    >
                      <TableContainer sx={{ maxHeight: 428 }}>
                        <Table
                          stickyHeader
                          aria-label="sticky table"
                          sx={{
                            "& .MuiTableRow-root:hover": {
                              border: "black",
                            },
                          }}
                        >
                          <TableHead>
                            <TableRow>
                              {available.map((column) => (
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
                            {data
                              .filter((row) => {
                                if (floor === "") {
                                  return row;
                                } else if (
                                  row.floor
                                    .toLowerCase()
                                    .includes(floor.toLowerCase())
                                ) {
                                  return row;
                                }
                              })
                              .filter((row) => {
                                if (type === "") {
                                  return row;
                                } else if (
                                  row.roomtype
                                    .toLowerCase()
                                    .includes(type.toLowerCase())
                                ) {
                                  return row;
                                }
                              })
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )

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
                                      {row.roomnumber}
                                    </TableCell>
                                    <TableCell
                                      style={{
                                        border: "1px solid #ece9e9",
                                        textAlign: "center",
                                      }}
                                    >
                                      {row.floor}
                                    </TableCell>
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
                                      <button
                                        className="btn btn-add "
                                        onClick={() => {
                                          handleBook(row._id);
                                        }}
                                      >
                                        Book Now
                                      </button>
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
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </Paper>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
