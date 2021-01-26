import React from "react";
import { Link } from "react-router-dom";
import { Member } from '../../common';

interface Props {
  id:string,
  companyName: String,
  member: Member
}

export const DetailPage: React.FC <Props> = ( { id, companyName, member } ) => {
  return (
    <>
      <div>
        <h2>Detalles del miembro de {companyName}</h2>
        <h3>User Id: {member.id}</h3>
        <br />
        <h3>Login: {member.login}</h3>
        <br />
        <img src={member.avatar_url} style={{ width: "5rem" }}></img>
      </div>
      <br />
      <Link to="/list">Back to list page</Link>
    </>
  );
};
