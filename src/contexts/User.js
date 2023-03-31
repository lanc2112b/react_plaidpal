import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const initial = {
    user: {
      firstName: null,
      lastName: null,
      picture: null,
      email: null,
      token: null,
    },
  };


 // { "firstName": "Tony", "lastName": "Lancaster", "picture": "https://lh3.googleusercontent.com/a/AGNmyxb3gwtftUZCpFNFCtpAsPb-r9Me4N4iCx-DdzgW=s96-c", "email": "lanc1968@gmail.com", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbmMxOTY4QGdtYWlsLmNvbSIsImlhdCI6MTY4MDI0ODI2MSwiZXhwIjoxNjgwMzM0NjYxfQ.zM6tyBHkwO9ingvI00JWmbP1JUEDE8rhQ-_FEDaa6OE" }

  const [user, setUser] = useState(initial);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );

};
