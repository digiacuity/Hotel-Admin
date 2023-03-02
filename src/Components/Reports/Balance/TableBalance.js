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
  { id: "no", label: "No", minWidth: 50 },

  {
    id: "Room No",
    label: "Room No",
    minWidth: 20,
  },
  {
    id: "Name",
    label: "Name",
    minWidth: 150,
  },
  {
    id: "Balance",
    label: "Balance",
    minWidth: 100,
  },
  {
    id: "Total Amount",
    label: "Total Amount",
    minWidth: 100,
  },
  {
    id: "Advance",
    label: "Advance",
    minWidth: 150,
  },
  {
    id: "Arr Date",
    label: "Arr Date",
    minWidth: 100,
  },
  {
    id: "Dep Date",
    label: "Dep Date",
    minWidth: 100,
  },
];

function TableBalance() {
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
              <StyledTableRow
                role="checkbox"
                tabIndex={-1}
                style={{
                  border: "1px solid #ece9e9",
                  textAlign: "center",
                }}
              >
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  1
                </TableCell>
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  101
                </TableCell>
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  Name
                </TableCell>

                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  5000
                </TableCell>

                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  9000
                </TableCell>
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  2000
                </TableCell>
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  21-11-2022
                </TableCell>
                <TableCell
                  className="table-rep"
                  style={{
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                  }}
                >
                  24-11-2022
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="p-0"
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default TableBalance;
