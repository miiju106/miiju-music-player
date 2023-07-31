import React from "react";
import { useState, useEffect } from "react";
// import { setClientToken } from ".spotifyApi";
import clientApi from "./spotifyApi";
import "./sidebar.css";
import SideBarButton from "./sideBarButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sidebar = () => {
  useEffect(() => {
    clientApi
      .get("me")
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="sidebar-div">
      <div className="sidebar-subdiv">
        <img
          src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="sidebar-navIcons">
          <SideBarButton title="Library" to="/" icon={<LibraryMusicIcon />} className="side-bar"/>
          {/* <SideBarButton title="Feed" to="/feed" icon={<DashboardIcon />} /> */}
          
          <SideBarButton title="Player" to="/player" icon={<PlayArrowIcon />} className="side-bar" />
          <SideBarButton
            title="Trending"
            to="/trending"
            icon={<WhatshotIcon />}
            className="side-bar"
          />
          {/* <SideBarButton
          title="Favourites"
          to="/favourites"
          icon={<FavoriteIcon />}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
