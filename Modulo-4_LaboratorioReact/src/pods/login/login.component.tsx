import React from "react";

interface Props {
  userName: string;
  onNavigation: (e: React.FormEvent<HTMLFormElement>) => void;
  onUserNameChange: (userName: string) => void,
  password: string,
  onPasswordChange: (password: string) => void
}

export const LoginPage: React.FC <Props> = ( { onNavigation, userName, onUserNameChange, password, onPasswordChange } ) => {
  return (
    <form onSubmit={onNavigation}>
      <h2>Hello from login page</h2>
      <div>
        <div>
          <label>Username: </label>
          <input
            value={userName}
            onChange={(e) => onUserNameChange(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">login</button>
    </form>
  );
};
