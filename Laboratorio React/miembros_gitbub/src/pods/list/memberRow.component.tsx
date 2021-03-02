import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from "../../common";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  member: Member;
}

export const MemberRow: React.FC<Props> = ({ member }) => {
  return (
    <TableRow>
      <TableCell align="center">
        <Avatar
          src={member.avatar_url}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </TableCell>
      <TableCell align="center">
        <span>{member.id}</span>
      </TableCell>
      <TableCell align="center">
        <Link to={generatePath("/detail/:id", { id: member.login })}>
          {member.login}
        </Link>{" "}
      </TableCell>
    </TableRow>
  );
};
