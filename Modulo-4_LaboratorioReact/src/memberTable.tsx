import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "./list";


interface Props {
    members: MemberEntity[];
}

export const MemberTable: React.FC<Props> = ({ members }) => {
    return (
        <table className="table">
<thead>
  <tr>
    <th>Avatar</th>
    <th>Id</th>
    <th>Name</th>
  </tr>
</thead>
<tbody>
  {members.map((member) => (
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
  ))}
</tbody>
</table>
    )
}