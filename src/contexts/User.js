import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initial = {
    idToken: null,
    serverAuthCode: null,
    scopes: [],
    user: {
      email: null,
      id: null,
      givenName: null,
      familyName: null,
      photo: null,
      name: null,
    },
  };

  const [user, setUser] = useState(initial);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );

};
