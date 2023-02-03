import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState,useEffect } from "react";
import baseUrl from "../../utils/baseURL";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function CustomizedTables() {
  const [data, newData] = useState([]);
const fetchcategory = async () => {
  const response = await axios.get(`${baseUrl}/api/category`);
  return newData(response.data);
};
useEffect(() => {
  fetchcategory()
}, []);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, marginTop: "5px" }}
        aria-label="customized table"
      >
       <TableHead>

            <TableRow>

              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
            </TableRow>
          </TableHead>

        {data.map((obj,index)=>(
           <>
          <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {index+1}
                </StyledTableCell>
                <StyledTableCell align="center">{obj.title}</StyledTableCell>
              </StyledTableRow>
            </TableBody></>
        ))}
      </Table>
    </TableContainer>
  );
}
