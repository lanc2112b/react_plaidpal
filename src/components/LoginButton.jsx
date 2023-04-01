import { useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import { Spinner } from "react-bootstrap";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const LoginButton = () => {

  const { handleGoogle, loading} = useFetch(
    `https://plaidpal-api.onrender.com/api/login`
  );

  useEffect(() => {

    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      window.google.accounts.id.renderButton(document.getElementById("loginDiv"), {
         type: "standard",
        //theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      {loading ?
        <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Logging in...</span>
          </Spinner>
          <span>Logging in...</span>
        </>
        : <div id="loginDiv"></div>}
      
      { } 

    </>
  );
};

export default LoginButton;
