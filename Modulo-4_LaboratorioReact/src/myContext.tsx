import React from "react";

interface Context {
    companyName:string;
    setCompanyName: (value:string) => void;
}

export const MyContext = React.createContext<Context>(null);

    export const MycontentProvider:React.FC = (props) => {
    const [companyName, setCompanyName] = React.useState("");

    const prueba = (companyName: string) => {
        setCompanyName(companyName)
    }

    return (
        <MyContext.Provider value={{companyName, setCompanyName:prueba}}>
        {props.children}
        </MyContext.Provider>
    )
}