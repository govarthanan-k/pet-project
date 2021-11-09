import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function CandidateList(props) {
  return (
    <Container maxWidth="false" style={{ marginTop: "10px" }}>
      <Typography
        component="h1"
        variant="h5"
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        Candidate List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Possible Role</TableCell>
              <TableCell align="left">Outcome</TableCell>
              <TableCell align="left">Registration Date</TableCell>
              <TableCell align="left">Last Change Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.candidates.length > 0 ? (
              props.candidates.map((candidate, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{candidate.firstName}</TableCell>
                  <TableCell align="left">{candidate.surname}</TableCell>
                  <TableCell align="left">{candidate.status}</TableCell>
                  <TableCell align="left">{candidate.possibleRole}</TableCell>
                  <TableCell align="left">{candidate.outcome}</TableCell>
                  <TableCell align="left">{candidate.registeredDate}</TableCell>
                  <TableCell align="left">{candidate.lastModified}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  colSpan={8}
                >
                  No candidates present. Please click{" "}
                  <Link href="/addCandidate">
                    <a style={{ color: "blue" }}>here</a>
                  </Link>{" "}
                  to add candidates.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
