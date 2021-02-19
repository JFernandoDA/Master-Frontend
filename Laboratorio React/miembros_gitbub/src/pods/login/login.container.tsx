import React from "react";
import { useHistory } from "react-router-dom";
import { LoginPage } from "./login.component";

export const LoginContainer: React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  const handleUserNameChange = (userName: string) => {
    setUserName(userName);
  };

  return (
    <LoginPage
      onNavigation={handleNavigation}
      userName={userName}
      onUserNameChange={handleUserNameChange}
      password={password}
      onPasswordChange={setPassword}
    />
  );
};
