import React from "react";
import clientApi from "../components/spotifyApi";
import "./trending.css";
import { useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const Trending = () => {
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    clientApi
      .get("browse/new-releases")
      .then((resp) => {
        console.log(resp.data.albums.items.slice(0, 10));
        setNewRelease(resp.data.albums.items.slice(0, 10));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="trending-div">
      <div className="playlist-head">
        <h2>Trending</h2>
      </div>

      {newRelease?.map((track, index) => (
        <div className="trending-body" key={track.id}>
          {console.log(track)}

          <div className="title-div">
            <div className="div-img">
              <img src={track?.images[0]?.url} alt="" className="title-img" />
            </div>
            <div className="title-subdiv">
              <p className="track-name">{track?.name}</p>
              <p>{track?.artists[0].name}</p>
            </div>
            <div className="title-play">
              <PlayCircleIcon style={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="div-name">
            <p className="track-name">{track?.name}</p>
          </div>
          <div>
            <p className="track-name">{track?.release_date}</p>
          </div>
          <div>
            <p className="track-name">0:30</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
