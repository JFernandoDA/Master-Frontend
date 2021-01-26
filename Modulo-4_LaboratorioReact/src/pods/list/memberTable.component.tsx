import React from "react";
import { Member } from '../../common';
import {MemberRow} from "./memberRow.component";

interface Props {
    members: Member[];
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
            <MemberRow member={member}/>
          ))}
        </tbody>
      </table>
    );
}