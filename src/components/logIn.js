import React from "react";
import "./login.css";
import {loginEndpoint } from "./spotifyApi"

const LogIn = () => {
  return (
    <div className="login-ui">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify-logo"
        className="logo-img"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">CONNECT</div>
      </a>
    </div>
  );
};

export default LogIn;
