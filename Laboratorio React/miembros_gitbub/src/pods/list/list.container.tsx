import React from "react";
import { MyContext } from "../../myContext";
import { getMembers } from "../../service/apiService";
import { Member } from "../../common";
import { ListComponent } from "./list.component";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const { companyName, setCompanyName } = React.useContext(MyContext);
  let [cambio, setCambio] = React.useState(true);

  React.useEffect(() => {
    getMembers(companyName).then(
      json => {
        setMembers(json);
      },
      error => {
        alert(
          `Se ha producido el siguientet error en la llamada a la API: ${error.message}`
        );
        console.error(
          `Se ha producido el siguientet error en la llamada a la API: ${error.message}`
        );
      }
    );
  }, [cambio]);

  const handlerCompany = value => {
    setCompanyName(value);
  };

  return (
    <ListComponent
      companyName={companyName}
      members={members}
      handlerCompany={handlerCompany}
      cambio={cambio}
      setCambio={setCambio}
    />
  );
};
