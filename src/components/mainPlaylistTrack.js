import React from "react";
import "./mainPlaylistTrack.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useNavigate } from "react-router-dom";


const MainPlaylistTrack = ({
  playlistTracks,
  mainPlaylist,
  currentMainPlaylist,
}) => {
  const navigate = useNavigate();

  const playPlaylist = (idName, songName) => {
    navigate(`/player/${songName}`, { state: { id: idName, song: songName } });
  };

  return (
    <div className="playlist-main">
      

      {playlistTracks?.map((track, index) => (
        <div
          className="playlist-body"
          onClick={() =>
            playPlaylist(currentMainPlaylist.id, currentMainPlaylist.name)
          }
        >
          {/* {console.log(track)} */}

          <div className="title-div">
            <div className="div-img">
              <img
                src={track.track.album?.images[0]?.url}
                alt=""
                className="title-img"
              />
            </div>
            <div className="title-subdiv">
              <p className="track-name">{track.track?.name}</p>
              <p>{track.track.album?.artists[0].name}</p>
            </div>
            <div className="title-play">
              <PlayCircleIcon style={{ fontSize: "25px" }} />
            </div>
          </div>
          <div className="firstDiv-name">
            <p className="track-name">{track.track.album?.name}</p>
            
          </div>
          <div  className="secondDiv-name">
            <p className="track-name">{track.track.album?.release_date}</p>
          </div>
          <div className="thirdDiv-name">
            <p className="track-name">0:30</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPlaylistTrack;
