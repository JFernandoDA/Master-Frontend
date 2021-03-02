import React from "react";
import { Member } from "../../common";
import { MemberTable } from "./memberTable.component";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CentredLayaout } from "../../layout/index";

interface Props {
  companyName: string;
  members: Member[];
  handlerCompany: (value: any) => void;
  cambio: boolean;
  setCambio: (cambio: boolean) => void;
}

export const ListComponent: React.FC<Props> = ({
  companyName,
  members,
  handlerCompany,
  cambio,
  setCambio
}) => {
  return (
    <>
      <CentredLayaout>
        <h2>Listado de miembros de github</h2>
        <TextField
          label="Nombre Empresa"
          variant="outlined"
          type="text"
          value={companyName}
          onChange={e => handlerCompany(e.target.value)}
          name="filterBox"
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCambio(!cambio)}
        >
          Filtrar
        </Button>
        <MemberTable members={members} />
      </CentredLayaout>
    </>
  );
};
