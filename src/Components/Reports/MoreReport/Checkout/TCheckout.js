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
import Spinner from "../../../Spinner/Spinner";
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

function TCheckout({ columns, value, load }) {
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
    <>
      {load ? (
        <Spinner />
      ) : (
        <>
          <Paper
            className="table-head ms-2 "
            sx={{ width: "100%", overflow: "hidden" }}
          >
            <TableContainer sx={{ maxHeight: 550 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <StyledTableCell
                        className="table-lable-rep"
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
                  {value.map((row) => {
                    return (
                      <StyledTableRow
                        role="checkbox"
                        tabIndex={-1}
                        style={{
                          border: "1px solid #ece9e9",
                          textAlign: "center",
                        }}
                      >
                        {/* <TableCell
                      className="table-rep"
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {value.length}
                    </TableCell> */}
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {row.roomno}
                        </TableCell>
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {moment(row.checkout).format("DD-MM-YYYY / hh:mm a")}
                        </TableCell>

                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {row.mode}
                        </TableCell>

                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {row.bookingno}
                        </TableCell>
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {row.noguest}
                        </TableCell>

                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          {row.amount}
                        </TableCell>
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          {row.advance}
                        </TableCell>
                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {moment(row.checkin).format("DD-MM-YYYY / hh:mm a")}
                        </TableCell>

                        <TableCell
                          className="table-rep"
                          style={{
                            border: "1px solid #ece9e9",
                            textAlign: "center",
                          }}
                        >
                          {moment(row.date).format("DD-MM-YYYY / hh:mm a")}
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
              count={value.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      )}
    </>
  );
}
export default TCheckout;
