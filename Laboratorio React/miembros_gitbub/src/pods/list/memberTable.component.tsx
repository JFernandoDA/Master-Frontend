import React from "react";
import { Member } from "../../common";
import { MemberRow } from "./memberRow.component";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface Props {
  members: Member[];
}

export const MemberTable: React.FC<Props> = ({ members }) => {
  return (
    <TableContainer>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map(member => (
            <MemberRow member={member} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
