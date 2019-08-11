import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import env from "../env.json";

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
          clientId={`${env.GOOGLE_CLIENT}`}
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
