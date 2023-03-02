import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Search.css";
import axios from "axios";
import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Sidebar from "../Sidebar/Sidebar";
import Spinner from "../Spinner/Spinner";

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

const available = [
  { id: "Room No", label: "Room No", minWidth: 40 },

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
    minWidth: 150,
  },
  {
    id: "Room Status",
    label: "Room Status",
    minWidth: 120,
  },

  {
    id: "Action",
    label: "Action",
    minWidth: 150,
  },
];

function Available() {
  const [datas, setdatas] = useState([]);
  const [date, setdate] = useState(new Date());
  const [date3, setdate3] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ress = async () => {
    try {
      setloading(true);
      let resss = await axios.get(
        `https://api-digi.onrender.com/roomsavailable`
      );
      setdatas(resss.data);
      setloading(false);
    } catch (err) {
      alert("error  view");
    }
  };
  let handleBook = async (id) => {
    navigate(`/frontdesk/booking/${id}`, {
      state: { date, date3, options },
    });
  };
  useEffect(() => {
    ress();
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 p-0 ">
            <Sidebar />
          </div>

          <div className="col-lg-10 ">
            <div className="row">
              <div className="search-title ">
                <h3 className="ms-3 ">Available Rooms</h3>
              </div>
            </div>
            <hr />
            {loading ? (
              <Spinner />
            ) : (
              <div className="row  ">
                <Paper
                  className="table-head"
                  sx={{ width: "99%", overflow: "hidden", marginLeft: "10px" }}
                >
                  <TableContainer sx={{ maxHeight: 512 }}>
                    <Table stickyHeader aria-label="sticky table">
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
                        {datas
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
                                  {row.roomstatus === "Available" ? (
                                    <p className="text-success">
                                      {row.roomstatus}
                                    </p>
                                  ) : (
                                    <p className="text-danger">
                                      {row.roomstatus}
                                    </p>
                                  )}
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
                    count={datas.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Available;
