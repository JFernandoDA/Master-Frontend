import React from "react";
import { Member } from '../../common';
import { MemberTable } from "./memberTable.component";

interface Props {
  companyName: string,
  members: Member[],
  handlerCompany: (value:any) => void,
  cambio: boolean,
  setCambio: (cambio:boolean) => void
}

export const ListComponent: React.FC <Props> = ( {companyName, members, handlerCompany, cambio, setCambio} ) => {
  return (
    <>
      <h2>Listado de miembros de github</h2>
      <input type="text" value={companyName} onChange={ (e)=>handlerCompany(e.target.value) } name="filterBox" />
      <button onClick={ ()=>setCambio(!cambio)}>Filtrar</button>
      <MemberTable members={members}/>
    </>
  );
};
