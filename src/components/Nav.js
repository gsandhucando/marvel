import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

const Nav = () => {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <div style={{ height: "14vh", background: "black" }}>
      <Link to="/">
      <h1 style={{ color: "red", display: 'flex', justifyContent: 'center' }}>MARVEL</h1>
      </Link>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Nav;
