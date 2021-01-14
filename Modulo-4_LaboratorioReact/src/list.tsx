import React from "react";
import { MyContext } from "./myContext";
import { MemberTable } from "./memberTable";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [company, setCompany] = React.useState("lemoncode");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { companyName, setCompanyName } = React.useContext(MyContext);

  let [cambio, setCambio] = React.useState(true);

  React.useEffect(() => {
    if( companyName==="" ){
      fetch(`https://api.github.com/orgs/${company}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
    }else {
      fetch(`https://api.github.com/orgs/${companyName}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
    }
  }, [cambio]);

  const handlerCompany = (value) =>{
    setCompanyName(value);
    setCompany(value);
  }

  return (
    <>
      <h2>Hello from List page</h2>
      <input type="text" value={companyName} onChange={ (e)=>handlerCompany(e.target.value) } name="filterBox" />
      <button onClick={ ()=>setCambio(!cambio)}>Filtrar</button>
      <MemberTable members={members}/>
    </>
  );
};
