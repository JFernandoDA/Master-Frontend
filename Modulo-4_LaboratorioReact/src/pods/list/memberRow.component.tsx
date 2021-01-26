import React from "react";
import { Link, generatePath } from "react-router-dom";
import { Member } from '../../common';

interface Props {
    member: Member;
}

export const MemberRow: React.FC<Props> = ({ member }) => {
    return(
        <tr>
      <td>
        <img src={member.avatar_url} style={{ width: "5rem" }} />
      </td>
      <td>
        <span>{member.id}</span>
      </td>
      <td>
        <Link to={generatePath("/detail/:id", { id: member.login })}>
          {member.login}
        </Link>{" "}
      </td>
    </tr>
    );
}
