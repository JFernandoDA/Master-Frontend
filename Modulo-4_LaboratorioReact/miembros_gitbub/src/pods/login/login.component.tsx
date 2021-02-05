import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CentredLayaout } from "../../layout/index";

interface Props {
  userName: string;
  onNavigation: (e: React.FormEvent<HTMLFormElement>) => void;
  onUserNameChange: (userName: string) => void;
  password: string;
  onPasswordChange: (password: string) => void;
}

export const LoginPage: React.FC<Props> = ({
  onNavigation,
  userName,
  onUserNameChange,
  password,
  onPasswordChange
}) => {
  return (
    <CentredLayaout>
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form onSubmit={onNavigation}>
            <h2>Hello from login page</h2>
            <div>
              <div>
                <TextField
                  label="Name"
                  margin="normal"
                  required={true}
                  value={userName}
                  onChange={e => onUserNameChange(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  required={true}
                  value={password}
                  onChange={e => onPasswordChange(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </CentredLayaout>
  );
};
